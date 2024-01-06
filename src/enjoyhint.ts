import { EnjoyHintImpl } from "./jquery.enjoyhint.js";

interface IEnjoyHintOptions {
  onStart?: () => void;
  onEnd?: () => void;
  onSkip?: () => void;
  onNext?: () => void;
  btnNextText?: string;
  btnSkipText?: string;
  backgroundColor?: string;
}

interface ShapeData {
  enjoyHintElementSelector?: string;
  centerX?: number;
  centerY?: number;
  shape?: string;
  radius?: number;
  width?: number;
  height?: number;
  text?: string;
  arrowColor?: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  margin?: number;
  scroll?: number;
}

interface StepData {
  [key: string]: any;

  shape: string;
  showPrev: boolean;
  showSkip: boolean;
  arrowColor: string;
  top: number;
  bottom: number;
  left: number;
  right: number;
  scroll: number;
  margin: number;
  radius: number;
  showNext: boolean;
  eventSelector: string;
  keyCode?: string;
  prevButton?: {
    className?: string;
    text?: string;
  };
  nextButton?: {
    className?: string;
    text?: string;
  };
  skipButton?: {
    className?: string;
    text?: string;
  };
  scrollAnimationSpeed?: number;
  onBeforeStart?: () => void;
  timeout?: number;
  selector?: string;
  event?: string;
  eventType?: string;
  description?: string;
}

export class EnjoyHint {
  static readonly defaults: IEnjoyHintOptions = {
    onStart: () => {},
    onEnd: () => {},
    onSkip: () => {},
    onNext: () => {},
    btnNextText: "Next",
    btnSkipText: "Skip",
    backgroundColor: "rgba(0,0,0,0.6)",
  };

  readonly options: IEnjoyHintOptions;
  readonly originalElementOverflow: string;

  data: StepData[] = [];
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
    private readonly element: HTMLElement,
    options: IEnjoyHintOptions = {}
  ) {
    this.options = { ...EnjoyHint.defaults, ...options };
    this.originalElementOverflow = getComputedStyle(element).overflow;

    
    this.init();
    
    window.addEventListener("resize", () => {
      if (this.$eventElement != null) {
        this.redoEventsNearRect(this.$eventElement.getBoundingClientRect());
      }
    });
  }

  private readonly lockTouch: EventListener = (e: Event) => {
    e.preventDefault();
  };

  private readonly inputHandler: EventListener = (event: Event) => {
    if (event instanceof KeyboardEvent && event.code !== this.currentStep.keyCode) {
      return;
    }

    this.currentStepIndex++;
    this.stepAction();
  };

  private init() {
    if (document.querySelector(".enjoyhint")) {
      document.querySelector(".enjoyhint")?.remove();
    }

    this.element.style.overflow = "hidden";

    document.addEventListener("touchmove", this.lockTouch);

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
    this.instance = new EnjoyHintImpl(this.element, opts);
  }

  private destroyEnjoy() {
    document.querySelector(".enjoyhint")?.remove();
    this.element.style.overflow = this.originalElementOverflow;
    document.removeEventListener("touchmove", this.lockTouch);
  }

  private clear() {
    const $nextBtn = document.querySelector<HTMLButtonElement>(
      ".enjoyhint_next_btn"
    )!;
    const $skipBtn = document.querySelector<HTMLButtonElement>(
      ".enjoyhint_skip_btn"
    )!;
    const $prevBtn = document.querySelector<HTMLButtonElement>(
      ".enjoyhint_prev_btn"
    )!;

    if (this.currentStep?.prevButton?.className) {
      $prevBtn.classList.remove(this.currentStep?.prevButton?.className || "");
    }
    if (this.currentStep?.nextButton?.className) {
      $nextBtn.classList.remove(this.currentStep?.nextButton?.className || "");
    }
    $nextBtn.textContent = this.options.btnNextText ?? "";
    if (this.currentStep?.skipButton?.className) {
      $skipBtn.classList.remove(this.currentStep?.skipButton?.className || "");
    }
    $skipBtn.textContent = this.options.btnSkipText ?? "";
  }

  private hideCurrentHint() {
    this.renderCircle([]);
    document.querySelector("#enjoyhint_label")?.remove();
    document.querySelector("#enjoyhint_arrpw_line")?.remove();
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

    const $enjoyhint = document.querySelector(".enjoyhint");

    $enjoyhint?.classList.remove(`enjoyhint-step-${this.currentStepIndex}`);
    $enjoyhint?.classList.remove(`enjoyhint-step-${this.currentStepIndex + 1}`);
    $enjoyhint?.classList.remove(`enjoyhint-step-${this.currentStepIndex + 2}`);
    $enjoyhint?.classList.add(`enjoyhint-step-${this.currentStepIndex + 1}`);

    const stepData = this.data[this.currentStepIndex];

    let scrollSpeed = stepData.scrollAnimationSpeed ?? 250;

    stepData.onBeforeStart?.();

    const timeout = stepData.timeout || 0;

    setTimeout(() => {
      if (!stepData.selector) {
        for (const prop of Object.keys(stepData)) {
          if (stepData.hasOwnProperty(prop) && prop.split(" ")[1]) {
            const [event, selector] = prop.split(" ");
            stepData.selector = selector;
            stepData.event = event;

            if (event == "next" || event == "auto" || event == "custom") {
              stepData.eventType = event;
            }

            stepData.description = stepData[prop];
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

        if (stepData.eventSelector) {
          this.$eventElement = document.querySelector(stepData.eventSelector);
        }

        this.$eventElement?.removeEventListener(standardEventName, this.stepAction);
        this.$eventElement?.removeEventListener(customEventName, this.stepAction);

        this.$eventElement?.removeEventListener("keydown", this.inputHandler);

        if (!stepData.eventType && stepData.event == "key") {
          this.$eventElement?.addEventListener("keydown", this.inputHandler);
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
          const $nextBtn = document.querySelector<HTMLButtonElement>(
            ".enjoyhint_next_btn"
          )!;

          $nextBtn.classList.add(stepData.nextButton.className || "");
          $nextBtn.textContent = stepData.nextButton.text || "Next";
          this.nextUserClass = stepData.nextButton.className;
        }

        if (stepData.prevButton) {
          const $prevBtn = document.querySelector<HTMLButtonElement>(
            ".enjoyhint_prev_btn"
          )!;

          $prevBtn.classList.add(stepData.prevButton.className || "");
          $prevBtn.textContent = stepData.prevButton.text || "Previous";
          this.prevUserClass = stepData.prevButton.className;
        }

        if (stepData.skipButton) {
          const $skipBtn = document.querySelector<HTMLButtonElement>(
            ".enjoyhint_skip_btn"
          )!;

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
              this.$eventElement?.addEventListener(customEventName, () => {
                this.currentStepIndex++;
                this.$eventElement?.removeEventListener(customEventName, this.stepAction);
                this.stepAction();
              });

              break;

            case "next":
              this.showNext();
              break;
          }
        } else {
          this.$eventElement?.addEventListener(
            standardEventName,
            this.inputHandler
          );
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

        const shapeData: ShapeData = {
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
          scroll: stepData.scroll,
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

  private stop() {
    this.skipAll();
  }

  private reRunScript(cs: number) {
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

  private setCurrentStep(cs: number) {
    this.currentStepIndex = cs;
  }

  private getCurrentStep() {
    return this.currentStepIndex;
  }

  private trigger(eventName: string) {
    switch (eventName) {
      case "next":
        this.nextStep();
        break;

      case "skip":
        this.skipAll();
        break;

      default:
        this.element.dispatchEvent(
          new CustomEvent(this.makeEventName(eventName, true))
        );
    }
  }

  set(data: StepData[]) {
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
  redoEventsNearRect(arg0: any) {
    this.instance.disableEventsNearRect(arg0);
  }

  renderCircle(arg0: any) {
    this.instance.renderCircle(arg0);
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
    shapeData: ShapeData,
    customBtnProps: {
      nextButton:
        | { className?: string | undefined; text?: string | undefined }
        | undefined;
      prevButton:
        | { className?: string | undefined; text?: string | undefined }
        | undefined;
    }
  ) {
    this.instance.renderLabelWithShape(shapeData, customBtnProps);
  }
}
