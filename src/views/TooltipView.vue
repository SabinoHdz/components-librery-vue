<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-8 text-text-primary">Tooltip Component</h1>

    <!-- EJEMPLO 1: Colores -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Colores</h2>
      <div class="flex flex-wrap gap-3 p-6 bg-surface rounded-lg border border-border">
        <v-tooltip color="primary" text="Primary">
          <v-button color="primary">Primary</v-button>
        </v-tooltip>
        <v-tooltip color="error" text="Error">
          <v-button color="error">Error</v-button>
        </v-tooltip>
        <v-tooltip color="success" text="Success">
          <v-button color="success">Success</v-button>
        </v-tooltip>
      </div>
    </section>

    <!-- EJEMPLO 2: Posiciones -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Posiciones</h2>
      <div class="grid grid-cols-3 gap-4 p-6 bg-surface rounded-lg border border-border">
        <div class="text-center">
          <v-tooltip placement="top" text="Top">
            <v-button>Top</v-button>
          </v-tooltip>
        </div>
        <div class="text-center">
          <v-tooltip placement="left" text="Left">
            <v-button>Left</v-button>
          </v-tooltip>
        </div>
        <div class="text-center">
          <v-tooltip placement="right" text="Right">
            <v-button>Right</v-button>
          </v-tooltip>
        </div>
        <div class="text-center">
          <v-tooltip placement="bottom" text="Bottom">
            <v-button>Bottom</v-button>
          </v-tooltip>
        </div>
      </div>
    </section>

    <!-- EJEMPLO 3: Tamaños -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Tamaños</h2>
      <div class="flex flex-wrap gap-3 p-6 bg-surface rounded-lg border border-border">
        <v-tooltip size="xs" text="Extra small">
          <v-button size="xs">XS</v-button>
        </v-tooltip>
        <v-tooltip size="sm" text="Small">
          <v-button size="sm">SM</v-button>
        </v-tooltip>
        <v-tooltip size="md" text="Medium">
          <v-button size="md">MD</v-button>
        </v-tooltip>
        <v-tooltip size="lg" text="Large">
          <v-button size="lg">LG</v-button>
        </v-tooltip>
      </div>
    </section>

    <!-- EJEMPLO 4: Triggers -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Triggers</h2>
      <div class="flex flex-wrap gap-3 p-6 bg-surface rounded-lg border border-border">
        <v-tooltip trigger="hover" text="Hover me">
          <v-button>Hover</v-button>
        </v-tooltip>
        <v-tooltip trigger="click" text="Click me">
          <v-button>Click</v-button>
        </v-tooltip>
        <v-tooltip trigger="focus" text="Focus me">
          <v-button>Focus</v-button>
        </v-tooltip>
      </div>
    </section>

    <!-- EJEMPLO 5: Con Tailwind custom -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Custom Colors</h2>
      <div class="flex flex-wrap gap-3 p-6 bg-surface rounded-lg border border-border">
        <v-tooltip class="!bg-purple-500 !text-white" text="Purple">
          <v-button variant="outline">Purple</v-button>
        </v-tooltip>
        <v-tooltip
          class="!bg-gradient-to-r !from-pink-500 !to-purple-500 !text-white"
          text="Gradient"
        >
          <v-button variant="outline">Gradient</v-button>
        </v-tooltip>
      </div>
    </section>

    <!-- EJEMPLO 6: Transiciones -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Transiciones</h2>
      <div class="flex flex-wrap gap-3 p-6 bg-surface rounded-lg border border-border">
        <v-tooltip transition="fade" color="primary" text="Fade - Aparición suave por opacidad">
          <v-button>Fade</v-button>
        </v-tooltip>
        <v-tooltip transition="scale" color="secondary" text="Scale - Aparición con zoom">
          <v-button>Scale</v-button>
        </v-tooltip>
        <v-tooltip
          transition="slide"
          placement="top"
          color="success"
          text="Slide - Se desliza suavemente"
        >
          <v-button>Slide</v-button>
        </v-tooltip>
      </div>
    </section>

    <!-- EJEMPLO 7: Sin Flecha -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Con/Sin Flecha</h2>
      <div class="flex flex-wrap gap-3 p-6 bg-surface rounded-lg border border-border">
        <v-tooltip arrow color="primary" text="Con flecha">
          <v-button>Con Flecha</v-button>
        </v-tooltip>
        <v-tooltip :arrow="false" color="error" text="Sin flecha">
          <v-button color="error">Sin Flecha</v-button>
        </v-tooltip>
      </div>
    </section>

    <!-- EJEMPLO 8: Delays -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Delays</h2>
      <div class="flex flex-wrap gap-3 p-6 bg-surface rounded-lg border border-border">
        <v-tooltip :delay="0" color="primary" text="Sin delay - Aparece inmediatamente">
          <v-button>Sin Delay (0ms)</v-button>
        </v-tooltip>
        <v-tooltip
          :delay="500"
          placement="bottom"
          color="warning"
          text="Delay medio - Espera 500ms"
        >
          <v-button>Delay 500ms</v-button>
        </v-tooltip>
        <v-tooltip
          :delay="1000"
          placement="bottom"
          color="info"
          text="Delay largo - Espera 1 segundo"
        >
          <v-button>Delay 1000ms</v-button>
        </v-tooltip>
      </div>
    </section>

    <!-- EJEMPLO 9: Combinaciones Reales -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Combinaciones Realistas</h2>
      <div class="flex flex-wrap gap-3 p-6 bg-surface rounded-lg border border-border">
        <v-tooltip
          color="success"
          placement="top"
          size="sm"
          trigger="hover"
          text="Presiona para aceptar"
        >
          <v-button variant="solid" color="success">Aceptar</v-button>
        </v-tooltip>
        <v-tooltip
          color="error"
          placement="top"
          size="sm"
          trigger="hover"
          text="Presiona para cancelar"
        >
          <v-button variant="soft" color="error">Cancelar</v-button>
        </v-tooltip>
        <v-tooltip
          color="info"
          placement="right"
          size="md"
          transition="scale"
          trigger="hover"
          text="Más información disponible"
        >
          <v-icon name="help" color="info" class="text-2xl cursor-help" />
        </v-tooltip>
      </div>
    </section>

    <!-- EJEMPLO 10: Variants + Placements -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Placements Extendidos</h2>
      <div class="grid grid-cols-4 gap-4 p-6 bg-surface rounded-lg border border-border">
        <div class="text-center">
          <v-tooltip placement="top-start" color="primary" text="Top Start">
            <v-button size="sm">Top Start</v-button>
          </v-tooltip>
        </div>
        <div class="text-center">
          <v-tooltip placement="top-end" color="primary" text="Top End">
            <v-button size="sm">Top End</v-button>
          </v-tooltip>
        </div>
        <div class="text-center">
          <v-tooltip placement="bottom-start" color="primary" text="Bottom Start">
            <v-button size="sm">Bottom Start</v-button>
          </v-tooltip>
        </div>
        <div class="text-center">
          <v-tooltip placement="bottom-end" color="primary" text="Bottom End">
            <v-button size="sm">Bottom End</v-button>
          </v-tooltip>
        </div>
        <div class="text-center">
          <v-tooltip placement="left-start" color="secondary" text="Left Start">
            <v-button size="sm">Left Start</v-button>
          </v-tooltip>
        </div>
        <div class="text-center">
          <v-tooltip placement="left-end" color="secondary" text="Left End">
            <v-button size="sm">Left End</v-button>
          </v-tooltip>
        </div>
        <div class="text-center">
          <v-tooltip placement="right-start" color="secondary" text="Right Start">
            <v-button size="sm">Right Start</v-button>
          </v-tooltip>
        </div>
        <div class="text-center">
          <v-tooltip placement="right-end" color="secondary" text="Right End">
            <v-button size="sm">Right End</v-button>
          </v-tooltip>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import VTooltip from '@/components/ui/tooltip/VTooltip.vue';
import VButton from '@/components/ui/button/VButton.vue';
import VIcon from '@/components/ui/icon/VIcon.vue';
</script>
