import { IButtonConfiguration } from './types/IStepConfiguration.js';
import { ICircleOptions } from './types/ICircleOptions.js';
import { IEnjoyHintOptions } from './types/IEnjoyHintOptions.js';
import { IOptions } from './types/IOptions.js';
import { IRenderData } from './types/IRenderData.js';
import { IStepConfiguration } from './types/IStepConfiguration.js';
import type KonvaType from 'konva';

export declare class EnjoyHint {
    private readonly hostElement;
    static readonly defaults: IEnjoyHintOptions;
    readonly options: IEnjoyHintOptions;
    readonly originalElementOverflow: string;
    data: IStepConfiguration[];
    currentStepIndex: number;
    $eventElement?: HTMLElement | null;
    nextUserClass: string | undefined;
    prevUserClass: string | undefined;
    skipUserClass: string | undefined;
    get currentStep(): IStepConfiguration;
    instance: EnjoyHintImpl;
    constructor(hostElement: HTMLElement, options?: IEnjoyHintOptions);
    private readonly lockTouch;
    private readonly inputHandler;
    private init;
    private destroyEnjoy;
    private clear;
    private hideCurrentHint;
    private stepAction;
    private nextStep;
    private prevStep;
    private skipAll;
    private makeEventName;
    stop(): void;
    reRunScript(cs: number): void;
    run(): void;
    resume(): void;
    setCurrentStep(cs: number): void;
    getCurrentStep(): number;
    trigger(eventName: string): void;
    set(data: IStepConfiguration[]): void;
    hide(): void;
    show(): void;
    showPrev(): void;
    showSkip(): void;
    showNext(): void;
    redoEventsNearRect(arg0: DOMRect): void;
    renderCircle(circle?: ICircleOptions): void;
    hidePrev(): void;
    hideNext(): void;
    hideSkip(): void;
    renderLabelWithShape(shapeData: IRenderData, customBtnProps: {
        nextButton: IButtonConfiguration | undefined;
        prevButton: IButtonConfiguration | undefined;
    }): void;
}

declare class EnjoyHintImpl {
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
    renderData: any;
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
    renderCircle(data?: ICircleOptions): {
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
    renderLabelWithShape(data: IRenderData, customBtnProps: {
        nextButton: IButtonConfiguration | undefined;
        prevButton: IButtonConfiguration | undefined;
    }): void;
    clear(): void;
}

export { }
