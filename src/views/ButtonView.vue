<template>
  <main class="max-w-4xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-8 text-text-primary">Button Component</h1>

    <!-- Variants -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Variants</h2>
      <div class="flex flex-wrap gap-3 p-6 bg-surface rounded-lg border border-border">
        <v-button variant="solid">Solid</v-button>
        <v-button variant="outline">Outline</v-button>
        <v-button variant="ghost">Ghost</v-button>
        <v-button variant="soft">Soft</v-button>
        <v-button variant="dashed">Dashed</v-button>
        <v-button variant="link">Link</v-button>
      </div>
    </section>

    <!-- Colors -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Colors</h2>
      <div class="flex flex-wrap gap-3 p-6 bg-surface rounded-lg border border-border">
        <v-button color="primary">Primary</v-button>
        <v-button color="secondary">Secondary</v-button>
        <v-button color="success">Success</v-button>
        <v-button color="warning">Warning</v-button>
        <v-button color="error">Error</v-button>
        <v-button color="info">Info</v-button>
      </div>
    </section>

    <!-- Sizes -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Sizes</h2>
      <div class="flex items-center flex-wrap gap-3 p-6 bg-surface rounded-lg border border-border">
        <v-button size="xs">Extra Small</v-button>
        <v-button size="sm">Small</v-button>
        <v-button size="md">Medium</v-button>
        <v-button size="lg">Large</v-button>
        <v-button size="xl">Extra Large</v-button>
      </div>
    </section>

    <!-- States -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">States</h2>
      <div class="flex flex-wrap gap-3 p-6 bg-surface rounded-lg border border-border">
        <v-button>Normal</v-button>
        <v-button disabled>Disabled</v-button>
        <v-button :loading="loading" @click="handleLoading">Loading</v-button>
        <v-button active>Active</v-button>
      </div>
    </section>

    <!-- Shapes -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Shapes</h2>
      <div class="flex flex-wrap gap-3 p-6 bg-surface rounded-lg border border-border">
        <v-button>Default</v-button>
        <v-button rounded>Rounded</v-button>
        <v-button square>Square</v-button>
        <v-button circle size="md">✓</v-button>
        <v-button fab size="md" color="primary">✚</v-button>
      </div>
    </section>

    <!-- Variants + Colors Grid -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Variants by Color (Solid)</h2>
      <div class="space-y-4 p-6 bg-surface rounded-lg border border-border">
        <div class="flex flex-wrap gap-2">
          <v-button variant="solid" color="primary">Primary</v-button>
          <v-button variant="solid" color="secondary">Secondary</v-button>
          <v-button variant="solid" color="success">Success</v-button>
          <v-button variant="solid" color="warning">Warning</v-button>
          <v-button variant="solid" color="error">Error</v-button>
          <v-button variant="solid" color="info">Info</v-button>
        </div>
        <div class="flex flex-wrap gap-2">
          <v-button variant="outline" color="primary">Primary</v-button>
          <v-button variant="outline" color="secondary">Secondary</v-button>
          <v-button variant="outline" color="success">Success</v-button>
          <v-button variant="outline" color="warning">Warning</v-button>
          <v-button variant="outline" color="error">Error</v-button>
          <v-button variant="outline" color="info">Info</v-button>
        </div>
        <div class="flex flex-wrap gap-2">
          <v-button variant="soft" color="primary">Primary</v-button>
          <v-button variant="soft" color="secondary">Secondary</v-button>
          <v-button variant="soft" color="success">Success</v-button>
          <v-button variant="soft" color="warning">Warning</v-button>
          <v-button variant="soft" color="error">Error</v-button>
          <v-button variant="soft" color="info">Info</v-button>
        </div>
      </div>
    </section>

    <!-- Special Props -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Special Props</h2>
      <div class="space-y-4 p-6 bg-surface rounded-lg border border-border">
        <div class="flex flex-wrap gap-2">
          <v-button full-width>Full Width Button</v-button>
        </div>
        <div class="flex flex-wrap gap-2">
          <v-button dense>Dense</v-button>
          <v-button dense variant="outline">Dense Outline</v-button>
          <v-button rounded>Rounded</v-button>
        </div>
        <div class="flex flex-wrap gap-2">
          <v-button size="lg" variant="solid" color="success">Success Large</v-button>
          <v-button size="lg" variant="outline" color="warning">Warning Large</v-button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VButton from '@/components/ui/button/VButton.vue';

const loading = ref(false);

const handleLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>
