## Slick Carousel Web Component

The `slick-carousel` is a feature-rich web component that allows you to create a customizable, responsive, and touch-enabled carousel for your web applications. It is built with Preact and designed to be easy to integrate and use.

## Features

- Accessibility support with keyboard navigation.
- Adaptive height for variable slide dimensions.
- Ability to synchronize multiple carousels.
- Autoplay functionality with customizable speed.
- Center mode to highlight active slides.
- Customizable arrow and dot navigation elements.
- Lazy loading for efficient image handling.
- Mobile-first responsive design.
- Multiple rows and slides per row settings.
- Right-to-left slide direction option.

## Usage

To use `slick-carousel`, include the script in your HTML file and add the carousel to your page.

### 1. Include the Script

Include the following script tag in your HTML:

```html
<script
  type="module"
  src="https://unpkg.com/slick-carousel-web-component"
></script>
```

### 2. Add the Carousel to Your Page

Place the `<slick-carousel>` tag in your HTML and insert any number of `<img>` elements as children.

```html
<slick-carousel>
  <img src="path/to/image1.jpg" alt="Description" />
  <img src="path/to/image2.jpg" alt="Description" />
  <!-- Add more items here -->
</slick-carousel>
```

## Properties

You can customize `slick-carousel` by setting various properties:

### Accessibility

- `accessibility` (Boolean): Enables tabbing and arrow key navigation. Defaults to `true`.

### Behavior

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

### Customization

- `arrows` (Boolean): Shows next/prev navigation arrows. Defaults to `true`.
- `dot-class` (String): Class for slide indicator dots container. Defaults to `'slick-dots'`.
- `draggable` (Boolean): Enables desktop dragging. Defaults to `true`.
- `fade` (Boolean): Enables fade effect for slides. Defaults to `false`.
- `focus-on-select` (Boolean): Enables focus on selected element when clicked. Defaults to `false`.
- `rtl` (Boolean): Changes the slider's direction to right-to-left. Defaults to `false`.
- `swipe-to-slide` (Boolean): Allows swiping to any slide regardless of `slides-to-scroll`. Defaults to `false`.
- `variable-width` (Boolean): Allows variable width for slides. Defaults to `false`.
- `z-index` (Number): Sets the zIndex for slides. Defaults to `1000`.

### Advanced

- `append-arrows` (String): Selector for custom arrow navigation container.
- `append-dots` (String): Selector for custom dots navigation container.
- `as-nav-for` (String): Selector or HTMLElement to sync with another carousel.
- `css-ease` (String): CSS3 easing string for slide animation. Defaults to `'ease'`.
- `easing` (String): jQuery easing string for animate() fallback. Defaults to `'linear'`.
- `edge-friction` (Number): Resistance when swiping edges of non-infinite carousels. Defaults to `0.15`.
- `lazy-load` (String): Sets lazy load technique, accepts `'ondemand'` or `'progressive'`. Defaults to `'ondemand'`.
- `mobile-first` (Boolean): Uses mobile-first calculation for responsive settings. Defaults to `false`.
- `next-arrow` (String): Custom HTML string or selector for the "Next" arrow.
- `pause-on-dots-hover` (Boolean): Pauses autoplay when a dot is hovered. Defaults to `false`.
- `pause-on-focus` (Boolean): Pauses autoplay when the slider is focused. Defaults to `true`.
- `prev-arrow` (String): Custom HTML string or selector for the "Previous" arrow.
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
  append-arrows=".carousel-arrows"
  append-dots=".carousel-dots"
  arrows="true"
  as-nav-for=".other-carousel"
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
  next-arrow="<button type='button' class='slick-next'>Next</button>"
  pause-on-dots-hover="false"
  pause-on-focus="true"
  pause-on-hover="true"
  prev-arrow="<button type='button' class='slick-prev'>Previous</button>"
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

`slick-carousel` is released under the MIT license.
