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
export declare class EnjoyHint {
    private readonly element;
    static readonly defaults: IEnjoyHintOptions;
    readonly options: IEnjoyHintOptions;
    readonly originalElementOverflow: string;
    data: StepData[];
    currentStepIndex: number;
    $eventElement?: HTMLElement | null;
    nextUserClass: string | undefined;
    prevUserClass: string | undefined;
    skipUserClass: string | undefined;
    get currentStep(): StepData;
    instance: EnjoyHintImpl;
    constructor(element: HTMLElement, options?: IEnjoyHintOptions);
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
    private stop;
    private reRunScript;
    run(): void;
    resume(): void;
    private setCurrentStep;
    private getCurrentStep;
    private trigger;
    set(data: StepData[]): void;
    hide(): void;
    show(): void;
    showPrev(): void;
    showSkip(): void;
    showNext(): void;
    redoEventsNearRect(arg0: any): void;
    renderCircle(arg0: any): void;
    hidePrev(): void;
    hideNext(): void;
    hideSkip(): void;
    renderLabelWithShape(shapeData: ShapeData, customBtnProps: {
        nextButton: {
            className?: string | undefined;
            text?: string | undefined;
        } | undefined;
        prevButton: {
            className?: string | undefined;
            text?: string | undefined;
        } | undefined;
    }): void;
}
export {};
