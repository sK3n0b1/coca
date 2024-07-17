import { useBlogSlider } from './components/blog/slider.js';
import '/scss/blog.scss';

//components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useTabs } from './components/blog/tabs.js';
import { useBlogArticlesSlider } from './components/blog/slider.js';

useTheme();
useBurger();
useBlogSlider();
useTabs();
useBlogArticlesSlider();
