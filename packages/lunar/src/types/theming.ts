import type { COLOR_SCHEME__DARK, COLOR_SCHEME__LIGHT, COLOR_SCHEME__SYSTEM } from '../constants/theming.js';

type ColorScheme = typeof COLOR_SCHEME__SYSTEM | typeof COLOR_SCHEME__DARK | typeof COLOR_SCHEME__LIGHT;

export type { ColorScheme };
