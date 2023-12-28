## Slick Carousel Web Component

The `Slick Carousel Web Component` is a feature-rich web component that wraps `react-slick` carousel functionality. It provides an easy-to-use carousel experience with extensive customization options through HTML attributes.

## Features

- Web Component-based carousel makes it easy to include in any HTML or modern web framework.
- Extensive customization through HTML attributes in kebab-case.
- Access to all `react-slick` functionalities.
- Fully responsive with touch and swipe features.

## Installation

As a web component, `slick-carousel` should be included directly in your web project. Make sure to reference the JavaScript file that registers the custom element.

```html
<script
  type="module"
  src="https://unpkg.com/slick-carousel-react-web-component"
></script>
```

## Usage

To use the `slick-carousel` in your web page, define the carousel element and pass the desired properties:

```html
<slick-carousel autoplay="true" slides-to-show="3" infinite="true">
  <img src="path/to/image1.jpg" alt="First slide" />
  <img src="path/to/image2.jpg" alt="Second slide" />
  <!-- Additional slides -->
</slick-carousel>
```

## Properties

The web component supports the following properties for customization:

- `accessibility` (Boolean): Enables tabbing and arrow key navigation. Defaults to `true`.
- `adaptive-height` (Boolean): Adapts slider height to the current slide. Defaults to `false`.
- `autoplay` (Boolean): Enables auto play of slides. Defaults to `false`.
- `autoplay-speed` (Number): Auto play change interval in milliseconds. Defaults to `3000`.
- `center-mode` (Boolean): Enables centered view with partial prev/next slides. Defaults to `false`.
- `center-padding` (String): Side padding when in center mode (px or %). Defaults to `'50px'`.
- `dots` (Boolean): Shows current slide indicator dots. Defaults to `false`.
- `infinite` (Boolean): Enables infinite looping of slides. Defaults to `true`.
- `pause-on-hover` (Boolean): Pauses autoplay on hover. Defaults to `true`.
- `rows` (Number): Number of rows per slide. Defaults to `1`.
- `slides-per-row` (Number): Number of slides per row in grid mode. Defaults to `1`.
- `slides-to-scroll` (Number): Number of slides to scroll at once. Defaults to `1`.
- `slides-to-show` (Number): Number of slides to show at once. Defaults to `1`.
- `speed` (Number): Transition speed in milliseconds. Defaults to `300`.
- `swipe` (Boolean): Enables touch swipe. Defaults to `true`.
- `vertical` (Boolean): Enables vertical slide direction. Defaults to `false`.
- `arrows` (Boolean): Shows next/prev navigation arrows. Defaults to `true`.
- `dot-class` (String): Class for slide indicator dots container. Defaults to `'slick-dots'`.
- `draggable` (Boolean): Enables desktop dragging. Defaults to `true`.
- `fade` (Boolean): Enables fade effect for slides. Defaults to `false`.
- `focus-on-select` (Boolean): Enables focus on selected element when clicked. Defaults to `false`.
- `rtl` (Boolean): Changes the slider's direction to right-to-left. Defaults to `false`.
- `swipe-to-slide` (Boolean): Allows swiping to any slide regardless of `slides-to-scroll`. Defaults to `false`.
- `variable-width` (Boolean): Allows variable width for slides. Defaults to `false`.
- `z-index` (Number): Sets the zIndex for slides. Defaults to `1000`.
- `as-nav-for` (String): Selector or HTMLElement to sync with another carousel.
- `css-ease` (String): CSS3 easing string for slide animation. Defaults to `'ease'`.
- `easing` (String): jQuery easing string for animate() fallback. Defaults to `'linear'`.
- `edge-friction` (Number): Resistance when swiping edges of non-infinite carousels. Defaults to `0.15`.
- `lazy-load` (String): Sets lazy load technique, accepts `'ondemand'` or `'progressive'`. Defaults to `'ondemand'`.
- `mobile-first` (Boolean): Uses mobile-first calculation for responsive settings. Defaults to `false`.
- `pause-on-dots-hover` (Boolean): Pauses autoplay when a dot is hovered. Defaults to `false`.
- `pause-on-focus` (Boolean): Pauses autoplay when the slider is focused. Defaults to `true`.
- `respond-to` (String): Selector to set width for responsive settings. Defaults to `'window'`.
- `responsive` (String): JSON stringified array of breakpoint and settings objects for responsive settings.
- `touch-move` (Boolean): Allows slides to move with touch. Defaults to `true`.
- `touch-threshold` (Number): Threshold for swipe length to advance slides. Defaults to `5`.
- `use-css` (Boolean): Enables/Disables CSS Transitions. Defaults to `true`.
- `use-transform` (Boolean): Enables/Disables CSS Transforms. Defaults to `true`.
- `vertical-swiping` (Boolean): Allows vertical swiping. Defaults to `false`.
- `wait-for-animate` (Boolean): Ignores requests to advance slides while animating. Defaults to `true`.

```html
<slick-carousel
  accessibility="true"
  adaptive-height="false"
  arrows="true"
  autoplay="false"
  autoplay-speed="3000"
  center-mode="false"
  center-padding="50px"
  css-ease="ease"
  dots="false"
  dots-class="slick-dots"
  draggable="true"
  easing="linear"
  edge-friction="0.15"
  fade="false"
  focus-on-select="false"
  focus-on-change="false"
  infinite="true"
  initial-slide="0"
  lazy-load="ondemand"
  mobile-first="false"
  pause-on-dots-hover="false"
  pause-on-focus="true"
  pause-on-hover="true"
  respond-to="window"
  responsive='[{"breakpoint": 1024, "settings": {"slides-to-show": 1}}, {"breakpoint": 600, "settings": {"slides-to-show": 2}}]'
  rows="1"
  rtl="false"
  slide=""
  slides-per-row="1"
  slides-to-scroll="1"
  slides-to-show="1"
  speed="300"
  swipe="true"
  swipe-to-slide="false"
  touch-move="true"
  touch-threshold="5"
  use-css="true"
  use-transform="true"
  variable-width="false"
  vertical="false"
  vertical-swiping="false"
  wait-for-animate="true"
  z-index="1000"
>
  <img src="path/to/image1.jpg" alt="Description" />
  <img src="path/to/image2.jpg" alt="Description" />
  <!-- Add more items here -->
</slick-carousel>
```

## Events

The `slick-carousel` web component emits custom events that you can listen to for carousel interactions and state changes. Here's a list of the events and the details they provide:

- `afterChange`: Fired after a slide change. `event.detail` contains `{ currentSlide: number }`.
- `beforeChange`: Fired before a slide change. `event.detail` contains `{ currentSlide: number, nextSlide: number }`.
- `onEdge`: Fired when a swipe is detected that doesn't result in a slide change, such as at the carousel boundaries. `event.detail` contains `{ swipeDirection: string }`.
- `onInit`: Fired after the carousel initializes. `event.detail` is an empty object `{}`.
- `onLazyLoad`: Fired when a lazy load for slides is triggered. `event.detail` contains `{ slidesToLoad: number[] }`.
- `onReInit`: Fired when the carousel re-initializes, usually after some state change. `event.detail` is an empty object `{}`.
- `onSwipe`: Fired during a swipe interaction. `event.detail` contains `{ swipeDirection: string }`.
- `swipeEvent`: Fired for every swipe event. `event.detail` contains `{ swipeDirection: string }`.

To listen to carousel events, add event listeners to the `slick-carousel` element in your JavaScript:

```javascript
const carousel = document.querySelector("slick-carousel");

carousel.addEventListener("afterChange", (event) => {
  console.log("After change, current slide:", event.detail.currentSlide);
});

carousel.addEventListener("beforeChange", (event) => {
  console.log(
    "Before change, current slide:",
    event.detail.currentSlide,
    "Next slide:",
    event.detail.nextSlide,
  );
});

carousel.addEventListener("onEdge", (event) => {
  console.log("On edge, swipe direction:", event.detail.swipeDirection);
});

carousel.addEventListener("onInit", () => {
  console.log("Carousel initialized");
});

carousel.addEventListener("onLazyLoad", (event) => {
  console.log("Lazy load, slides to load:", event.detail.slidesToLoad);
});

carousel.addEventListener("onReInit", () => {
  console.log("Carousel re-initialized");
});

carousel.addEventListener("onSwipe", (event) => {
  console.log("On swipe, direction:", event.detail.swipeDirection);
});

carousel.addEventListener("swipeEvent", (event) => {
  console.log("Swipe event, direction:", event.detail.swipeDirection);
});
```

## Methods

The `slick-carousel` also exposes methods for programmatically controlling the carousel:

- `slickGoTo(index, dontAnimate)`: Go to a specific slide index.
- `slickNext()`: Go to the next slide.
- `slickPrev()`: Go to the previous slide.
- `slickPlay()`: Start the autoplay.
- `slickPause()`: Pause the autoplay.

To call a method, you can directly invoke it on the `slick-carousel` element:

```javascript
const carousel = document.querySelector("slick-carousel");

// Go to the third slide without animation
carousel.slickGoTo(2, true);
```

## Styling

You can style the carousel directly with CSS or inline styles. Target the `slick-carousel` element and its children in your CSS file.

```css
slick-carousel {
  /* Styles for the carousel container */
}

slick-carousel img {
  /* Styles for the images */
}
```

## Contributing

We encourage contributions! If you have suggestions or improvements, please fork the repository and submit a pull request.

## License

`Slick Carousel Web Component` is released under the MIT license.
