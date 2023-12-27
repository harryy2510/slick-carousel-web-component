import { VNode } from "preact";
import { Settings } from "react-slick";

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

export const booleanPropKeys = [
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
];

export const stringPropKeys = [
  "centerPadding",
  "className",
  "cssEase",
  "dotsClass",
  "easing",
  "lazyLoad",
  "slide",
];

export const numberPropKeys = [
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

export const callbackPropKeys = [
  "afterChange",
  "appendDots",
  "beforeChange",
  "customPaging",
  "onEdge",
  "onInit",
  "onLazyLoad",
  "onReInit",
  "onSwipe",
  "swipeEvent",
];

export const specialPropKeys = ["useCSS", "responsive"];

export const attributes = [
  ...booleanPropKeys,
  ...stringPropKeys,
  ...numberPropKeys,
  ...specialPropKeys,
].map(toKebabCase);

export function processProps(input: any = {}): Settings {
  const settings: Settings = {};
  Object.keys(input).forEach((key) => {
    if (numberPropKeys.includes(key)) {
      // @ts-ignore
      settings[key] = +input[key];
    }
    if (booleanPropKeys.includes(key)) {
      // @ts-ignore
      settings[key] = input[key] === "true";
    }
    if (stringPropKeys.includes(key)) {
      // @ts-ignore
      settings[key] = input[key];
    }
    if (specialPropKeys.includes(key)) {
      switch (key) {
        case "useCss":
          settings.useCSS = input[key] === "true";
          break;
        case "responsive":
          settings.responsive = JSON.parse(input[key]);
          break;
      }
    }
  });
  return settings;
}
