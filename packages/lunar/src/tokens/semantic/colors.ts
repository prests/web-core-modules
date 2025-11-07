const ACTION_COLORS = {
  // Primary actions
  'action.primary': null,
  'action.primary.hover': null,
  'action.primary.active': null,
  'action.primary.disabled': null,

  // Secondary actions
  'action.secondary': null,
  'action.secondary.hover': null,
  'action.secondary.active': null,
  'action.secondary.disabled': null,

  // Destructive actions
  'action.destructive': null,
  'action.destructive.hover': null,
  'action.destructive.active': null,
  'action.destructive.disabled': null,

  // Ghost actions (transparent backgrounds)
  'action.ghost': null,
  'action.ghost.hover': null,
  'action.ghost.active': null,
  'action.ghost.disabled': null,
} as const;

const BORDER_COLORS = {
  // Standard borders
  'border.default': null,
  'border.subtle': null,
  'border.strong': null,

  // Interactive borders
  'border.interactive': null,
  'border.interactive.hover': null,
  'border.interactive.active': null,
  'border.focus': null,

  // Semantic borders
  'border.success': null,
  'border.warning': null,
  'border.error': null,
  'border.info': null,

  // Action-specific borders (for outline buttons)
  'border.action.primary': null,
  'border.action.secondary': null,
  'border.action.destructive': null,
  'border.action.disabled': null,
} as const;

const TEXT_COLORS = {
  // Primary text hierarchy
  'text.primary': null,
  'text.secondary': null,
  'text.tertiary': null,

  // Interactive text
  'text.interactive': null,
  'text.interactive.hover': null,
  'text.interactive.active': null,

  // Semantic text colors
  'text.success': null,
  'text.warning': null,
  'text.error': null,
  'text.info': null,

  // Special contexts
  'text.inverse': null,
  'text.disabled': null,
} as const;

const SURFACE_COLORS = {
  // Background surfaces
  'surface.bg.primary': null,
  'surface.bg.secondary': null,
  'surface.bg.tertiary': null,

  // Interactive surfaces
  'surface.bg.interactive': null,
  'surface.bg.interactive.hover': null,
  'surface.bg.interactive.active': null,

  // Semantic surfaces
  'surface.bg.success': null,
  'surface.bg.warning': null,
  'surface.bg.error': null,
  'surface.bg.info': null,

  // Special surfaces
  'surface.bg.overlay': null,
  'surface.bg.disabled': null,
  'surface.bg.inverse': null,
} as const;

const ICON_COLORS = {
  // Primary icon hierarchy
  'icon.primary': null,
  'icon.secondary': null,
  'icon.tertiary': null,

  // Interactive icons
  'icon.interactive': null,
  'icon.interactive.hover': null,
  'icon.interactive.active': null,

  // Semantic icons
  'icon.success': null,
  'icon.warning': null,
  'icon.error': null,
  'icon.info': null,

  // Special contexts
  'icon.inverse': null,
  'icon.disabled': null,
} as const;

const INPUT_COLORS = {
  // Input backgrounds
  'input.bg.default': null,
  'input.bg.hover': null,
  'input.bg.focus': null,
  'input.bg.disabled': null,
  'input.bg.error': null,

  // Input borders
  'input.border.default': null,
  'input.border.hover': null,
  'input.border.focus': null,
  'input.border.error': null,
  'input.border.disabled': null,

  // Input text
  'input.text.default': null,
  'input.text.placeholder': null,
  'input.text.disabled': null,
} as const;

const SHADOW_COLORS = {
  // Standard shadows
  'shadow.default': null,
  'shadow.subtle': null,
  'shadow.strong': null,

  // Interactive shadows
  'shadow.interactive': null,
  'shadow.focus': null,

  // Semantic shadows
  'shadow.success': null,
  'shadow.warning': null,
  'shadow.error': null,
} as const;

export { SURFACE_COLORS, BORDER_COLORS, ACTION_COLORS, TEXT_COLORS, ICON_COLORS, INPUT_COLORS, SHADOW_COLORS };
