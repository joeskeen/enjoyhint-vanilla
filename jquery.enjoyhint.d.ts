import * as KonvaMod from 'konva';
import type KonvaType from 'konva';
export declare const Konva: typeof KonvaMod.default;
export interface IOptions {
    onNextClick: () => void;
    onPrevClick: () => void;
    onSkipClick: () => void;
    fill: string;
    animationTime: number;
}
export declare function roundRect(x: number, y: number, w: number, h: number, r: number, ctx: CanvasRenderingContext2D): CanvasRenderingContext2D;
export declare class EnjoyHintImpl {
    private readonly element;
    static readonly defaults: IOptions;
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
    originalWidth: number;
    originalHeight: number;
    readonly gcl: {
        chooser: string;
    };
    readonly cl: {
        enjoy_hint: string;
        hide: string;
        disable_events_element: string;
        btn: string;
        skip_btn: string;
        close_btn: string;
        next_btn: string;
        previous_btn: string;
        main_canvas: string;
        main_svg: string;
        svg_wrapper: string;
        svg_transparent: string;
        kinetic_container: string;
    };
    canvasSize: {
        w: number;
        h: number;
    };
    shape: KonvaType.Shape;
    enjoyHintElement: HTMLElement;
    shapeInitShift: number;
    prevButton: HTMLElement;
    nextButton: HTMLElement;
    skipButton: HTMLElement;
    closeButton: HTMLElement;
    nextBtn?: string;
    prevBtn?: string;
    topDisEvents: HTMLDivElement;
    bottomDisEvents: HTMLDivElement;
    leftDisEvents: HTMLDivElement;
    rightDisEvents: HTMLDivElement;
    canvas: HTMLCanvasElement;
    stepData: any;
    customBtnProps: any;
    constructor(element: HTMLElement, options: Partial<IOptions>);
    init(): void;
    stopFunction(): void;
    resetComponentStuff(): void;
    makeSVG(tag: string, attrs?: {
        [key: string]: string;
    }): SVGElement;
    renderAfterResize(): void;
    show(): void;
    hide(): void;
    hideNextBtn(): void;
    hidePrevBtn(): void;
    showPrevBtn(): void;
    showNextBtn(): void;
    hideSkipBtn(): void;
    showSkipBtn(): void;
    renderCircle(data: {
        r?: number;
        x?: number;
        y?: number;
    }): {
        x: number;
        y: number;
        left: number;
        right: number;
        top: number;
        bottom: number;
        conn: {
            left: {
                x: number;
                y: number;
            };
            right: {
                x: number;
                y: number;
            };
            top: {
                x: number;
                y: number;
            };
            bottom: {
                x: number;
                y: number;
            };
        };
    };
    renderRect(data: {
        r?: number;
        x?: number;
        y?: number;
        w?: number;
        h?: number;
    }): {
        x: number;
        y: number;
        left: number;
        right: number;
        top: number;
        bottom: number;
        conn: {
            left: {
                x: number;
                y: number;
            };
            right: {
                x: number;
                y: number;
            };
            top: {
                x: number;
                y: number;
            };
            bottom: {
                x: number;
                y: number;
            };
        };
    };
    private renderLabel;
    private isValidColor;
    private setMarkerColor;
    private renderArrow;
    private getLabelElement;
    disableEventsNearRect(rect: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    }): void;
    private findParentDialog;
    renderLabelWithShape(data: any, customBtnProps: any): void;
    clear(): void;
}
