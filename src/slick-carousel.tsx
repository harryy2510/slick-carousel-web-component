import { VNode } from "preact";
import { useEffect, useMemo, useRef } from "preact/hooks";
import Slider from "react-slick";
import {
  processMethods,
  processEvents,
  processProps,
  toChildren,
} from "./utils.ts";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type SlickCarouselProps = Record<string, string> & {
  children: VNode;
  parent: HTMLElement;
};

export function SlickCarousel({
  children,
  parent,
  ...props
}: SlickCarouselProps) {
  const ref = useRef<Slider>(null);
  const settings = processProps(props);
  const events = useMemo(() => processEvents(parent), []);
  useEffect(() => {
    if (ref.current) {
      processMethods(parent, ref.current);
    }
  }, []);

  return (
    <Slider {...settings} {...events} ref={ref}>
      {toChildren(children)}
    </Slider>
  );
}
