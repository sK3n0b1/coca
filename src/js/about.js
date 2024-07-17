import '/scss/about.scss';

//components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useAboutSlider } from './components/about/slider.js';
import { useTeamSlider } from './components/about/slider.js';

useTheme();
useBurger();
useAboutSlider();
useTeamSlider();
