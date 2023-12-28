import { VNode } from "preact";
import Slider, { Settings, SwipeDirection } from "react-slick";

export function toChildren(input: any): VNode[] {
  return (
    input
      .type?.()
      ?.props?.children?.filter(
        (child: any) => child && typeof child === "object" && child?.type,
      ) ?? []
  );
}

export function toKebabCase(str: string) {
  return str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? "-" : "") + $.toLowerCase(),
  );
}

export const booleanProps = [
  "accessibility",
  "adaptiveHeight",
  "arrows",
  "autoplay",
  "centerMode",
  "dots",
  "draggable",
  "fade",
  "focusOnSelect",
  "infinite",
  "pauseOnDotsHover",
  "pauseOnFocus",
  "pauseOnHover",
  "rtl",
  "swipeToSlide",
  "swipe",
  "touchMove",
  "useTransform",
  "variableWidth",
  "vertical",
  "verticalSwiping",
  "waitForAnimate",
  "useCSS",
];
export const stringProps = [
  "centerPadding",
  "className",
  "cssEase",
  "dotsClass",
  "easing",
  "lazyLoad",
  "slide",
];
export const jsonProps = ["responsive"];
export const numberProps = [
  "autoplaySpeed",
  "edgeFriction",
  "initialSlide",
  "rows",
  "slidesPerRow",
  "slidesToScroll",
  "slidesToShow",
  "speed",
  "touchThreshold",
  "zIndex",
];

export const attributes = [
  ...booleanProps,
  ...stringProps,
  ...numberProps,
  ...jsonProps,
].map(toKebabCase);

export function processEvents(el: HTMLElement): Partial<Settings> {
  const dispatch = (event: string, input: any) => {
    el.dispatchEvent(
      new CustomEvent(event, {
        bubbles: true,
        detail: input,
      }),
    );
  };
  return {
    afterChange: (currentSlide) => dispatch("afterChange", { currentSlide }),
    beforeChange: (currentSlide: number, nextSlide: number) =>
      dispatch("beforeChange", { currentSlide, nextSlide }),
    onEdge: (swipeDirection: SwipeDirection) =>
      dispatch("onEdge", { swipeDirection }),
    onInit: () => dispatch("onInit", {}),
    onLazyLoad: (slidesToLoad: number[]) =>
      dispatch("onLazyLoad", { slidesToLoad }),
    onReInit: () => dispatch("onReInit", {}),
    onSwipe: (swipeDirection: SwipeDirection) =>
      dispatch("onSwipe", { swipeDirection }),
    swipeEvent: (swipeDirection: SwipeDirection) =>
      dispatch("swipeEvent", { swipeDirection }),
  };
}

const methodKeys = [
  "slickGoTo",
  "slickNext",
  "slickPause",
  "slickPlay",
  "slickPrev",
];

export function processMethods(el: HTMLElement, slider: Slider) {
  methodKeys.forEach((method) => {
    // @ts-expect-error key is string but settings is expecting keyOf Settings.
    el[method] = slider[method];
  });
}

export function processProps(input: Record<string, string>): Partial<Settings> {
  const settings: Partial<Settings> = {};
  Object.keys(input ?? {}).forEach((key) => {
    switch (true) {
      case numberProps.includes(key):
        // @ts-expect-error key is string but settings is expecting keyOf Settings.
        settings[key] = +input[key];
        break;
      case booleanProps.includes(key) || key === "useCss":
        // @ts-expect-error key is string but settings is expecting keyOf Settings.
        settings[key] = /true/.test(input[key]);
        break;
      case jsonProps.includes(key):
        // @ts-expect-error key is string but settings is expecting keyOf Settings.
        settings[key] = JSON.parse(input[key]);
        break;
      default:
        // @ts-expect-error key is string but settings is expecting keyOf Settings.
        settings[key] = input[key];
    }
  });
  return settings;
}
