export interface IButtonConfiguration {
    // className - class name for the button
    className: string;
    // text - text for the button
    text: string;
}

export type SpecialEventType = 'next' | 'auto' | 'custom' | 'key';

export interface IStepConfiguration {
    // "event selector" : "description" - to describe a step you should set an event type, selecte element and add description for this element (hint)
    selector: string;
    event: keyof HTMLElementEventMap;
    description: string;
    eventType?: SpecialEventType;

    // arrowColor - the color of a marker that accepts all CSS colors.
    arrowColor?: string;
    // keyCode - the code of a button, which triggers the next EnjoyHint step upon a click. Defined by the “key” event.
    key?: string;
    // event_selector - if you need to attach an event (that was set in "event" property) to other selector, you can use this one
    eventSelector?: string;
    // timeout - delay before the moment, when an element is highlighted
    timeout?: number;
    // shape - shape for highlighting (circle|rect)
    shape?: 'circle' | 'rect';
    // radius - if the shape of "circle" is specified, we can set the radius.
    radius?: number;
    // margin - margin for the highlight shape, in pixels (for Ex.:10)
    margin?: number;
    // top - top margin for the shape of "rect" type, in pixels (for Ex.:10)
    top?: number;
    // right - right margin for the shape of "rect" type, in pixels (for Ex.:10)
    right?: number;
    // bottom - bottom margin for the shape of "rect" type, in pixels (for Ex.:10)
    bottom?: number;
    // left - left margin for the shape of "rect" type, in pixels (for Ex.:10)
    left?: number;
    // scrollAnimationSpeed - sets the auto scroll speed (ms).
    scrollAnimationSpeed?: number;
    // nextButton - allows applying its classes and names for the button Nеxt.
    nextButton?: IButtonConfiguration;
    // skipButton - allows applying its classes and names for the button Skip.
    skipButton?: IButtonConfiguration;
    // prevButton - allows applying its classes and names for the button Previous.
    prevButton?: IButtonConfiguration;
    // showSkip - shows or hides the Skip button (true|false)
    showSkip?: boolean;
    // showNext - shows or hides the Next button (true|false)
    showNext?: boolean;
    // showPrev - shows or hides the Previous button (true|false)
    showPrev?: boolean;

    onBeforeStart?: () => void;
}