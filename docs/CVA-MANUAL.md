# Manual de CVA (Class Variance Authority)

## 📚 Guía Completa de Class Variance Authority

---

## 1️⃣ ¿Qué es CVA?

**CVA (Class Variance Authority)** es una biblioteca que te ayuda a gestionar clases CSS dinámicas basadas en "variantes" (props de componentes) de forma **type-safe** (con tipos de TypeScript).

### Problema que resuelve:

**❌ Sin CVA:**

```ts
// Código complejo, repetitivo y sin tipos
const buttonClass = computed(() => {
  let classes = 'button ';
  if (props.variant === 'solid' && props.color === 'primary') {
    classes += 'bg-primary text-white ';
  } else if (props.variant === 'outline' && props.color === 'primary') {
    classes += 'border-primary text-primary ';
  }
  // ... 30+ combinaciones más 😰
  return classes;
});
```

**✅ Con CVA:**

```ts
const buttonVariants = cva('button', {
  variants: {
    variant: { solid: 'bg-primary', outline: 'border-primary' },
    color: { primary: 'text-white', secondary: 'text-gray-900' },
  },
});

const buttonClass = computed(() =>
  buttonVariants({
    variant: props.variant,
    color: props.color,
  }),
);
```

---

## 2️⃣ Instalación

```bash
npm install class-variance-authority
```

---

## 3️⃣ Conceptos Fundamentales

### A) Clase Base

Es la clase que **SIEMPRE** se aplica, sin importar las props:

```ts
const button = cva('btn', {
  /* ... */
});
// 'btn' siempre estará presente
```

### B) Variants (Variantes)

Define las **posibles opciones** para cada prop:

```ts
const button = cva('btn', {
  variants: {
    // Prop 'size' con 3 opciones
    size: {
      sm: 'text-xs px-2',
      md: 'text-sm px-4',
      lg: 'text-lg px-6',
    },
    // Prop 'variant' con 2 opciones
    variant: {
      solid: 'bg-blue-500 text-white',
      outline: 'border-2 border-blue-500 text-blue-500',
    },
  },
});
```

**Resultado:**

```ts
button({ size: 'lg', variant: 'solid' });
// → "btn text-lg px-6 bg-blue-500 text-white"
```

### C) Compound Variants (Variantes Compuestas)

Aplica clases **solo cuando se cumplen múltiples condiciones**:

```ts
const button = cva('btn', {
  variants: {
    variant: { solid: '', outline: '' },
    color: { primary: '', danger: '' },
  },
  compoundVariants: [
    // Solo cuando variant='solid' Y color='primary'
    {
      variant: 'solid',
      color: 'primary',
      class: 'bg-blue-500 text-white',
    },
    // Solo cuando variant='solid' Y color='danger'
    {
      variant: 'solid',
      color: 'danger',
      class: 'bg-red-500 text-white',
    },
  ],
});
```

**Resultado:**

```ts
button({ variant: 'solid', color: 'danger' });
// → "btn bg-red-500 text-white"
```

### D) Default Variants

Define valores **por defecto** si no se pasa ninguna prop:

```ts
const button = cva('btn', {
  variants: {
    size: { sm: '...', md: '...', lg: '...' },
  },
  defaultVariants: {
    size: 'md', // ← Valor por defecto
  },
});

button(); // Sin props
// → "btn text-sm px-4" (usa 'md' por defecto)
```

---

## 4️⃣ Sintaxis Completa

```ts
import { cva } from 'class-variance-authority';

const componentVariants = cva(
  // 1️⃣ Clase base (siempre presente)
  'base-class',

  // 2️⃣ Configuración
  {
    // A) Variantes simples
    variants: {
      propName: {
        option1: 'classes-for-option1',
        option2: 'classes-for-option2',
      },
    },

    // B) Variantes compuestas
    compoundVariants: [
      {
        propName1: 'value1',
        propName2: 'value2',
        class: 'classes-when-both-match',
      },
    ],

    // C) Valores por defecto
    defaultVariants: {
      propName: 'default-value',
    },
  },
);
```

---

## 5️⃣ Integración con Vue

### Forma recomendada:

**1. Archivo de variantes separado (`component.variants.ts`):**

```ts
import { cva } from 'class-variance-authority';

export const buttonVariants = cva('btn', {
  variants: {
    variant: {
      solid: 'bg-primary text-white',
      outline: 'border-2 border-primary text-primary',
    },
    size: {
      sm: 'text-xs px-2 py-1',
      md: 'text-sm px-4 py-2',
      lg: 'text-lg px-6 py-3',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
});
```

**2. Componente Vue (`Button.vue`):**

```vue
<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { buttonVariants } from './button.variants';

interface Props {
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  size: 'md',
});

const buttonClass = computed(() =>
  buttonVariants({
    variant: props.variant,
    size: props.size,
  }),
);
</script>
```

**3. Uso:**

```vue
<Button variant="outline" size="lg">Click me</Button>
```

---

## 6️⃣ Casos de Uso Avanzados

### A) Más de 3 variantes

```ts
const card = cva('card', {
  variants: {
    variant: { solid: '...', outline: '...', ghost: '...' },
    color: { primary: '...', secondary: '...', accent: '...' },
    size: { sm: '...', md: '...', lg: '...' },
    rounded: { none: 'rounded-none', md: 'rounded-md', full: 'rounded-full' },
    shadow: { none: 'shadow-none', sm: 'shadow-sm', lg: 'shadow-lg' },
  },
});

// CVA maneja todas las combinaciones automáticamente
card({
  variant: 'solid',
  color: 'primary',
  size: 'lg',
  rounded: 'md',
  shadow: 'lg',
});
```

### B) Condicionales complejas con Compound Variants

```ts
const button = cva('btn', {
  variants: {
    variant: { solid: '', outline: '' },
    disabled: { true: '', false: '' },
  },
  compoundVariants: [
    // Solo si NO está disabled
    {
      disabled: false,
      class: 'cursor-pointer hover:opacity-80',
    },
    // Solo si está disabled Y es solid
    {
      variant: 'solid',
      disabled: true,
      class: 'bg-gray-300 cursor-not-allowed',
    },
    // Solo si está disabled Y es outline
    {
      variant: 'outline',
      disabled: true,
      class: 'border-gray-300 text-gray-300 cursor-not-allowed',
    },
  ],
});
```

### C) Extracción de tipos con VariantProps

```ts
import { type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('btn', {
  variants: {
    /* ... */
  },
});

// Extrae los tipos de las variantes automáticamente
export type ButtonProps = VariantProps<typeof buttonVariants>;

// Ahora ButtonProps tiene:
// { variant?: 'solid' | 'outline', size?: 'sm' | 'md' | 'lg' }
```

---

## 7️⃣ Ventajas vs Otras Alternativas

| Enfoque                                                        | Pros                                                                          | Contras                                                                             |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Template Literals** (`\`btn-${variant}\``)                   | Simple                                                                        | ❌ No type-safe<br>❌ Tailwind tree-shaking falla<br>❌ No maneja compound variants |
| **Objetos de clases** (`{ 'btn-solid': variant === 'solid' }`) | Reactivo                                                                      | ❌ Verboso<br>❌ Difícil escalar                                                    |
| **CVA**                                                        | ✅ Type-safe<br>✅ Compound variants<br>✅ Escalable<br>✅ Estándar industria | Dependencia externa                                                                 |

---

## 8️⃣ Tips y Buenas Prácticas

### ✅ DO (Recomendado)

```ts
// ✅ Separar variantes en archivo .variants.ts
export const badgeVariants = cva(/* ... */);

// ✅ Usar compound variants para combinaciones
compoundVariants: [{ variant: 'solid', color: 'primary', class: 'bg-primary text-white' }];

// ✅ Clases base compartidas en el primer argumento
cva('badge inline-flex items-center', {
  /* ... */
});

// ✅ Extraer tipos con VariantProps
export type BadgeProps = VariantProps<typeof badgeVariants>;
```

### ❌ DON'T (Evitar)

```ts
// ❌ No mezclar lógica de variantes en el componente
const badgeClass = computed(() => {
  if (props.variant === 'solid') return 'bg-primary';
  // Esto va en CVA
});

// ❌ No poner todo en variants si se combina
variants: {
  solidPrimary: 'bg-primary text-white', // ❌ Usa compoundVariants
}

// ❌ No duplicar lógica CSS
// Si solid-primary y solid-secondary comparten estilos,
// usa variants + compoundVariants
```

---

## 9️⃣ Recursos Adicionales

- **Documentación oficial:** [https://cva.style](https://cva.style)
- **GitHub:** [https://github.com/joe-bell/cva](https://github.com/joe-bell/cva)
- **Ejemplos en shadcn/ui:** [https://ui.shadcn.com](https://ui.shadcn.com)
- **Uso con Tailwind CSS:** [https://tailwindcss.com/docs/reusing-styles](https://tailwindcss.com/docs/reusing-styles)

---

## 🔟 Resumen Rápido

| Concepto              | Descripción                         | Cuándo usar                                      |
| --------------------- | ----------------------------------- | ------------------------------------------------ |
| **Clase Base**        | Clases que siempre se aplican       | Estilos comunes de todos los componentes         |
| **Variants**          | Opciones individuales para una prop | Cada prop del componente (size, variant, color)  |
| **Compound Variants** | Combinaciones de múltiples props    | Cuando `variant + color` producen estilos únicos |
| **Default Variants**  | Valores por defecto                 | Props opcionales con valor predeterminado        |

---

## ✨ Ejemplo Final Completo

```ts
// badge.variants.ts
import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  // Base: siempre aplicadas
  'inline-flex items-center rounded-full font-semibold transition-colors',
  {
    variants: {
      variant: {
        solid: 'border-transparent',
        outline: 'bg-transparent border-2',
        soft: 'border-transparent',
      },
      color: {
        primary: '',
        success: '',
        error: '',
      },
      size: {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-3 py-1',
        lg: 'text-base px-4 py-2',
      },
    },
    compoundVariants: [
      // Solid + Primary
      { variant: 'solid', color: 'primary', class: 'bg-blue-500 text-white' },
      // Solid + Success
      { variant: 'solid', color: 'success', class: 'bg-green-500 text-white' },
      // Outline + Primary
      { variant: 'outline', color: 'primary', class: 'border-blue-500 text-blue-500' },
      // Soft + Primary
      { variant: 'soft', color: 'primary', class: 'bg-blue-500/10 text-blue-500' },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'md',
    },
  },
);
```

```vue
<!-- Badge.vue -->
<template>
  <span :class="badgeClass">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { badgeVariants } from './badge.variants';

interface Props {
  variant?: 'solid' | 'outline' | 'soft';
  color?: 'primary' | 'success' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  color: 'primary',
  size: 'md',
});

const badgeClass = computed(() =>
  badgeVariants({
    variant: props.variant,
    color: props.color,
    size: props.size,
  }),
);
</script>
```

```vue
<!-- Uso -->
<Badge variant="soft" color="success" size="lg">
  ✓ Success
</Badge>
```

---

**¡Con esto tienes todo lo necesario para dominar CVA!** 🎉
