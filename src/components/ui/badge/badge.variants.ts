import { cva } from 'class-variance-authority';

/**
 * Badge component variants configuration using CVA
 * Defines all visual variants, colors, sizes and their combinations
 */

/**
 * CVA (Class Variance Authority) - Configuración de variantes del Badge
 *
 * CVA es una utilidad para construir strings de clases CSS de forma type-safe
 * basándose en diferentes "variantes" (props del componente).
 *
 * Estructura:
 * - Primer argumento: Clases base que SIEMPRE se aplican
 * - Segundo argumento: Objeto de configuración con:
 *   - variants: Define las posibles variantes y sus clases
 *   - compoundVariants: Combina múltiples variantes (ej: variant + color)
 *   - defaultVariants: Valores por defecto
 */
export const badgeVariants = cva(
  // 1️⃣ CLASE BASE: Siempre se aplica, sin importar las props
  'badge',
  {
    // 2️⃣ VARIANTS: Define cada prop y sus posibles valores
    variants: {
      // variant: Define el estilo visual del badge
      variant: {
        solid: 'badge-solid', // Fondo sólido
        outline: 'badge-outline', // Solo borde, fondo transparente
        ghost: 'badge-ghost', // Sin fondo ni borde, hover sutil
        soft: 'badge-soft', // Fondo semi-transparente (definido en compoundVariants)
        dashed: 'badge-dashed', // Borde punteado
      },

      // color: Define el color semántico (se combina con variant en compoundVariants)
      // Dejamos vacío porque cada combinación variant+color es única
      color: {
        primary: '',
        secondary: '',
        accent: '',
        success: '',
        warning: '',
        error: '',
        info: '',
      },

      // size: Define el tamaño del badge
      size: {
        sm: 'text-xs px-2 py-0.5', // Pequeño
        md: 'text-sm px-3 py-1', // Mediano (default)
        lg: 'text-base px-4 py-2', // Grande
      },
    },

    // 3️⃣ COMPOUND VARIANTS: Combina múltiples props para casos específicos
    // Cuando variant='solid' Y color='primary', aplica estas clases
    compoundVariants: [
      // ========================================
      // SOLID VARIANTS (Fondo sólido + texto)
      // ========================================
      { variant: 'solid', color: 'primary', class: 'bg-primary text-white' },
      { variant: 'solid', color: 'secondary', class: 'bg-secondary text-white' },
      { variant: 'solid', color: 'accent', class: 'bg-accent text-white' },
      { variant: 'solid', color: 'success', class: 'bg-success text-white' },
      { variant: 'solid', color: 'warning', class: 'bg-warning text-gray-900' }, // Texto oscuro para mejor contraste
      { variant: 'solid', color: 'error', class: 'bg-error text-white' },
      { variant: 'solid', color: 'info', class: 'bg-info text-gray-900' }, // Texto oscuro para mejor contraste

      // ========================================
      // OUTLINE VARIANTS (Solo borde + texto)
      // ========================================
      { variant: 'outline', color: 'primary', class: 'border-primary text-primary' },
      { variant: 'outline', color: 'secondary', class: 'border-secondary text-secondary' },
      { variant: 'outline', color: 'accent', class: 'border-accent text-accent' },
      { variant: 'outline', color: 'success', class: 'border-success text-success' },
      { variant: 'outline', color: 'warning', class: 'border-warning text-warning' },
      { variant: 'outline', color: 'error', class: 'border-error text-error' },
      { variant: 'outline', color: 'info', class: 'border-info text-info' },

      // ========================================
      // SOFT VARIANTS (Fondo semi-transparente)
      // ========================================
      { variant: 'soft', color: 'primary', class: 'bg-primary/10 text-primary' }, // /10 = 10% opacity
      { variant: 'soft', color: 'secondary', class: 'bg-secondary/10 text-secondary' },
      { variant: 'soft', color: 'accent', class: 'bg-accent/10 text-accent' },
      { variant: 'soft', color: 'success', class: 'bg-success/10 text-success' },
      { variant: 'soft', color: 'warning', class: 'bg-warning/10 text-warning' },
      { variant: 'soft', color: 'error', class: 'bg-error/10 text-error' },
      { variant: 'soft', color: 'info', class: 'bg-info/10 text-info' },

      // ========================================
      // GHOST VARIANTS (Sin fondo, hover sutil)
      // ========================================
      { variant: 'ghost', color: 'primary', class: 'text-primary hover:bg-primary/10' },
      { variant: 'ghost', color: 'secondary', class: 'text-secondary hover:bg-secondary/10' },
      { variant: 'ghost', color: 'accent', class: 'text-accent hover:bg-accent/10' },
      { variant: 'ghost', color: 'success', class: 'text-success hover:bg-success/10' },
      { variant: 'ghost', color: 'warning', class: 'text-warning hover:bg-warning/10' },
      { variant: 'ghost', color: 'error', class: 'text-error hover:bg-error/10' },
      { variant: 'ghost', color: 'info', class: 'text-info hover:bg-info/10' },

      // ========================================
      // DASHED VARIANTS (Borde punteado)
      // ========================================
      { variant: 'dashed', color: 'primary', class: 'border-primary text-primary' },
      { variant: 'dashed', color: 'secondary', class: 'border-secondary text-secondary' },
      { variant: 'dashed', color: 'accent', class: 'border-accent text-accent' },
      { variant: 'dashed', color: 'success', class: 'border-success text-success' },
      { variant: 'dashed', color: 'warning', class: 'border-warning text-warning' },
      { variant: 'dashed', color: 'error', class: 'border-error text-error' },
      { variant: 'dashed', color: 'info', class: 'border-info text-info' },
    ],

    // 4️⃣ DEFAULT VARIANTS: Valores por defecto si no se pasa ninguna prop
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'md',
    },
  },
);

/**
 * EJEMPLO DE USO:
 *
 * badgeVariants({ variant: 'solid', color: 'primary', size: 'md' })
 * // Retorna: "badge border-transparent text-sm px-3 py-1 bg-primary text-white"
 *
 * Clases aplicadas:
 * - 'badge' (base)
 * - 'border-transparent' (de variant: 'solid')
 * - 'text-sm px-3 py-1' (de size: 'md')
 * - 'bg-primary text-white' (de compoundVariant: solid + primary)
 */
