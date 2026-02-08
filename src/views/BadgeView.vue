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

    <!-- Con Iconos -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Badges con Iconos</h2>
      <div class="space-y-6">
        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Iconos a la Izquierda</h3>
          <div class="flex flex-wrap gap-3">
            <VBadge color="primary" icon-position="left">
              <template #icon>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </template>
              Completado
            </VBadge>

            <VBadge variant="soft" color="success" icon-position="left">
              <template #icon>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </template>
              Verificado
            </VBadge>

            <VBadge variant="outline" color="info" icon-position="left">
              <template #icon>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </template>
              Información
            </VBadge>

            <VBadge variant="soft" color="warning" icon-position="left">
              <template #icon>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </template>
              Advertencia
            </VBadge>

            <VBadge variant="soft" color="error" icon-position="left">
              <template #icon>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </template>
              Error
            </VBadge>
          </div>
        </div>

        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Iconos a la Derecha</h3>
          <div class="flex flex-wrap gap-3">
            <VBadge color="primary" icon-position="right">
              <template #icon>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </template>
              Siguiente
            </VBadge>

            <VBadge variant="outline" color="secondary" icon-position="right">
              <template #icon>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </template>
              Link Externo
            </VBadge>

            <VBadge variant="soft" color="accent" icon-position="right">
              <template #icon>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </template>
              Descargar
            </VBadge>

            <VBadge variant="ghost" color="info" icon-position="right">
              <template #icon>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </template>
              Agregar
            </VBadge>
          </div>
        </div>

        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">
            Con Diferentes Tamaños de Iconos
          </h3>
          <div class="flex flex-wrap gap-3 items-center">
            <VBadge size="xs" color="primary">
              <template #icon>
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </template>
              XS
            </VBadge>

            <VBadge size="sm" color="primary">
              <template #icon>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </template>
              SM
            </VBadge>

            <VBadge size="md" color="primary">
              <template #icon>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </template>
              MD
            </VBadge>

            <VBadge size="lg" color="primary">
              <template #icon>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </template>
              LG
            </VBadge>

            <VBadge size="xl" color="primary">
              <template #icon>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </template>
              XL
            </VBadge>
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
