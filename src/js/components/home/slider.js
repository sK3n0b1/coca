import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 22,
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};

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
        spaceBetween: 32
      }
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
        spaceBetween: 32
      }
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
        spaceBetween: 32
      }
    },
  });
};
