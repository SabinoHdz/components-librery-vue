/**
 * Badge component type definitions
 * Define all types, constans and the interfaces for VBadge component
 */

//variables de estilo visual

export const BADGE_VARIANTS = ['solid', 'outline', 'ghost', 'soft', 'dashed'] as const;
export type BadgeVariant = (typeof BADGE_VARIANTS)[number];

export const BADGE_COLORS = [
  'primary',
  'secondary',
  'accent',
  'success',
  'warning',
  'error',
  'info',
] as const;
export type BadgeColor = (typeof BADGE_COLORS)[number];

export const BADGE_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type BadgeSize = (typeof BADGE_SIZES)[number];

export interface BadgeProps {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  dot?: boolean;
}
