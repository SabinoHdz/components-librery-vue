<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-8 text-text-primary">Card Component</h1>

    <!-- SECTION 1: Variants -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Variants</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <v-card variant="solid" title="Solid" subtitle="Default background">
          Solid card with standard surface background.
        </v-card>
        <v-card variant="soft" title="Soft" subtitle="Subtle background">
          Soft card with surface-variant background.
        </v-card>
        <v-card variant="outline" title="Outline" subtitle="Border only">
          Outline card with transparent background.
        </v-card>
        <v-card variant="elevated" title="Elevated" subtitle="Shadowed">
          Elevated card with stronger shadow.
        </v-card>
      </div>
    </section>

    <!-- SECTION 2: Layouts (Flex vs Grid) -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Layouts</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <v-card layout="flex" title="Flex layout" subtitle="Stacked content">
          Flex layout stacks elements vertically.
          <template #actions>
            <v-button size="sm" variant="outline">Action</v-button>
            <v-button size="sm" variant="soft">Secondary</v-button>
          </template>
        </v-card>
        <v-card layout="grid" class="sm:grid-cols-2" title="Grid layout" subtitle="Two columns">
          <div class="text-sm text-text-secondary">Column A content</div>
          <div class="text-sm text-text-secondary">Column B content</div>
          <template #actions>
            <v-button size="sm" variant="outline">Action</v-button>
          </template>
        </v-card>
      </div>
    </section>

    <!-- SECTION 3: Subcomponents -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Subcomponents</h2>
      <v-card variant="soft">
        <v-card-header>
          <div>
            <div class="text-base font-semibold text-text-primary">Card Header</div>
            <div class="text-sm text-text-secondary">Optional subtitle</div>
          </div>
          <v-icon name="more_vert" />
        </v-card-header>
        <v-card-body>
          This is the body content using VCardBody. You can place any content here.
        </v-card-body>
        <v-card-actions>
          <v-button size="sm" variant="solid" color="primary">Primary</v-button>
          <v-button size="sm" variant="outline">Secondary</v-button>
        </v-card-actions>
        <v-card-footer> Footer content with extra details. </v-card-footer>
      </v-card>
    </section>

    <!-- SECTION 4: Media -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Media</h2>
      <v-card variant="solid">
        <v-card-media>
          <div class="h-36 bg-surface-variant rounded-lg"></div>
        </v-card-media>
        <v-card-body>
          Card with media slot. Replace this block with an image or illustration.
        </v-card-body>
      </v-card>
    </section>

    <!-- SECTION 5: Modifiers -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Modifiers</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <v-card hoverable clickable title="Hoverable + Clickable">
          Hover and click effects are enabled.
        </v-card>
        <v-card dense title="Dense"> Dense card with reduced padding. </v-card>
        <v-card shadow title="Shadow"> Adds a stronger shadow without changing variant. </v-card>
        <v-card bordered title="Bordered"> Border around the card container. </v-card>
      </div>
    </section>

    <!-- SECTION 6: Sizes -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Sizes</h2>
      <div class="space-y-3">
        <v-card size="xs" title="Extra Small">XS padding and text size.</v-card>
        <v-card size="sm" title="Small">SM padding and text size.</v-card>
        <v-card size="md" title="Medium">MD padding and text size.</v-card>
        <v-card size="lg" title="Large">LG padding and text size.</v-card>
        <v-card size="xl" title="Extra Large">XL padding and text size.</v-card>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import VCard from '@/components/ui/card/VCard.vue';
import VCardHeader from '@/components/ui/card/VCardHeader.vue';
import VCardBody from '@/components/ui/card/VCardBody.vue';
import VCardFooter from '@/components/ui/card/VCardFooter.vue';
import VCardMedia from '@/components/ui/card/VCardMedia.vue';
import VCardActions from '@/components/ui/card/VCardActions.vue';
import VButton from '@/components/ui/button/VButton.vue';
import VIcon from '@/components/ui/icon/VIcon.vue';
</script>
