import { VNode } from "preact";
import Slider, { Settings } from "react-slick";
import { processProps, toChildren } from "./utils.ts";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type SlickCarouselProps = Settings & {
  children: VNode;
  parent: VNode;
};

export function SlickCarousel({
  children,
  parent,
  ...props
}: SlickCarouselProps) {
  const settings = processProps(props);
  return <Slider {...settings}>{toChildren(children)}</Slider>;
}
