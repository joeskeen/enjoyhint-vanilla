import { IRenderData } from "./types/IRenderData.js";
import { EnjoyHintImpl } from "./enjoyhint-impl.js";
import { ICircleOptions } from "./types/ICircleOptions.js";
import {
  IButtonConfiguration,
  IStepConfiguration,
} from "./types/IStepConfiguration.js";
import { classes as cl, ids } from "./selectors.js";
import { registerEvent, unregisterEvent, unregisterEvents } from "./util/events.js";
import { IEnjoyHintOptions } from "./types/IEnjoyHintOptions.js";

export class EnjoyHint {
  static readonly defaults: IEnjoyHintOptions = {
    onStart: () => {},
    onEnd: () => {},
    onSkip: () => {},
    onNext: () => {},
    btnPrevText: "Previous",
    btnNextText: "Next",
    btnSkipText: "Skip",
    backgroundColor: "rgba(0,0,0,0.6)",
  };

  readonly options: IEnjoyHintOptions;
  readonly originalElementOverflow: string;

  data: IStepConfiguration[] = [];
  currentStepIndex = 0;
  $eventElement?: HTMLElement | null;
  nextUserClass: string | undefined;
  prevUserClass: string | undefined;
  skipUserClass: string | undefined;
  get currentStep() {
    return this.data[this.currentStepIndex];
  }

  instance!: EnjoyHintImpl;

  constructor(
    private readonly hostElement: HTMLElement,
    options: IEnjoyHintOptions = {}
  ) {
    this.options = { ...EnjoyHint.defaults, ...options };
    this.originalElementOverflow = getComputedStyle(hostElement).overflow;

    this.init();

    registerEvent(window, "resize", () => {
      if (this.$eventElement != null) {
        this.redoEventsNearRect(this.$eventElement.getBoundingClientRect());
      }
    });
  }

  private readonly lockTouch: EventListener = (e: Event) => {
    e.preventDefault();
  };

  private readonly inputHandler: EventListener = (event: Event) => {
    if (event instanceof KeyboardEvent && event.key !== this.currentStep.key) {
      return;
    }

    this.currentStepIndex++;
    this.stepAction();
  };

  private init() {
    if (cl.enjoyHint.element()) {
      cl.enjoyHint.element()?.remove();
    }

    this.hostElement.style.overflow = "hidden";

    registerEvent(document, "touchmove", this.lockTouch);

    const opts = {
      onNextClick: () => {
        this.nextStep();
      },
      onPrevClick: () => {
        this.prevStep();
      },
      onSkipClick: () => {
        this.options.onSkip?.();
        this.skipAll();
      },
      fill: this.options.backgroundColor,
    };
    this.instance = new EnjoyHintImpl(this.hostElement, opts);
  }

  private destroyEnjoy() {
    unregisterEvents();
    cl.enjoyHint.element()?.remove();
    this.hostElement.style.overflow = this.originalElementOverflow;
  }

  private clear() {
    [
      {
        button: cl.previousBtn.element()!,
        className: this.currentStep?.prevButton?.className,
        text: this.currentStep?.prevButton?.text ?? this.options.btnPrevText,
      },
      {
        button: cl.nextBtn.element()!,
        className: this.currentStep?.nextButton?.className,
        text: this.currentStep?.nextButton?.text ?? this.options.btnNextText,
      },
      {
        button: cl.skipBtn.element()!,
        className: this.currentStep?.skipButton?.className,
        text: this.currentStep?.skipButton?.text ?? this.options.btnSkipText,
      },
    ]
      .filter((x) => !!x.button)
      .forEach(({ button, className, text }) => {
        if (className) {
          button.classList.remove(className);
        }
        button.textContent = text ?? '';
      });
  }

  private hideCurrentHint() {
    this.renderCircle();
    ids.label.element()?.remove();
    ids.arrowLine.element()?.remove();
    this.hidePrev();
    this.hideNext();
    this.hideSkip();
  }

  private stepAction() {
    if (!this.data?.[this.currentStepIndex]) {
      this.hide();
      this.options.onEnd?.();
      this.destroyEnjoy();
      return;
    }

    this.options.onNext?.();

    const $enjoyhint = cl.enjoyHint.element();

    $enjoyhint?.classList.remove(
      `${cl.enjoyHint.name}-step-${this.currentStepIndex}`
    );
    $enjoyhint?.classList.remove(
      `${cl.enjoyHint.name}-step-${this.currentStepIndex + 1}`
    );
    $enjoyhint?.classList.remove(
      `${cl.enjoyHint.name}-step-${this.currentStepIndex + 2}`
    );
    $enjoyhint?.classList.add(
      `${cl.enjoyHint.name}-step-${this.currentStepIndex + 1}`
    );

    const stepData = this.data[this.currentStepIndex];

    let scrollSpeed = stepData.scrollAnimationSpeed ?? 250;

    stepData.onBeforeStart?.();

    const timeout = stepData.timeout || 0;

    setTimeout(() => {
      if (!stepData.selector) {
        for (const [eventSelector, description] of Object.entries(stepData)) {
          if (eventSelector.includes(" ")) {
            const [event, selector] = eventSelector.split(" ");
            stepData.selector = selector;
            stepData.event = event as keyof HTMLElementEventMap;

            if (event == "next" || event == "auto" || event == "custom") {
              stepData.eventType = event;
            }

            stepData.description = description;
          }
        }
      }

      setTimeout(() => {
        this.clear();
      }, 250);

      const isHintInViewport = document
        .querySelector(stepData.selector!)!
        .getBoundingClientRect();

      if (
        isHintInViewport.top < 0 ||
        isHintInViewport.bottom >
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        this.hideCurrentHint();
        document.body.scrollTo({
          top: isHintInViewport.top,
          behavior: "smooth",
        });
      } else {
        scrollSpeed = 250;
      }

      setTimeout(() => {
        const $element = document.querySelector<HTMLElement>(
          stepData.selector!
        )!;
        const standardEventName = stepData.event!;
        const customEventName = this.makeEventName(stepData.event);
        this.show();
        this.$eventElement = $element;
        console.log("stepAction", stepData);

        if (stepData.eventSelector) {
          this.$eventElement = document.querySelector(stepData.eventSelector);
        }

        this.$eventElement?.removeEventListener(
          standardEventName,
          this.stepAction
        );
        this.$eventElement?.removeEventListener(
          customEventName,
          this.stepAction
        );

        unregisterEvent(this.$eventElement, "keydown", this.inputHandler);

        if (stepData.eventType === "key") {
          registerEvent(this.$eventElement, "keydown", this.inputHandler);
        }

        if (!stepData.showNext) {
          this.hideNext();
        }

        this.hidePrev();

        if (this.currentStepIndex > 0) {
          this.showPrev();
        }

        if (stepData.showPrev === false) {
          this.hidePrev();
        }

        if (stepData.showSkip === false) {
          this.hideSkip();
        } else {
          this.showSkip();
        }

        if (stepData.nextButton) {
          const $nextBtn = cl.nextBtn.element()!;

          $nextBtn.classList.add(stepData.nextButton.className || "");
          $nextBtn.textContent = stepData.nextButton.text || "Next";
          this.nextUserClass = stepData.nextButton.className;
        }

        if (stepData.prevButton) {
          const $prevBtn = cl.previousBtn.element()!;

          $prevBtn.classList.add(stepData.prevButton.className || "");
          $prevBtn.textContent = stepData.prevButton.text || "Previous";
          this.prevUserClass = stepData.prevButton.className;
        }

        if (stepData.skipButton) {
          const $skipBtn = cl.skipBtn.element()!;

          $skipBtn.classList.add(stepData.skipButton.className || "");
          $skipBtn.textContent = stepData.skipButton.text || "Skip";
          this.skipUserClass = stepData.skipButton.className;
        }

        if (stepData.eventType) {
          switch (stepData.eventType) {
            case "auto":
              (this.$eventElement as any)?.[stepData.event ?? ""]?.();

              switch (stepData.event) {
                case "click":
                  break;
              }
              this.currentStepIndex++;
              this.stepAction();
              return;

            case "custom":
              registerEvent(this.$eventElement, customEventName, () => {
                this.currentStepIndex++;
                unregisterEvent(this.$eventElement, customEventName, this.stepAction);
                this.stepAction();
              });

              break;

            case "next":
              this.showNext();
              break;
          }
        } else {
          registerEvent(this.$eventElement, standardEventName, this.inputHandler);
        }

        const maxHabarites = Math.max(
          $element.offsetWidth,
          $element.offsetHeight
        );
        const radius = stepData.radius || Math.round(maxHabarites / 2) + 5;
        const offset = $element.getBoundingClientRect();
        const w = $element.offsetWidth;
        const h = $element.offsetHeight;
        const shapeMargin =
          stepData.margin !== undefined ? stepData.margin : 10;

        const coords = {
          x: offset.left + Math.round(w / 2),
          y: offset.top + Math.round(h / 2) - window.scrollY,
        };

        const shapeData: IRenderData = {
          enjoyHintElementSelector: stepData.selector,
          centerX: coords.x,
          centerY: coords.y,
          text: stepData.description,
          arrowColor: stepData.arrowColor,
          top: stepData.top,
          bottom: stepData.bottom,
          left: stepData.left,
          right: stepData.right,
          margin: stepData.margin,
          height: NaN,
          width: NaN,
          radius: NaN,
        };

        const customBtnProps = {
          nextButton: stepData.nextButton,
          prevButton: stepData.prevButton,
        };

        if (shapeData.centerX === 0 && shapeData.centerY === 0) {
          this.hide();
          this.destroyEnjoy();
          return console.log("Error: Element position couldn't be reached");
        }

        if (stepData.shape && stepData.shape === "circle") {
          shapeData.shape = "circle";
          shapeData.radius = radius;
        } else {
          shapeData.radius = 0;
          shapeData.width = w + shapeMargin;
          shapeData.height = h + shapeMargin;
        }

        this.renderLabelWithShape(shapeData, customBtnProps);
      }, scrollSpeed + 20);
    }, timeout);
  }

  private nextStep() {
    this.currentStepIndex++;
    this.stepAction();
  }
  private prevStep() {
    this.currentStepIndex--;
    this.stepAction();
  }
  private skipAll() {
    const stepData = this.data[this.currentStepIndex];
    const $element = document.querySelector(stepData.selector!)!;

    this.$eventElement?.removeEventListener(
      this.makeEventName(stepData.event),
      this.stepAction
    );
    $element.removeEventListener("keydown", this.inputHandler);

    this.destroyEnjoy();
  }
  private makeEventName(name: string | undefined, isCustom = false) {
    return name + (isCustom ? "custom" : "") + ".enjoy_hint";
  }

  stop() {
    this.skipAll();
  }

  reRunScript(cs: number) {
    this.currentStepIndex = cs;
    this.stepAction();
  }

  run() {
    this.currentStepIndex = 0;
    this.options.onStart?.();
    this.stepAction();
  }

  resume() {
    this.stepAction();
  }

  setCurrentStep(cs: number) {
    this.currentStepIndex = cs;
  }

  getCurrentStep() {
    return this.currentStepIndex;
  }

  trigger(eventName: string) {
    switch (eventName) {
      case "next":
        this.nextStep();
        break;

      case "skip":
        this.skipAll();
        break;

      default:
        this.hostElement.dispatchEvent(
          new CustomEvent(this.makeEventName(eventName, true))
        );
    }
  }

  set(data: IStepConfiguration[]) {
    if (!(data instanceof Array) || data.length < 1) {
      throw new Error("Configurations list isn't correct.");
    }

    this.data = data;
  }

  hide() {
    this.instance.hide();
  }
  show() {
    this.instance.show();
  }
  showPrev() {
    this.instance.showPrevBtn();
  }
  showSkip() {
    this.instance.showSkipBtn();
  }
  showNext() {
    this.instance.showNextBtn();
  }
  redoEventsNearRect(arg0: DOMRect) {
    this.instance.disableEventsNearRect(arg0);
  }

  renderCircle(circle?: ICircleOptions) {
    this.instance.renderCircle(circle);
  }
  hidePrev() {
    this.instance.hidePrevBtn();
  }
  hideNext() {
    this.instance.hideNextBtn();
  }
  hideSkip() {
    this.instance.hideSkipBtn();
  }

  renderLabelWithShape(
    shapeData: IRenderData,
    customBtnProps: {
      nextButton: IButtonConfiguration | undefined;
      prevButton: IButtonConfiguration | undefined;
    }
  ) {
    this.instance.renderLabelWithShape(shapeData, customBtnProps);
  }
}
