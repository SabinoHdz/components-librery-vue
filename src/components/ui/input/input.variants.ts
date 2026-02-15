/**
 * INPUT VARIANTS - CVA Configuration
 */

import { cva, type VariantProps } from 'class-variance-authority';

export const inputVariants = cva('', {
  variants: {
    variant: {
      solid: 'input--solid',
      outline: 'input--outline',
      soft: 'input--soft',
    },
    color: {
      primary: 'input--primary',
      secondary: 'input--secondary',
      accent: 'input--accent',
      success: 'input--success',
      warning: 'input--warning',
      error: 'input--error',
      info: 'input--info',
    },
    size: {
      xs: 'input--size-xs',
      sm: 'input--size-sm',
      md: 'input--size-md',
      lg: 'input--size-lg',
      xl: 'input--size-xl',
    },
    disabled: {
      true: 'input--disabled',
      false: '',
    },
    error: {
      true: 'input--error-state',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'outline',
    color: 'primary',
    size: 'md',
    disabled: false,
    error: false,
  },
});

export type InputVariants = VariantProps<typeof inputVariants>;
