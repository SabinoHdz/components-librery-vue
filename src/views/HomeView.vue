<script setup lang="ts">
import VBadge from '@/components/ui/badge/VBadge.vue';
</script>

<template>
  <div class="container mx-auto p-8 space-y-8">
    <h1 class="text-3xl font-bold">Badge Component Demo</h1>

    <!-- Solid Variants -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Solid Variants</h2>
      <div class="flex flex-wrap gap-2">
        <VBadge variant="solid" color="primary">Primary</VBadge>
        <VBadge variant="solid" color="secondary">Secondary</VBadge>
        <VBadge variant="solid" color="accent">Accent</VBadge>
        <VBadge variant="solid" color="success">Success</VBadge>
        <VBadge variant="solid" color="warning">Warning</VBadge>
        <VBadge variant="solid" color="error">Error</VBadge>
        <VBadge variant="solid" color="info">Info</VBadge>
      </div>
    </section>

    <!-- Outline Variants -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Outline Variants</h2>
      <div class="flex flex-wrap gap-2">
        <VBadge variant="outline" color="primary">Primary</VBadge>
        <VBadge variant="outline" color="secondary">Secondary</VBadge>
        <VBadge variant="outline" color="accent">Accent</VBadge>
        <VBadge variant="outline" color="success">Success</VBadge>
        <VBadge variant="outline" color="warning">Warning</VBadge>
        <VBadge variant="outline" color="error">Error</VBadge>
        <VBadge variant="outline" color="info">Info</VBadge>
      </div>
    </section>

    <!-- Soft Variants -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Soft Variants</h2>
      <div class="flex flex-wrap gap-2">
        <VBadge variant="soft" color="primary">Primary</VBadge>
        <VBadge variant="soft" color="secondary">Secondary</VBadge>
        <VBadge variant="soft" color="accent">Accent</VBadge>
        <VBadge variant="soft" color="success">Success</VBadge>
        <VBadge variant="soft" color="warning">Warning</VBadge>
        <VBadge variant="soft" color="error">Error</VBadge>
        <VBadge variant="soft" color="info">Info</VBadge>
      </div>
    </section>

    <!-- Ghost Variants -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Ghost Variants</h2>
      <div class="flex flex-wrap gap-2">
        <VBadge variant="ghost" color="primary">Primary</VBadge>
        <VBadge variant="ghost" color="secondary">Secondary</VBadge>
        <VBadge variant="ghost" color="accent">Accent</VBadge>
        <VBadge variant="ghost" color="success">Success</VBadge>
        <VBadge variant="ghost" color="warning">Warning</VBadge>
        <VBadge variant="ghost" color="error">Error</VBadge>
        <VBadge variant="ghost" color="info">Info</VBadge>
      </div>
    </section>

    <!-- Dashed Variants -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Dashed Variants</h2>
      <div class="flex flex-wrap gap-2">
        <VBadge variant="dashed" color="primary">Primary</VBadge>
        <VBadge variant="dashed" color="secondary">Secondary</VBadge>
        <VBadge variant="dashed" color="accent">Accent</VBadge>
        <VBadge variant="dashed" color="success">Success</VBadge>
        <VBadge variant="dashed" color="warning">Warning</VBadge>
        <VBadge variant="dashed" color="error">Error</VBadge>
        <VBadge variant="dashed" color="info">Info</VBadge>
      </div>
    </section>

    <!-- Sizes -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold">Sizes</h2>
      <div class="flex flex-wrap items-center gap-2">
        <VBadge size="sm">Small</VBadge>
        <VBadge size="md">Medium</VBadge>
        <VBadge size="lg">Large</VBadge>
      </div>
    </section>
  </div>
</template>
