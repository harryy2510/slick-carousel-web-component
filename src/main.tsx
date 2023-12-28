import { define } from "reactement";
import { SlickCarousel } from "./slick-carousel.tsx";
import { attributes } from "./utils.ts";

define("slick-carousel", () => SlickCarousel, {
  attributes,
});
