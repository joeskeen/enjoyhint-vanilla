type EventTargetFunctionNames = "addEventListener" | "removeEventListener";
type WindowTarget = Pick<Window, EventTargetFunctionNames>;
type ElementTarget = Pick<HTMLElement, EventTargetFunctionNames>;
type DocumentTarget = Pick<Document, EventTargetFunctionNames>;
type EventTarget = WindowTarget | ElementTarget | DocumentTarget;
interface EventRegistration {
  target: EventTarget;
  eventName: string;
  handler: EventListener;
}
let events: EventRegistration[] = [];

export function registerEvent(
  target?: EventTarget | null,
  eventName?: string,
  handler?: EventListener
) {
  if (!target || !eventName || !handler) {
    return;
  }

  events.push({ target, eventName, handler });
  target.addEventListener(eventName, handler);
}

export function unregisterEvent(
  target?: EventTarget | null,
  eventName?: string,
  handler?: EventListener
) {
  if (!target || !eventName || !handler) {
    return;
  }

  events = events.filter((event) => {
    if (
      event.target !== target ||
      event.eventName !== eventName ||
      event.handler !== handler
    ) {
      return true;
    }
    target.removeEventListener(eventName, handler);
    return false;
  });
}

export function unregisterEvents() {
  for (const { target, eventName, handler } of events) {
    target.removeEventListener(eventName, handler);
  }
  events.length = 0;
}
