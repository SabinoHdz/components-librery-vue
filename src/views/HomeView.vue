<script setup lang="ts">
import { useRouter } from 'vue-router';
import VBadge from '@/components/ui/badge/VBadge.vue';

const router = useRouter();
</script>

<template>
  <main class="max-w-4xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-4 text-text-primary">Librería de Componentes Vue</h1>

    <p class="text-lg mb-8 text-text-secondary">
      Sistema de diseño con soporte para dark mode y accesibilidad WCAG AA.
    </p>

    <!-- Cards de ejemplo  -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <div class="p-6 rounded-lg bg-surface border border-border">
        <h3 class="text-xl font-semibold mb-2 text-text-primary">Colores Primarios</h3>
        <div class="flex gap-4 mt-4">
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-lg bg-primary"></div>
            <span class="text-sm mt-2 text-text-secondary">Primary</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-lg bg-secondary"></div>
            <span class="text-sm mt-2 text-text-secondary">Secondary</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-lg bg-accent"></div>
            <span class="text-sm mt-2 text-text-secondary">Accent</span>
          </div>
        </div>
      </div>

      <div class="p-6 rounded-lg bg-surface border border-border">
        <h3 class="text-xl font-semibold mb-2 text-text-primary">Colores Semánticos</h3>
        <div class="flex gap-4 mt-4">
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-lg bg-success"></div>
            <span class="text-sm mt-2 text-text-secondary">Success</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-lg bg-warning"></div>
            <span class="text-sm mt-2 text-text-secondary">Warning</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 rounded-lg bg-error"></div>
            <span class="text-sm mt-2 text-text-secondary">Error</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Componentes disponibles -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-4 text-text-primary">Componentes</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          @click="router.push({ name: 'badge' })"
          class="p-6 rounded-lg bg-surface border border-border hover:border-primary transition-colors text-left group"
        >
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-lg font-semibold text-text-primary group-hover:text-primary transition">
              Badge
            </h3>
            <VBadge color="primary" size="sm">Nuevo</VBadge>
          </div>
          <p class="text-sm text-text-secondary">
            Etiquetas versátiles con múltiples variantes, colores y tamaños.
          </p>
          <div class="flex flex-wrap gap-2 mt-4">
            <VBadge variant="solid" color="primary" size="xs">solid</VBadge>
            <VBadge variant="outline" color="secondary" size="xs">outline</VBadge>
            <VBadge variant="soft" color="success" size="xs">soft</VBadge>
            <VBadge variant="ghost" color="warning" size="xs">ghost</VBadge>
            <VBadge variant="dashed" color="error" size="xs">dashed</VBadge>
          </div>
        </button>

        <!-- Placeholder para futuros componentes -->
        <div class="p-6 rounded-lg bg-surface border border-border opacity-50">
          <h3 class="text-lg font-semibold text-text-primary mb-2">Button</h3>
          <p class="text-sm text-text-secondary">Próximamente...</p>
        </div>

        <div class="p-6 rounded-lg bg-surface border border-border opacity-50">
          <h3 class="text-lg font-semibold text-text-primary mb-2">Card</h3>
          <p class="text-sm text-text-secondary">Próximamente...</p>
        </div>

        <div class="p-6 rounded-lg bg-surface border border-border opacity-50">
          <h3 class="text-lg font-semibold text-text-primary mb-2">Input</h3>
          <p class="text-sm text-text-secondary">Próximamente...</p>
        </div>
      </div>
    </div>

    <!-- Preview rápido del Badge -->
    <div class="mb-12">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Preview: Badge Component</h2>
      <div class="p-6 rounded-lg bg-surface border border-border">
        <div class="space-y-4">
          <div>
            <h4 class="text-sm font-semibold mb-2 text-text-secondary">Variantes Solid</h4>
            <div class="flex flex-wrap gap-2">
              <VBadge color="primary">Primary</VBadge>
              <VBadge color="secondary">Secondary</VBadge>
              <VBadge color="success">Success</VBadge>
              <VBadge color="warning">Warning</VBadge>
              <VBadge color="error">Error</VBadge>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-semibold mb-2 text-text-secondary">Tamaños</h4>
            <div class="flex flex-wrap gap-2 items-center">
              <VBadge size="xs">XS</VBadge>
              <VBadge size="sm">SM</VBadge>
              <VBadge size="md">MD</VBadge>
              <VBadge size="lg">LG</VBadge>
              <VBadge size="xl">XL</VBadge>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-semibold mb-2 text-text-secondary">Modo Dot</h4>
            <div class="flex flex-wrap gap-4 items-center">
              <div class="flex items-center gap-2">
                <VBadge dot color="success" />
                <span class="text-sm text-text-primary">Online</span>
              </div>
              <div class="flex items-center gap-2">
                <VBadge dot color="error" />
                <span class="text-sm text-text-primary">Offline</span>
              </div>
              <div class="flex items-center gap-2">
                <VBadge dot color="warning" />
                <span class="text-sm text-text-primary">Inactivo</span>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-border">
            <button
              @click="router.push({ name: 'badge' })"
              class="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition font-medium"
            >
              Ver todos los ejemplos →
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
