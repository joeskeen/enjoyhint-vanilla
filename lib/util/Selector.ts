export type ISelectorOptions =
  | {
      className: string;
      id?: never;
    }
  | {
      id: string;
      className?: never;
    };

export class Selector {
  static class(className: string) {
    return new Selector({ className });
  }
  static id(id: string) {
    return new Selector({ id });
  }

  readonly className: string;
  get name() {
    return this.className;
  }
  readonly id: string;
  constructor({ className, id }: ISelectorOptions) {
    this.className = className ?? "";
    this.id = id ?? "";
  }

  toString() {
    if (this.id) {
      return `#${this.id}`;
    } else {
      return `.${this.className}`;
    }
  }

  element() {
    return document.querySelector<HTMLElement>(this.toString());
  }
}
