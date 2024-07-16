import { useBlogSlider } from './components/home/slider.js';
import '/scss/blog.scss';

//components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useTabs } from './components/blog/tabs.js';
import { useBlogArticlesSlider } from './components/home/slider.js';

useTheme();
useBurger();
useBlogSlider();
useTabs();
useBlogArticlesSlider();
