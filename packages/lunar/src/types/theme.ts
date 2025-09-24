import type { themeContract } from '../tokens/themes/contract.css.js';

export type ThemeContract = typeof themeContract;

export type ColorTokens = keyof ThemeContract['colors'];
export type SpacingTokens = keyof ThemeContract['spacing'];
export type FontSizeTokens = keyof ThemeContract['fontSize'];
export type FontWeightTokens = keyof ThemeContract['fontWeight'];
export type LineHeightTokens = keyof ThemeContract['lineHeight'];
export type LetterSpacingTokens = keyof ThemeContract['letterSpacing'];
export type BorderRadiusTokens = keyof ThemeContract['borderRadius'];
export type BorderWidthTokens = keyof ThemeContract['borderWidth'];
export type BoxShadowTokens = keyof ThemeContract['boxShadow'];
