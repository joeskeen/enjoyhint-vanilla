import { RenderData } from "./RenderData.js";
import { registerEvent, unregisterEvent } from "./events.js";
import { classes as cl, ids } from "./selectors.js";
import { IButtonConfiguration } from "./step-configuration.js";

// The typings for konva don't seem to work right, so we have to do this to keep
// both TypeScript at build-time and the browser at run-time happy.
import * as KonvaMod from "konva";
import type KonvaType from "konva";
export const Konva: typeof KonvaMod.default = KonvaMod.default ?? KonvaMod;

export interface ICircleOptions {
  x: number;
  y: number;
  r: number;
}

export interface IOptions {
  onNextClick: () => void;
  onPrevClick: () => void;
  onSkipClick: () => void;
  fill: string;
  animationTime: number;
}

export function roundRect(
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
  ctx: CanvasRenderingContext2D
) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  return ctx;
}

export class EnjoyHintImpl {
  static readonly defaults: IOptions = {
    onNextClick: () => {},
    onPrevClick: () => {},
    onSkipClick: () => {},
    fill: "",
    animationTime: 0,
  };

  readonly options: IOptions;

  originalLabelLeft?: number;
  originalLabelTop?: number;
  originalArrowLeft?: number;
  originalArrowTop?: number;
  originalCenterX?: number;
  originalCenterY?: number;
  originalSkipButtonLeft?: number;
  originalSkipButtonTop?: number;
  prevWindowWidth?: number;
  prevWindowHeight?: number;
  originalWidth = window.innerWidth;
  originalHeight = window.innerHeight;

  canvasSize = {
    w: window.innerWidth * 1.4,
    h: window.innerHeight * 1.4,
  };
  shape!: KonvaType.Shape;

  enjoyHintElement!: HTMLElement;
  shapeInitShift!: number;
  prevButton!: HTMLElement;
  nextButton!: HTMLElement;
  skipButton!: HTMLElement;
  closeButton!: HTMLElement;
  nextBtn?: string;
  prevBtn?: string;
  topDisEvents!: HTMLDivElement;
  bottomDisEvents!: HTMLDivElement;
  leftDisEvents!: HTMLDivElement;
  rightDisEvents!: HTMLDivElement;
  canvas!: HTMLCanvasElement;
  renderData: any;
  customBtnProps: any;

  constructor(
    private readonly element: HTMLElement,
    options: Partial<IOptions>
  ) {
    this.options = { ...EnjoyHintImpl.defaults, ...options };
    this.init();
  }

  init() {
    const enjoyHintElement = document.createElement("div");
    enjoyHintElement.classList.add(cl.enjoyHint.name);
    this.element.appendChild(enjoyHintElement);
    this.enjoyHintElement = enjoyHintElement;

    const svgWrapper = document.createElement("div");
    svgWrapper.classList.add(cl.svgWrapper.name, cl.svgTransparent.name);
    enjoyHintElement.appendChild(svgWrapper);

    const stageContainer = document.createElement("div");
    stageContainer.id = ids.kineticContainer.id;
    enjoyHintElement.appendChild(stageContainer);

    const canvas = document.createElement("canvas");
    canvas.id = ids.canvas.id;
    canvas.width = this.canvasSize.w;
    canvas.height = this.canvasSize.h;
    canvas.classList.add(cl.mainCanvas.name);
    enjoyHintElement.appendChild(canvas);
    this.canvas = canvas;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", this.canvasSize.w.toString());
    svg.setAttribute("height", this.canvasSize.h.toString());
    svg.classList.add(cl.mainSvg.name);
    svgWrapper.appendChild(svg);

    const defs = this.makeSVG("defs");
    const marker = this.makeSVG("marker", {
      id: ids.arrowMarker.id,
      viewBox: "0 0 36 21",
      refX: "21",
      refY: "10",
      markerUnits: "strokeWidth",
      orient: "auto",
      markerWidth: "16",
      markerHeight: "12",
    });
    const polyline = this.makeSVG("path", {
      style: "fill:none; stroke:rgb(255,255,255); stroke-width:2",
      d: "M0,0 c30,11 30,9 0,20",
      id: ids.polyline.id,
    });
    marker.appendChild(polyline);
    defs.appendChild(marker);
    svg.appendChild(defs);

    const konvaStage = new Konva.Stage({
      container: ids.kineticContainer.id,
      width: this.canvasSize.w,
      height: this.canvasSize.h,
      scaleX: 1,
    });

    const layer = new Konva.Layer();

    const rect = new Konva.Rect({
      fill: this.options.fill,
      width: this.canvasSize.w,
      height: this.canvasSize.h,
    });

    const topDisEvents = document.createElement("div");
    topDisEvents.classList.add(cl.disableEventsElement.name);
    enjoyHintElement.appendChild(topDisEvents);
    this.topDisEvents = topDisEvents;

    const bottomDisEvents = topDisEvents.cloneNode() as HTMLDivElement;
    enjoyHintElement.appendChild(bottomDisEvents);
    this.bottomDisEvents = bottomDisEvents;

    const leftDisEvents = topDisEvents.cloneNode() as HTMLDivElement;
    enjoyHintElement.appendChild(leftDisEvents);
    this.leftDisEvents = leftDisEvents;

    const rightDisEvents = topDisEvents.cloneNode() as HTMLDivElement;
    enjoyHintElement.appendChild(rightDisEvents);
    this.rightDisEvents = rightDisEvents;

    const stopPropagation = function (e: Event) {
      e.stopImmediatePropagation();
    };

    document
      .querySelectorAll("button")
      .forEach((b) => registerEvent(b, "focusout", stopPropagation));
    registerEvent(topDisEvents, "click", stopPropagation);
    registerEvent(bottomDisEvents, "click", stopPropagation);
    registerEvent(leftDisEvents, "click", stopPropagation);
    registerEvent(rightDisEvents, "click", stopPropagation);

    const skipButton = document.createElement("div");
    skipButton.classList.add(cl.btn.name, cl.skipBtn.name);
    skipButton.innerHTML = "Skip";
    registerEvent(skipButton, "click", () => {
      this.hide();
      this.options.onSkipClick();
    });
    enjoyHintElement.appendChild(skipButton);
    this.skipButton = skipButton;

    const nextButton = document.createElement("div");
    nextButton.classList.add(cl.btn.name, cl.nextBtn.name);
    nextButton.innerHTML = "Next";
    registerEvent(nextButton, "click", () => this.options.onNextClick());
    enjoyHintElement.appendChild(nextButton);
    this.nextButton = nextButton;

    const closeButton = document.createElement("div");
    closeButton.classList.add(cl.btn.name, cl.closeBtn.name);
    closeButton.innerHTML = "";
    registerEvent(closeButton, "click", () => {
      this.hide();
      this.options.onSkipClick();
    });
    enjoyHintElement.appendChild(closeButton);
    this.closeButton = closeButton;

    const prevButton = document.createElement("div");
    prevButton.classList.add(cl.btn.name, cl.previousBtn.name);
    prevButton.innerHTML = "Previous";
    registerEvent(prevButton, "click", () => this.options.onPrevClick());
    enjoyHintElement.appendChild(prevButton);
    this.prevButton = prevButton;

    registerEvent(canvas, "mousedown", (e) => {
      const me = e as MouseEvent;

      canvas.style.left = "4000px";

      const BottomElement = document.elementFromPoint(
        me.clientX,
        me.clientY
      ) as HTMLButtonElement;
      canvas.style.left = "0px";

      BottomElement.click();

      return false;
    });

    const circleR = 0;
    this.shapeInitShift = 130;

    const shape = new Konva.Shape({
      radius: circleR,
      center_x: -this.shapeInitShift,
      center_y: -this.shapeInitShift,
      width: 0,
      height: 0,
      sceneFunc: function (this: KonvaType.Shape, context: KonvaType.Context) {
        const ctx = context._context;
        const defComp = ctx.globalCompositeOperation;
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();

        const x = this.attrs.center_x - Math.round(this.attrs.width / 2);
        const y = this.attrs.center_y - Math.round(this.attrs.height / 2);
        roundRect(
          x,
          y,
          this.attrs.width,
          this.attrs.height,
          this.attrs.radius,
          ctx
        );

        ctx.fill();

        ctx.globalCompositeOperation = defComp;
      },
    });
    this.shape = shape;

    layer.add(rect);
    layer.add(shape);
    konvaStage.add(layer);

    let doIt: ReturnType<typeof setTimeout>;

    const resizeHandler = () => {
      clearTimeout(doIt);
      this.nextButton.style.visibility = "hidden";
      this.prevButton.style.visibility = "hidden";
      this.skipButton.style.visibility = "hidden";
      cl.label.element()?.remove();
      ids.arrowLine.element()?.remove();

      if (getComputedStyle(this.enjoyHintElement).visibility !== "visible") {
        this.stopFunction();
        unregisterEvent(window, "resize", resizeHandler);
        return;
      }

      const boundingClientRect = document
        .querySelector<HTMLElement>(this.renderData.enjoyHintElementSelector)!
        .getBoundingClientRect();

      this.shape.attrs.centerX = Math.round(
        boundingClientRect.left + boundingClientRect.width / 2
      );
      this.shape.attrs.centerY = Math.round(
        boundingClientRect.top + boundingClientRect.height / 2
      );
      this.shape.attrs.width = boundingClientRect.width + 11;
      this.shape.attrs.height = boundingClientRect.height + 11;

      doIt = setTimeout(() => {
        if (
          boundingClientRect.top < 0 ||
          boundingClientRect.bottom >
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          document
            .querySelector<HTMLElement>(
              this.renderData.enjoyHintElementSelector
            )!
            .scrollIntoView();
        } else this.renderAfterResize();
      }, 150);

      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      const scaleX = newWidth / this.originalWidth;
      const scaleY = newHeight / this.originalHeight;

      konvaStage.setAttr("width", this.originalWidth * scaleX);
      konvaStage.setAttr("height", this.originalHeight * scaleY);

      rect.setAttr("width", window.innerWidth);
      rect.setAttr("height", window.innerHeight);

      layer.removeChildren();
      layer.add(rect);
      layer.add(shape);
      konvaStage.draw();
    };

    registerEvent(window, "resize", resizeHandler);

    this.hide();
  }
  stopFunction() {
    throw new Error("Method not implemented.");
  }

  resetComponentStuff() {
    this.originalLabelLeft = undefined;
    this.originalLabelTop = undefined;
    this.originalArrowLeft = undefined;
    this.originalArrowTop = undefined;
    this.originalCenterX = undefined;
    this.originalCenterY = undefined;
    this.originalSkipButtonLeft = undefined;
    this.originalSkipButtonTop = undefined;
    this.prevWindowWidth = undefined;
    this.prevWindowHeight = undefined;
    this.originalWidth = window.innerWidth;
    this.originalHeight = window.innerHeight;
  }

  makeSVG(tag: string, attrs?: { [key: string]: string }) {
    const el = document.createElementNS("http://www.w3.org/2000/svg", tag);

    for (const k in attrs) {
      el.setAttribute(k, attrs[k]);
    }

    return el;
  }

  renderAfterResize() {
    const newDataCoords = document
      .querySelector<HTMLElement>(this.renderData.enjoyHintElementSelector)!
      .getBoundingClientRect();

    this.renderData.centerX = newDataCoords.left + newDataCoords.width / 2;
    this.renderData.centerY = newDataCoords.top + newDataCoords.height / 2;
    this.renderData.width = newDataCoords.width + 11;
    this.renderData.height = newDataCoords.height + 11;

    this.renderLabelWithShape(this.renderData, this.customBtnProps);
    cl.nextBtn.element()!.style.visibility = "visible";
    cl.previousBtn.element()!.style.visibility = "visible";
    cl.skipBtn.element()!.style.visibility = "visible";
  }

  show() {
    this.enjoyHintElement?.classList.remove(cl.hide.name);
  }

  hide() {
    this.enjoyHintElement.classList.add(cl.hide.name);

    const tween = new Konva.Tween({
      node: this.shape,
      duration: 0.002,
      center_x: -this.shapeInitShift,
      center_y: -this.shapeInitShift,
    });
    tween.play();
  }

  hideNextBtn() {
    this.nextButton.classList.add(cl.hide.name);
    this.nextBtn = "hide";
  }

  hidePrevBtn() {
    this.prevButton.classList.add(cl.hide.name);
    this.prevBtn = "hide";
  }

  showPrevBtn() {
    this.prevButton.classList.remove(cl.hide.name);
    this.prevBtn = "show";
  }

  showNextBtn() {
    this.nextButton.classList.remove(cl.hide.name);
    this.nextBtn = "show";
  }

  hideSkipBtn() {
    this.skipButton.classList.add(cl.hide.name);
  }

  showSkipBtn() {
    this.skipButton.classList.remove(cl.hide.name);
  }

  renderCircle(data?: ICircleOptions) {
    const r = data?.r ?? 0;
    const x = data?.x ?? 0;
    const y = data?.y ?? 0;

    const tween = new Konva.Tween({
      node: this.shape,
      duration: 0.2,
      center_x: x,
      center_y: y,
      width: r * 2,
      height: r * 2,
      radius: r,
    });

    tween.play();

    const left = x - r;
    const right = x + r;
    const top = y - r;
    const bottom = y + r;
    const margin = 20;

    return {
      x,
      y,
      left,
      right,
      top,
      bottom,
      conn: {
        left: {
          x: left - margin,
          y,
        },
        right: {
          x: right + margin,
          y,
        },
        top: {
          x,
          y: top - margin,
        },
        bottom: {
          x,
          y: bottom + margin,
        },
      },
    };
  }

  renderRect(data: {
    r?: number;
    x?: number;
    y?: number;
    w?: number;
    h?: number;
  }) {
    const r = data.r || 0;
    const x = data.x || 0;
    const y = data.y || 0;
    const w = data.w || 0;
    const h = data.h || 0;
    const margin = 20;

    const tween = new Konva.Tween({
      node: this.shape,
      duration: 0.2,
      center_x: x,
      center_y: y,
      width: w,
      height: h,
      radius: r,
    });

    tween.play();

    const half_w = Math.round(w / 2);
    const half_h = Math.round(h / 2);
    const left = x - half_w;
    const right = x + half_w;
    const top = y - half_h;
    const bottom = y + half_h;

    return {
      x,
      y,
      left,
      right,
      top,
      bottom,
      conn: {
        left: {
          x: left - margin,
          y,
        },
        right: {
          x: right + margin,
          y,
        },
        top: {
          x,
          y: top - margin,
        },
        bottom: {
          x,
          y: bottom + margin,
        },
      },
    };
  }

  private renderLabel(data: { x?: number; y?: number; text?: string }) {
    const x = data.x || 0;
    const y = data.y || 0;
    const text = data.text || "";

    const label = document.createElement("div");
    label.classList.add(cl.label.name);
    label.id = ids.label.id;
    label.style.top = `${y}px`;
    label.style.left = `${x}px`;
    label.innerHTML = text;
    this.enjoyHintElement.appendChild(label);

    const label_w = label.offsetWidth;
    const label_h = label.offsetHeight;
    const label_left = label.offsetLeft;
    const label_right = label.offsetLeft + label_w;
    const label_top = label.offsetTop - window.pageYOffset;
    const label_bottom = label.offsetTop - window.pageYOffset + label_h;

    const margin = 10;

    const conn_left = {
      x: label_left - margin,
      y: label_top + Math.round(label_h / 2),
    };

    const conn_right = {
      x: label_right + margin,
      y: label_top + Math.round(label_h / 2),
    };

    const conn_top = {
      x: label_left + Math.round(label_w / 2),
      y: label_top - margin,
    };

    const conn_bottom = {
      x: label_left + Math.round(label_w / 2),
      y: label_bottom + margin,
    };

    label.remove();

    setTimeout(() => {
      ids.label.element()?.remove();
      this.enjoyHintElement.appendChild(label);
    }, this.options.animationTime / 2);

    return {
      label,
      left: label_left,
      right: label_right,
      top: label_top,
      bottom: label_bottom,
      conn: {
        left: conn_left,
        right: conn_right,
        top: conn_top,
        bottom: conn_bottom,
      },
    };
  }

  private isValidColor(value: string) {
    const temp = new Option().style;
    temp.color = value;
    return temp.color !== "";
  }

  private setMarkerColor(color: string) {
    if (!this.isValidColor(color)) {
      color = "rgb(255,255,255)";
      console.warn("Error: invalid color name property - " + color);
    }

    ids.polyline.element()!.setAttribute("stroke", color);
    ids.arrowLine.element()!.setAttribute("stroke", color);
  }

  private renderArrow(data: {
    x_from?: number;
    y_from?: number;
    x_to?: number;
    y_to?: number;
    by_top_side?: string;
  }) {
    const fromX = data.x_from || 0;
    const fromY = data.y_from || 0;
    const toX = data.x_to || 0;
    const toY = data.y_to || 0;
    const byTopSide = data.by_top_side;
    let controlPointX = 0;
    let controlPointY = 0;

    if (byTopSide === "hor") {
      controlPointX = toX;
      controlPointY = fromY;
    } else {
      controlPointX = fromX;
      controlPointY = toY;
    }

    this.enjoyHintElement.classList.add(cl.svgTransparent.name);

    setTimeout(() => {
      ids.arrowLine.element()?.remove();

      const d = `M${fromX},${fromY} Q${controlPointX},${controlPointY} ${toX},${toY}`;
      const path = this.makeSVG("path", {
        style: "fill:none; stroke:rgb(255,255,255); stroke-width:3",
        "marker-end": `url(${ids.arrowMarker.toString()})`,
        d,
        id: ids.arrowLine.id,
      });
      cl.mainSvg.element()!.appendChild(path);

      if (this.renderData.arrowColor) {
        this.setMarkerColor(this.renderData.arrowColor);
      } else {
        document
          .querySelector(ids.polyline.toString())!
          .setAttribute("stroke", "rgb(255,255,255)");
      }

      this.enjoyHintElement.classList.remove(cl.svgTransparent.name);
    }, this.options.animationTime / 2);
  }

  private getLabelElement(data: { x?: number; y?: number; text?: string }) {
    const x = data.x || 0;
    const y = data.y || 0;
    const text = data.text || "";

    const label = document.createElement("div");
    label.classList.add(cl.label.name);
    label.id = ids.label.id;
    label.style.top = `${y}px`;
    label.style.left = `${x}px`;
    label.innerHTML = text;
    this.enjoyHintElement.appendChild(label);

    return label;
  }

  disableEventsNearRect(rect: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }) {
    const top = rect.top || 0;
    const bottom = rect.bottom || 0;
    const left = rect.left || 0;
    const right = rect.right || 0;

    this.topDisEvents.style.top = "0";
    this.topDisEvents.style.left = "0";
    this.topDisEvents.style.height = `${top}px`;

    this.bottomDisEvents.style.top = `${bottom}px`;
    this.bottomDisEvents.style.left = "0";

    this.leftDisEvents.style.top = `0`;
    this.leftDisEvents.style.left = `0`;
    this.leftDisEvents.style.width = `${left}px`;

    this.rightDisEvents.style.top = `0`;
    this.rightDisEvents.style.left = `${right}px`;
  }

  private findParentDialog(element?: HTMLElement | null): HTMLElement | null {
    if (!element?.tagName) {
      return null;
    }
    if (element.tagName === "MD-DIALOG") {
      return element;
    } else {
      return this.findParentDialog(element.parentElement);
    }
  }

  renderLabelWithShape(
    data: RenderData,
    customBtnProps: {
      nextButton: IButtonConfiguration | undefined;
      prevButton: IButtonConfiguration | undefined;
    }
  ) {
    this.renderData = data;
    this.customBtnProps = customBtnProps;

    const dialog = this.findParentDialog(
      document.querySelector(this.renderData.enjoyHintElementSelector)
    );

    if (dialog != null) {
      registerEvent(dialog, "dialogClosing", () => {
        this.stopFunction();
        return;
      });
    }

    this.resetComponentStuff();

    const shapeType = data.shape || "rect";
    let shapeData: any = {};

    let halfW = 0;
    let halfH = 0;

    const shapeOffsets = {
      top: data.top || 0,
      bottom: data.bottom || 0,
      left: data.left || 0,
      right: data.right || 0,
    };

    let sidesPos: { top: number; bottom: number; left: number; right: number } =
      { top: 0, bottom: 0, left: 0, right: 0 };

    switch (shapeType) {
      case "circle":
        halfW = halfH = data.radius;

        sidesPos = {
          top: data.centerY - halfH + shapeOffsets.top,
          bottom: data.centerY + halfH - shapeOffsets.bottom,
          left: data.centerX - halfW + shapeOffsets.left,
          right: data.centerX + halfW - shapeOffsets.right,
        };

        const width = sidesPos.right - sidesPos.left;
        const height = sidesPos.bottom - sidesPos.top;
        data.radius = Math.round(Math.min(width, height) / 2);

        //new half habarites
        halfW = halfH = Math.round(data.radius / 2);

        const newHalfW = Math.round(width / 2);
        const newHalfH = Math.round(height / 2);

        //new center_x and center_y
        data.centerX = sidesPos.left + newHalfW;
        data.centerY = sidesPos.top + newHalfH;

        shapeData = this.renderCircle({
          x: data.centerX,
          y: data.centerY,
          r: data.radius,
        });

        break;
      case "rect":
        halfW = Math.round(data.width / 2);
        halfH = Math.round(data.height / 2);

        sidesPos = {
          top: data.centerY - halfH + shapeOffsets.top,
          bottom: data.centerY + halfH - shapeOffsets.bottom,
          left: data.centerX - halfW + shapeOffsets.left,
          right: data.centerX + halfW - shapeOffsets.right,
        };

        data.width = sidesPos.right - sidesPos.left;
        data.height = sidesPos.bottom - sidesPos.top;

        halfW = Math.round(data.width / 2);
        halfH = Math.round(data.height / 2);

        //new center_x and center_y
        data.centerX = sidesPos.left + halfW;
        data.centerY = sidesPos.top + halfH;

        shapeData = this.renderRect({
          x: data.centerX,
          y: data.centerY,
          w: data.width,
          h: data.height,
          r: data.radius,
        });

        break;
    }

    const bodySize = {
      w: this.enjoyHintElement.offsetWidth,
      h: this.enjoyHintElement.offsetHeight,
    };

    const label = this.getLabelElement({
      x: 0,
      y: 0,
      text: data.text,
    });

    const labelWidth = label.offsetWidth;
    const labelHeight = label.offsetHeight;
    label.remove();
    const topOffset = data.centerY - halfH;
    const bottomOffset = bodySize.h - (data.centerY + halfH);
    const leftOffset = data.centerX - halfW;
    const rightOffset = bodySize.w - (data.centerX + halfW);

    const labelShift = window.innerHeight < 670 ? 130 : 150;
    const labelMargin = window.innerHeight < 670 ? 0 : 40;
    const labelShiftWithLabelHeight = labelShift + labelHeight + labelMargin;
    const labelVerOffset = halfH + labelShift;

    const areasForLabel = [
      {
        name: "right_center",
        commonArea: rightOffset * window.innerHeight,
        width: rightOffset,
        height: window.innerHeight,
      },
      {
        name: "right_top",
        commonArea: rightOffset * topOffset,
        width: rightOffset,
        height: topOffset,
      },
      {
        name: "right_bottom",
        commonArea: rightOffset * bottomOffset,
        width: rightOffset,
        height: bottomOffset,
      },
      {
        name: "left_center",
        commonArea: leftOffset * window.innerHeight,
        width: leftOffset,
        height: window.innerHeight,
      },
      {
        name: "left_top",
        commonArea: leftOffset * topOffset,
        width: leftOffset,
        height: topOffset,
      },
      {
        name: "left_bottom",
        commonArea: leftOffset * bottomOffset,
        width: leftOffset,
        height: bottomOffset,
      },
      {
        name: "center_top",
        commonArea: window.innerWidth * topOffset,
        width: window.innerWidth,
        height: topOffset,
      },
      {
        name: "center_bottom",
        commonArea: window.innerWidth * bottomOffset,
        width: window.innerWidth,
        height: bottomOffset,
      },
    ];

    const labelHorizontalSpaceRequired = labelWidth;
    const labelVerticalSpaceRequired =
      window.innerHeight <= 670
        ? labelShiftWithLabelHeight
        : labelShiftWithLabelHeight + 20;
    const areasPriority = areasForLabel.sort(function (area1, area2) {
      return area1.commonArea - area2.commonArea;
    });

    let labelHorizontalSide = "oversized";
    for (let i = 0; i < areasPriority.length; i++) {
      const { name, width, height } = areasPriority[i];
      if (
        width >= labelHorizontalSpaceRequired &&
        height >= labelVerticalSpaceRequired
      ) {
        labelHorizontalSide = name;
      }
    }

    const dataWidthSize =
      data.shape === "circle"
        ? data.radius * 2
        : data.width
        ? data.width
        : data.radius * 2;
    const dataHeightSize =
      data.shape === "circle"
        ? data.radius * 2
        : data.height
        ? data.height
        : data.radius * 2;
    const rightPosition = data.centerX + dataWidthSize / 2 + 80;
    const leftPosition = data.centerX - labelWidth - dataWidthSize / 2 - 80;
    const centralPosition = window.innerWidth / 2 - labelWidth / 2;
    const topPosition = data.centerY - labelVerOffset - labelHeight;
    const bottomPosition = data.centerY + labelVerOffset;
    const centralVerPosition =
      window.innerHeight / 2 - labelVerticalSpaceRequired / 2 + 20;

    let labelX = 0;
    let labelY = 0;
    let xTo = 0;
    let yTo = 0;
    let xFrom = 0;
    let yFrom = 0;
    let byTopSide = "hor";
    switch (labelHorizontalSide) {
      case "center_top":
        labelY = topPosition;
        labelX = centralPosition;
        xTo = data.centerX;
        yTo = data.centerY - dataHeightSize / 2 - 20;
        break;
      case "center_bottom":
        labelY = bottomPosition;
        labelX = centralPosition;
        xTo = data.centerX;
        yTo = data.centerY + dataHeightSize / 2 + 20;
        break;
      case "left_center":
        labelY = centralVerPosition;
        labelX = leftPosition;
        xTo = data.centerX - dataWidthSize / 2 - 20;
        yTo = data.centerY;
        byTopSide = "ver";
        break;
      case "left_top":
        labelY = topPosition;
        labelX = leftPosition;
        xTo = data.centerX - dataWidthSize / 2;
        yTo = data.centerY - 20;
        break;
      case "left_bottom":
        labelY = bottomPosition;
        labelX = leftPosition;
        xTo = data.centerX - dataWidthSize / 2;
        yTo = data.centerY + 20;
        byTopSide = "ver";
        break;
      case "right_center":
        labelY = centralVerPosition;
        labelX = rightPosition;
        xTo = data.centerX + dataWidthSize / 2 + 20;
        yTo = data.centerY;
        byTopSide = "ver";
        break;
      case "right_top":
        labelY = topPosition;
        labelX = rightPosition;
        xTo = data.centerX + dataWidthSize / 2;
        yTo = data.centerY - 20;
        break;
      case "right_bottom":
        labelY = bottomPosition;
        labelX = rightPosition;
        xTo = data.centerX + dataWidthSize / 2;
        yTo = data.centerY + 20;
        byTopSide = "ver";
        break;
    }

    xFrom = labelX + labelWidth / 2;
    yFrom =
      data.centerY > labelY + labelHeight / 2 ? labelY + labelHeight : labelY;

    if (data.centerY < 0) {
      yTo = 20;
    } else if (data.centerY > window.innerHeight + 20) {
      yTo = window.innerHeight - 20;
    }

    if (data.centerY >= labelY && data.centerY <= labelY + labelHeight) {
      xFrom = data.centerX > labelX ? labelX + labelWidth : labelX;
      yFrom = data.centerY;
    }

    this.renderLabel({
      x: labelX,
      y: labelY,
      text: data.text,
    });

    setTimeout(() => {
      const summaryButtonWidth =
        this.nextButton.offsetWidth +
        this.skipButton.offsetWidth +
        this.prevButton.offsetWidth +
        30;
      let distance = labelX - 100;
      let verButtonPosition = labelY + labelHeight + 40;

      if (summaryButtonWidth + labelX > xTo) {
        distance = xTo >= data.centerX ? xTo + 20 : labelX + labelWidth / 2;
      }

      if (summaryButtonWidth + distance > window.innerWidth || distance < 0) {
        distance = 10;
        verButtonPosition =
          yFrom < yTo ? labelY - 80 : labelY + labelHeight + 40;
      }

      const initialDistance = distance;
      const initialVerPosition = verButtonPosition;

      if (window.innerWidth <= 640) {
        distance = 10;
        verButtonPosition = 10;
        this.nextButton.innerHTML = "&#8250;";
        this.prevButton.innerHTML = "&#8249;";
      } else {
        distance = initialDistance;
        verButtonPosition = initialVerPosition;
        this.nextButton.innerHTML = this.customBtnProps.nextButton?.text
          ? this.customBtnProps.nextButton.text
          : "Next";
        this.prevButton.innerHTML = this.customBtnProps.prevButton?.text
          ? this.customBtnProps.prevButton.text
          : "Previous";
      }

      this.prevButton.style.left = `${distance}px`;
      this.prevButton.style.top = `${verButtonPosition}px`;

      let leftNext = distance + this.prevButton.offsetWidth + 10;
      let leftSkip =
        distance +
        this.prevButton.offsetWidth +
        this.nextButton.offsetWidth +
        20;

      if (this.nextBtn === "hide") {
        leftSkip = distance + this.prevButton.offsetWidth + 10;
      }

      if (this.prevBtn === "hide") {
        leftNext = distance;
        leftSkip = distance + this.nextButton.offsetWidth + 10;
      }

      this.nextButton.style.left = `${leftNext}px`;
      this.nextButton.style.top = `${verButtonPosition}px`;

      this.skipButton.style.left = `${leftSkip}px`;
      this.skipButton.style.top = `${verButtonPosition}px`;
    }, 0);

    this.closeButton.style.right = `10px`;
    this.closeButton.style.top = `10px`;

    this.disableEventsNearRect({
      top: shapeData.top,
      bottom: shapeData.bottom,
      left: shapeData.left,
      right: shapeData.right,
    });

    this.renderArrow({
      x_from: xFrom,
      y_from: yFrom,
      x_to: xTo,
      y_to: yTo,
      by_top_side: byTopSide,
    });
  }

  clear() {
    this.canvas.getContext("2d")?.clearRect(0, 0, 3000, 2000);
  }
}
