import { Selector } from "./Selector.js";
import styles from './enjoyhint.module.scss';

// classes
export const classes = {
  enjoyHint: Selector.class(styles.enjoyhint),
  hide: Selector.class(styles.hide),
  disableEventsElement: Selector.class(styles.disableEvents),
  btn: Selector.class(styles.btn),
  skipBtn: Selector.class(styles.skipBtn),
  closeBtn: Selector.class(styles.closeBtn),
  nextBtn: Selector.class(styles.nextBtn),
  previousBtn: Selector.class(styles.prevBtn),
  mainCanvas: Selector.class(styles.canvas),
  svgWrapper: Selector.class(styles.svgWrapper),
  svgTransparent: Selector.class(styles.svgTransparent),
  label: Selector.class(styles.label),
  mainSvg: Selector.class("mainSvg"),
};

// ids
export const ids = {
  kineticContainer: Selector.id(styles.konvaContainer),
  label: Selector.id(styles.label),
  canvas: Selector.id("canvas"),
  arrowLine: Selector.id("arrowLine"),
  polyline: Selector.id("polyline"),
  arrowMarker: Selector.id("arrowMarker"),
};
