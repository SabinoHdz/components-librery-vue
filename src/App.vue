<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useTheme } from '@/composables/useTheme';

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <div class="min-h-screen bg-background text-text-primary transition-colors duration-200">
    <header class="border-b border-border bg-surface">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <nav class="flex items-center justify-between">
          <div class="flex items-center gap-6">
            <RouterLink to="/" class="text-xl font-bold text-primary hover:opacity-80 transition">
              Component Library
            </RouterLink>
            <div class="flex gap-4">
              <RouterLink
                to="/"
                class="text-text-secondary hover:text-text-primary transition font-medium"
                active-class="text-primary"
              >
                Home
              </RouterLink>
              <RouterLink
                to="/badge"
                class="text-text-secondary hover:text-text-primary transition font-medium"
                active-class="text-primary"
              >
                Badge
              </RouterLink>
              <RouterLink
                to="/icon"
                class="text-text-secondary hover:text-text-primary transition font-medium"
                active-class="text-primary"
              >
                Icon
              </RouterLink>

              <router-link to="/button" :class="{ active: $route.path === '/button' }">
                Button
              </router-link>

              <RouterLink
                to="/tooltip"
                class="text-text-secondary hover:text-text-primary transition font-medium"
                active-class="text-primary"
              >
                Tooltip
              </RouterLink>
              <RouterLink
                to="/alert"
                class="text-text-secondary hover:text-text-primary transition font-medium"
                active-class="text-primary"
              >
                Alert
              </RouterLink>
              <RouterLink
                to="/about"
                class="text-text-secondary hover:text-text-primary transition font-medium"
                active-class="text-primary"
              >
                About
              </RouterLink>
            </div>
          </div>

          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg bg-surface-variant hover:bg-border transition-colors"
            :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
          >
            <svg
              v-if="isDark"
              class="w-5 h-5 text-text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <svg
              v-else
              class="w-5 h-5 text-text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>
