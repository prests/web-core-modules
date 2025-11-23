import { style } from '@vanilla-extract/css';

import { themeContract } from '../../../themes/tokens/tokens.css.js';

// Base Card styles
export const card = style({
  backgroundColor: themeContract.colors.surface.bg.secondary,
  color: themeContract.colors.text.primary,
  display: 'flex',
  flexDirection: 'column',
  gap: themeContract.spacing[6],
  borderRadius: themeContract.borderRadius['2xl'],
  border: `${themeContract.borderWidth[1]} solid ${themeContract.colors.border.default}`,
  paddingTop: themeContract.spacing[6],
  paddingBottom: themeContract.spacing[6],
  boxShadow: themeContract.boxShadow.lg,
});

// Card Header styles with complex grid layout
export const cardHeader = style({
  containerType: 'inline-size',
  containerName: 'card-header',
  display: 'grid',
  gridAutoRows: 'min-content',
  gridTemplateRows: 'auto auto',
  alignItems: 'flex-start',
  gap: themeContract.spacing[2],
  paddingLeft: themeContract.spacing[6],
  paddingRight: themeContract.spacing[6],

  // Conditional grid columns when card action is present
  selectors: {
    '&:has([data-slot="card-action"])': {
      gridTemplateColumns: '1fr auto',
    },
    // Conditional padding when border-b class is present
    '&.border-b': {
      paddingBottom: themeContract.spacing[6],
    },
  },
});

// Card Title styles
export const cardTitle = style({
  lineHeight: '1',
  fontWeight: themeContract.typography.body.md.bold.fontWeight,
});

// Card Description styles
export const cardDescription = style({
  color: themeContract.colors.text.secondary,
  fontSize: themeContract.typography.body.sm.medium.fontSize,
  lineHeight: themeContract.typography.body.sm.medium.lineHeight,
});

// Card Action styles with grid positioning
export const cardAction = style({
  gridColumn: '2',
  gridRowStart: '1',
  gridRowEnd: 'span 2',
  alignSelf: 'flex-start',
  justifySelf: 'end',
});

// Card Content styles
export const cardContent = style({
  paddingLeft: themeContract.spacing[6],
  paddingRight: themeContract.spacing[6],
});

// Card Footer styles
export const cardFooter = style({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: themeContract.spacing[6],
  paddingRight: themeContract.spacing[6],

  // Conditional padding when border-t class is present
  selectors: {
    '&.border-t': {
      paddingTop: themeContract.spacing[6],
    },
  },
});
