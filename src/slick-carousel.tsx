import { VNode } from "preact";
import Slider, { Settings } from "react-slick";
import { toChildren } from "./utils.ts";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type SlickCarouselProps = Settings & {
  children: VNode;
};

export function SlickCarousel({ children, ...settings }: SlickCarouselProps) {
  return <Slider {...settings}>{toChildren(children)}</Slider>;
}
