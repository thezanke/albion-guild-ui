import color from 'tinycolor2';

export const spin = (c, amount) => {
  return color(c)
    .spin(amount)
    .toHslString();
};

export const transparentize = (c, amount) => {
  return color(c)
    .setAlpha(amount)
    .toString();
};

export const isDark = c => {
  return color(c).getBrightness() <= 165;
};

export const isLight = c => {
  return color(c).getBrightness() > 165;
};

export const darken = (c, amount) => {
  return color(c)
    .darken(amount)
    .toHexString();
};

export const lighten = (c, amount) => {
  return color(c)
    .lighten(amount)
    .toHexString();
};

export const DEFAULT_ACCENT = '#d73379';
export const DEFAULT_BACKGROUND = '#2e3035';
export const FONT_LIGHT = '#212121';
export const FONT_DARK = '#ececec';
export const TRANSITION_LIGHTNING = '200ms';
export const TRANSITION_FAST = '300ms';
export const TRANSITION_MEDIUM = '500ms';
export const TRANSITION_SLOW = '700ms';
export const TRANSITION_TIMING_FUNCTION = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
export const MEDIA_SMALL = '800px';
export const MEDIA_TINY = '500px';

export const stripTransition = transition => parseInt(transition.replace('ms', ''), 10);

export default {
  black: '#000',
  white: '#fff',
  font_primary: isLight(DEFAULT_BACKGROUND) ? FONT_LIGHT : FONT_DARK,
  font_secondary: isLight(DEFAULT_BACKGROUND) ? lighten(FONT_LIGHT, 25) : darken(FONT_DARK, 25),
  red: '#9d0000',
  invalid: 'rgba(255, 25, 25, .5)',

  B25: lighten(DEFAULT_BACKGROUND, 13),
  B50: lighten(DEFAULT_BACKGROUND, 11),
  B100: lighten(DEFAULT_BACKGROUND, 9),
  B200: lighten(DEFAULT_BACKGROUND, 7),
  B300: lighten(DEFAULT_BACKGROUND, 5),
  B400: lighten(DEFAULT_BACKGROUND, 3),
  B500: DEFAULT_BACKGROUND,
  B600: darken(DEFAULT_BACKGROUND, 3),
  B700: darken(DEFAULT_BACKGROUND, 5),
  B800: darken(DEFAULT_BACKGROUND, 7),
  B900: darken(DEFAULT_BACKGROUND, 9),

  A25: lighten(DEFAULT_ACCENT, 13),
  A50: lighten(DEFAULT_ACCENT, 11),
  A100: lighten(DEFAULT_ACCENT, 9),
  A200: lighten(DEFAULT_ACCENT, 7),
  A300: lighten(DEFAULT_ACCENT, 5),
  A400: lighten(DEFAULT_ACCENT, 3),
  A500: DEFAULT_ACCENT,
  A600: darken(DEFAULT_ACCENT, 3),
  A700: darken(DEFAULT_ACCENT, 5),
  A800: darken(DEFAULT_ACCENT, 7),
  A900: darken(DEFAULT_ACCENT, 9),
};
