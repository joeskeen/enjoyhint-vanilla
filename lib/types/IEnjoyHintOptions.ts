
export interface IEnjoyHintOptions {
  onStart?: () => void;
  onEnd?: () => void;
  onSkip?: () => void;
  onNext?: () => void;
  btnPrevText?: string;
  btnNextText?: string;
  btnSkipText?: string;
  backgroundColor?: string;
}
