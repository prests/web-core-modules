const ACTION_COLORS = {
  action: {
    bg: {
      primary: {
        default: null,
        hover: null,
        active: null,
        disabled: null,
      },
      secondary: {
        default: null,
        hover: null,
        active: null,
        disabled: null,
      },
      outline: {
        default: null,
        hover: null,
        active: null,
        disabled: null,
      },
    },
    color: {
      primary: null,
      outline: {
        disabled: null,
      },
    },
    destructive: {
      default: null,
      hover: null,
      active: null,
      disabled: null,
    },
    ghost: {
      default: null,
      hover: null,
      active: null,
      disabled: null,
    },
  },
} as const;

const BORDER_COLORS = {
  border: {
    default: null,
    subtle: null,
    strong: null,
    interactive: {
      default: null,
      hover: null,
      active: null,
    },
    focus: null,
    success: null,
    warning: null,
    error: null,
    info: null,
    action: {
      primary: null,
      secondary: null,
      destructive: null,
      disabled: null,
    },
  },
} as const;

const TEXT_COLORS = {
  text: {
    primary: null,
    secondary: null,
    tertiary: null,
    interactive: {
      default: null,
      hover: null,
      active: null,
    },
    success: null,
    warning: null,
    error: null,
    info: null,
    inverse: null,
    disabled: null,
  },
} as const;

const SURFACE_COLORS = {
  surface: {
    bg: {
      primary: null,
      secondary: null,
      tertiary: null,
      interactive: {
        default: null,
        hover: null,
        active: null,
      },
      success: null,
      warning: null,
      error: null,
      info: null,
      overlay: null,
      disabled: null,
      inverse: null,
    },
  },
} as const;

const ICON_COLORS = {
  icon: {
    primary: null,
    secondary: null,
    tertiary: null,
    interactive: {
      default: null,
      hover: null,
      active: null,
    },
    success: null,
    warning: null,
    error: null,
    info: null,
    inverse: null,
    disabled: null,
  },
} as const;

const INPUT_COLORS = {
  input: {
    bg: {
      default: null,
      hover: null,
      focus: null,
      disabled: null,
      error: null,
    },
    border: {
      default: null,
      hover: null,
      focus: null,
      error: null,
      disabled: null,
    },
    text: {
      default: null,
      placeholder: null,
      disabled: null,
    },
  },
} as const;

const SHADOW_COLORS = {
  shadow: {
    default: null,
    subtle: null,
    strong: null,
    interactive: null,
    focus: null,
    destructive: null,
    success: null,
    warning: null,
    error: null,
  },
} as const;

export { SURFACE_COLORS, BORDER_COLORS, ACTION_COLORS, TEXT_COLORS, ICON_COLORS, INPUT_COLORS, SHADOW_COLORS };
