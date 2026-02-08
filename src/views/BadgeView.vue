<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4 text-text-primary">Badge Component</h1>
      <p class="text-lg text-text-secondary">
        Etiquetas versátiles con múltiples estilos, colores y tamaños. Perfectas para indicadores de
        estado, notificaciones y metadatos.
      </p>
    </div>

    <!-- Variantes -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Variantes</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          v-for="variant in BADGE_VARIANTS"
          :key="variant"
          class="p-6 rounded-lg bg-surface border border-border"
        >
          <h3 class="text-lg font-semibold mb-4 capitalize text-text-primary">
            {{ variant }}
          </h3>
          <div class="flex flex-wrap gap-3">
            <VBadge
              v-for="color in BADGE_COLORS.slice(0, 3)"
              :key="`${variant}-${color}`"
              :variant="variant as BadgeVariant"
              :color="color as BadgeColor"
            >
              {{ color }}
            </VBadge>
          </div>
        </div>
      </div>
    </section>

    <!-- Colores -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Colores</h2>
      <div class="space-y-6">
        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Variante Solid</h3>
          <div class="flex flex-wrap gap-3">
            <VBadge
              v-for="color in BADGE_COLORS"
              :key="`solid-${color}`"
              variant="solid"
              :color="color as BadgeColor"
            >
              {{ color }}
            </VBadge>
          </div>
        </div>

        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Variante Outline</h3>
          <div class="flex flex-wrap gap-3">
            <VBadge
              v-for="color in BADGE_COLORS"
              :key="`outline-${color}`"
              variant="outline"
              :color="color as BadgeColor"
            >
              {{ color }}
            </VBadge>
          </div>
        </div>

        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Variante Soft</h3>
          <div class="flex flex-wrap gap-3">
            <VBadge
              v-for="color in BADGE_COLORS"
              :key="`soft-${color}`"
              variant="soft"
              :color="color as BadgeColor"
            >
              {{ color }}
            </VBadge>
          </div>
        </div>

        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Variante Ghost</h3>
          <div class="flex flex-wrap gap-3">
            <VBadge
              v-for="color in BADGE_COLORS"
              :key="`ghost-${color}`"
              variant="ghost"
              :color="color as BadgeColor"
            >
              {{ color }}
            </VBadge>
          </div>
        </div>

        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Variante Dashed</h3>
          <div class="flex flex-wrap gap-3">
            <VBadge
              v-for="color in BADGE_COLORS"
              :key="`dashed-${color}`"
              variant="dashed"
              :color="color as BadgeColor"
            >
              {{ color }}
            </VBadge>
          </div>
        </div>
      </div>
    </section>

    <!-- Tamaños -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Tamaños</h2>
      <div class="p-6 rounded-lg bg-surface border border-border">
        <div class="flex flex-wrap gap-3 items-center">
          <VBadge
            v-for="size in BADGE_SIZES"
            :key="`size-${size}`"
            :size="size as BadgeSize"
            color="primary"
          >
            {{ size.toUpperCase() }}
          </VBadge>
        </div>
      </div>
    </section>

    <!-- Modo Dot -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Modo Dot (Indicador)</h2>
      <div class="space-y-6">
        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Indicadores de Estado</h3>
          <div class="flex flex-wrap gap-6 items-center">
            <div class="flex items-center gap-2">
              <VBadge dot color="success" />
              <span class="text-sm text-text-primary">Online</span>
            </div>
            <div class="flex items-center gap-2">
              <VBadge dot color="warning" />
              <span class="text-sm text-text-primary">Inactivo</span>
            </div>
            <div class="flex items-center gap-2">
              <VBadge dot color="error" />
              <span class="text-sm text-text-primary">Offline</span>
            </div>
            <div class="flex items-center gap-2">
              <VBadge dot color="info" />
              <span class="text-sm text-text-primary">Nuevo</span>
            </div>
          </div>
        </div>

        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Tamaños de Dot</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <VBadge
              v-for="size in BADGE_SIZES"
              :key="`dot-${size}`"
              dot
              :size="size as BadgeSize"
              color="primary"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Casos de Uso -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Casos de Uso</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Etiquetas de Categoría -->
        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Etiquetas de Categoría</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <span class="text-text-primary">Tecnología</span>
              <VBadge color="primary">Vue 3</VBadge>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-text-primary">Estado</span>
              <VBadge variant="soft" color="success">Aprobado</VBadge>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-text-primary">Prioridad</span>
              <VBadge variant="outline" color="warning">Alta</VBadge>
            </div>
          </div>
        </div>

        <!-- Notificaciones -->
        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Notificaciones</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <button
                class="relative px-4 py-2 bg-primary text-white rounded hover:opacity-90 transition"
              >
                <span>Mensajes</span>
                <VBadge dot color="error" size="xs" class="absolute -top-1 -right-1" />
              </button>
            </div>
            <div class="flex items-center gap-3">
              <button
                class="relative px-4 py-2 bg-secondary text-white rounded hover:opacity-90 transition"
              >
                <span>Alertas</span>
                <VBadge color="warning" size="sm" class="absolute -top-2 -right-2">5</VBadge>
              </button>
            </div>
          </div>
        </div>

        <!-- Badges en Listas -->
        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Elementos en Listas</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-text-primary">Proyecto A</span>
              <VBadge variant="soft" color="success">Activo</VBadge>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-text-primary">Proyecto B</span>
              <VBadge variant="soft" color="warning">En pausa</VBadge>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-text-primary">Proyecto C</span>
              <VBadge variant="soft" color="error">Cancelado</VBadge>
            </div>
          </div>
        </div>

        <!-- Versiones -->
        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Versiones y Tags</h3>
          <div class="flex flex-wrap gap-2">
            <VBadge color="primary">v1.0.0</VBadge>
            <VBadge variant="outline" color="info">beta</VBadge>
            <VBadge variant="soft" color="warning">experimental</VBadge>
            <VBadge variant="dashed" color="secondary">new</VBadge>
          </div>
        </div>
      </div>
    </section>

    <!-- Con Slots -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Composición con Slots</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Badges con Emojis</h3>
          <div class="flex flex-wrap gap-3">
            <VBadge color="primary">🔥 Trending</VBadge>
            <VBadge color="secondary">⭐ Featured</VBadge>
            <VBadge color="success">🎉 Nuevo</VBadge>
            <VBadge variant="outline" color="warning">🚀 Lanzamiento</VBadge>
          </div>
        </div>

        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Badges Combinados</h3>
          <div class="flex flex-wrap gap-3">
            <VBadge variant="soft" color="primary" size="lg">Vue 3</VBadge>
            <VBadge variant="soft" color="secondary" size="md">TypeScript</VBadge>
            <VBadge variant="soft" color="accent" size="sm">Tailwind</VBadge>
            <VBadge variant="soft" color="info" size="xs">CVA</VBadge>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import VBadge from '@/components/ui/badge/VBadge.vue';
import { BADGE_VARIANTS, BADGE_COLORS, BADGE_SIZES } from '@/components/ui/badge/badge';
import type { BadgeVariant, BadgeColor, BadgeSize } from '@/components/ui/badge/badge';
</script>
