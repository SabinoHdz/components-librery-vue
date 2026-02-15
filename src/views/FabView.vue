<template>
  <div class="fab-view p-8 max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">VFab Component</h1>
      <p class="text-lg text-gray-600">
        Floating Action Button con funcionalidad Speed Dial (inspirado en Quasar y DaisyUI).
      </p>
    </div>

    <!-- Basic Example -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Basic FAB</h2>
      <div class="p-6 border rounded-lg bg-gray-50 relative h-96">
        <p class="text-sm text-gray-600 mb-4">
          Un FAB simple en la esquina inferior derecha. Haz click para ver las acciones.
        </p>

        <VFab
          v-model="basicOpen"
          position="bottom-right"
          icon="add"
          color="primary"
          :actions="basicActions"
          :teleport="false"
        />
      </div>
    </section>

    <!-- Positions -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Positions</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="position in positions"
          :key="position"
          class="p-6 border rounded-lg bg-gray-50 relative h-64"
        >
          <p class="text-xs font-semibold text-gray-500 mb-2">{{ position }}</p>
          <VFab
            :position="position"
            icon="star"
            color="warning"
            :actions="socialActions"
            :teleport="false"
          />
        </div>
      </div>
    </section>

    <!-- Directions -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Directions</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="direction in directions"
          :key="direction"
          class="p-6 border rounded-lg bg-gray-50 relative h-80"
        >
          <p class="text-xs font-semibold text-gray-500 mb-2">Direction: {{ direction }}</p>
          <VFab
            position="bottom-right"
            :direction="direction"
            icon="share"
            color="info"
            :actions="socialActions"
            :teleport="false"
          />
        </div>
      </div>
    </section>

    <!-- Colors -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Colors</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="color in colors"
          :key="color"
          class="p-6 border rounded-lg bg-gray-50 relative h-48"
        >
          <p class="text-xs font-semibold text-gray-500 mb-2">{{ color }}</p>
          <VFab
            position="bottom-right"
            icon="palette"
            :color="color"
            :actions="colorActions"
            :teleport="false"
          />
        </div>
      </div>
    </section>

    <!-- Sizes -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Sizes</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="size in sizes"
          :key="size"
          class="p-6 border rounded-lg bg-gray-50 relative h-56"
        >
          <p class="text-xs font-semibold text-gray-500 mb-2">Size: {{ size }}</p>
          <VFab
            position="bottom-right"
            icon="widgets"
            :size="size"
            color="secondary"
            :actions="basicActions"
            :teleport="false"
          />
        </div>
      </div>
    </section>

    <!-- Hover Trigger -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Hover Trigger</h2>
      <div class="p-6 border rounded-lg bg-gray-50 relative h-96">
        <p class="text-sm text-gray-600 mb-4">
          Pasa el mouse sobre el FAB para ver las acciones (no necesitas hacer click).
        </p>
        <VFab
          position="bottom-right"
          icon="menu"
          color="success"
          trigger="hover"
          :actions="menuActions"
          :teleport="false"
        />
      </div>
    </section>

    <!-- Social Networks -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Social Networks</h2>
      <div class="p-6 border rounded-lg bg-gray-50 relative h-96">
        <p class="text-sm text-gray-600 mb-4">Ejemplo práctico: compartir en redes sociales.</p>
        <VFab
          position="bottom-right"
          icon="share"
          color="primary"
          :actions="socialNetworkActions"
          direction="up"
          :teleport="false"
        />
      </div>
    </section>

    <!-- Scroll to Top -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Scroll to Top</h2>
      <div class="p-6 border rounded-lg bg-gray-50 relative h-96">
        <p class="text-sm text-gray-600 mb-4">FAB sin Speed Dial, solo una acción única.</p>
        <VFab
          position="bottom-right"
          icon="arrow_upward"
          color="neutral"
          :actions="[]"
          :teleport="false"
          @click="scrollToTop"
        />
      </div>
    </section>

    <!-- With Backdrop -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">With Backdrop</h2>
      <div class="p-6 border rounded-lg bg-gray-50 relative h-96">
        <p class="text-sm text-gray-600 mb-4">Con backdrop oscuro cuando está abierto.</p>
        <VFab
          position="bottom-right"
          icon="settings"
          color="error"
          :actions="settingsActions"
          show-backdrop
          :teleport="false"
        />
      </div>
    </section>

    <!-- Without Labels -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Without Labels</h2>
      <div class="p-6 border rounded-lg bg-gray-50 relative h-96">
        <p class="text-sm text-gray-600 mb-4">Acciones sin etiquetas (solo iconos).</p>
        <VFab
          position="bottom-right"
          icon="more_vert"
          color="info"
          :actions="basicActions"
          :show-labels="false"
          :teleport="false"
        />
      </div>
    </section>

    <!-- Real World Example (Fixed Position) -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Real World Example</h2>
      <div class="p-6 border rounded-lg bg-blue-50">
        <p class="text-sm text-gray-600 mb-4">
          <strong>Ejemplo real:</strong> Este FAB está fijo en la esquina inferior derecha de la
          <strong>ventana del navegador</strong> (no del contenedor). Usa
          <code>:teleport="true"</code>
          (valor por defecto).
        </p>
        <p class="text-sm text-gray-500">
          Nota: Los ejemplos anteriores usan <code>:teleport="false"</code> solo para fines de
          demostración dentro de contenedores. En producción, normalmente usarías teleport=true para
          que el FAB esté fijo en la pantalla.
        </p>
      </div>
    </section>

    <!-- FAB Real fijo en ventana -->
    <VFab
      position="bottom-right"
      icon="help"
      color="primary"
      :actions="[
        { icon: 'chat', label: 'Chat', color: 'info', onClick: () => console.log('Chat') },
        { icon: 'email', label: 'Email', color: 'secondary', onClick: () => console.log('Email') },
        { icon: 'phone', label: 'Llamar', color: 'success', onClick: () => console.log('Llamar') },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { FabPosition, FabDirection, FabColor, FabSize, FabAction } from '../components/ui/fab';
import { VFab } from '../components/ui/fab';

// State
const basicOpen = ref(false);

// Data
const positions: FabPosition[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
const directions: FabDirection[] = ['up', 'down', 'left', 'right'];
const colors: FabColor[] = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'info',
  'neutral',
];
const sizes: FabSize[] = ['sm', 'md', 'lg'];

// Actions
const basicActions: FabAction[] = [
  {
    icon: 'edit',
    label: 'Edit',
    color: 'primary',
    onClick: () => console.log('Edit clicked'),
  },
  {
    icon: 'delete',
    label: 'Delete',
    color: 'error',
    onClick: () => console.log('Delete clicked'),
  },
  {
    icon: 'share',
    label: 'Share',
    color: 'info',
    onClick: () => console.log('Share clicked'),
  },
];

const socialActions: FabAction[] = [
  {
    icon: 'favorite',
    label: 'Like',
    color: 'error',
    onClick: () => console.log('Like'),
  },
  {
    icon: 'bookmark',
    label: 'Save',
    color: 'warning',
    onClick: () => console.log('Save'),
  },
  {
    icon: 'send',
    label: 'Send',
    color: 'primary',
    onClick: () => console.log('Send'),
  },
];

const colorActions: FabAction[] = [
  {
    icon: 'add',
    label: 'Add',
    onClick: () => console.log('Add'),
  },
  {
    icon: 'remove',
    label: 'Remove',
    onClick: () => console.log('Remove'),
  },
];

const menuActions: FabAction[] = [
  {
    icon: 'home',
    label: 'Home',
    onClick: () => console.log('Home'),
  },
  {
    icon: 'settings',
    label: 'Settings',
    onClick: () => console.log('Settings'),
  },
  {
    icon: 'person',
    label: 'Profile',
    onClick: () => console.log('Profile'),
  },
  {
    icon: 'logout',
    label: 'Logout',
    color: 'error',
    onClick: () => console.log('Logout'),
  },
];

const socialNetworkActions: FabAction[] = [
  {
    icon: 'public',
    label: 'Facebook',
    color: 'info',
    href: 'https://facebook.com',
    target: '_blank',
  },
  {
    icon: 'chat_bubble',
    label: 'Twitter',
    color: 'info',
    href: 'https://twitter.com',
    target: '_blank',
  },
  {
    icon: 'photo_camera',
    label: 'Instagram',
    color: 'error',
    href: 'https://instagram.com',
    target: '_blank',
  },
  {
    icon: 'work',
    label: 'LinkedIn',
    color: 'primary',
    href: 'https://linkedin.com',
    target: '_blank',
  },
];

const settingsActions: FabAction[] = [
  {
    icon: 'notifications',
    label: 'Notifications',
    onClick: () => console.log('Notifications'),
  },
  {
    icon: 'dark_mode',
    label: 'Dark Mode',
    onClick: () => console.log('Dark Mode'),
  },
  {
    icon: 'language',
    label: 'Language',
    onClick: () => console.log('Language'),
  },
];

// Methods
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
