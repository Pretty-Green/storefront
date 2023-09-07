const MAIN_CAROUSEL_SETTINGS = {
  autoplay: {
    delay: 1,
  },
  freeMode: true,
  loop: true,
  slidesPerView: 'auto' as const,
  loopPreventsSlide: false,
  speed: 18000,
  freeModeMomentumBounce: false,
  breakpoints: {
    200: {
      spaceBetween: 5,
      slidesPerView: 1.4,
    },
    768: {
      spaceBetween: 5,
    },
    1024: {
      spaceBetween: 10,
    },
    2560: {
      spaceBetween: 10,
    },
  },
};

type CustomEvents<K extends string> = { [key in K]: (event: CustomEvent) => void };
type CustomElement<T, K extends string> = Partial<
  T & React.DOMAttributes<T> & { children: any } & CustomEvents<`on${K}`>
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['swiper-container']: React.CustomElement<XAlert, 'closeChange' | 'openChange'>;
    }
  }
}

const NAVIGATION_CAROUSE_SETTINGS = {
  slideToClickedSlide: true,
  slidesPerView: 'auto' as const,
};
const Carousel = () => {
  return (
    <swiper-container>
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      ...
    </swiper-container>
  );
};

export default Carousel;
