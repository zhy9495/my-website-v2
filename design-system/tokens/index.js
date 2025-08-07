// Design System Tokens
import { colors } from './colors.js';
import { spacing, layout, components } from './spacing.js';
import { typography } from './typography.js';

// Re-export all tokens
export { colors } from './colors.js';
export { spacing, layout, components } from './spacing.js';
export { typography } from './typography.js';

// Design tokens object for easy access
export const tokens = {
  colors,
  spacing,
  layout,
  components,
  typography,
};

export default tokens;
