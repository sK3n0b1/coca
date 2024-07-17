import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useBlogSlider = () => {
    new Swiper('.hero__slider-design', {
      spaceBetween: 12,
      slidesPerView: 'auto',
      loop: true,
      centeredSlides: false,
      breakpoints: {
        993: {
          spaceBetween: 22,
        },
        769: {
          spaceBetween: 32,
        },
      },
    });
  
    new Swiper('.hero__slider-all', {
      spaceBetween: 12,
      slidesPerView: 'auto',
      loop: true,
      centeredSlides: false,
      breakpoints: {
        993: {
          spaceBetween: 22,
        },
        769: {
          spaceBetween: 32,
        },
      },
    });
  
    new Swiper('.hero__slider-articles', {
      spaceBetween: 12,
      slidesPerView: 'auto',
      loop: true,
      centeredSlides: false,
      breakpoints: {
        993: {
          spaceBetween: 22,
        },
        769: {
          spaceBetween: 32,
        },
      },
    });
  };

  export const useBlogArticlesSlider = () => {
    new Swiper('.articles__slider', {
      modules: [Navigation],
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 32,
      centeredSlides: false,
  
      navigation: {
        nextEl: '.articles__btn--next',
        prevEl: '.articles__btn--prev',
      },
    });
  };