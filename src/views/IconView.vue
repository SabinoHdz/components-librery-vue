<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4 text-text-primary">Icon Component</h1>
      <p class="text-lg text-text-secondary">
        Iconos de Material Symbols con múltiples familias, tamaños y colores. Sistema flexible para
        interfaces modernas.
      </p>
    </div>

    <!-- Familias -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Familias de Iconos</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Outlined (Default)</h3>
          <p class="text-sm text-text-secondary mb-4">Bordes finos y elegantes</p>
          <div class="flex flex-wrap gap-4 items-center text-3xl">
            <VIcon name="home" family="outlined" />
            <VIcon name="settings" family="outlined" />
            <VIcon name="favorite" family="outlined" />
            <VIcon name="visibility" family="outlined" />
            <VIcon name="search" family="outlined" />
          </div>
        </div>

        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Rounded</h3>
          <p class="text-sm text-text-secondary mb-4">Esquinas redondeadas y suaves</p>
          <div class="flex flex-wrap gap-4 items-center text-3xl">
            <VIcon name="home" family="rounded" />
            <VIcon name="settings" family="rounded" />
            <VIcon name="favorite" family="rounded" />
            <VIcon name="visibility" family="rounded" />
            <VIcon name="search" family="rounded" />
          </div>
        </div>

        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Sharp</h3>
          <p class="text-sm text-text-secondary mb-4">Esquinas angulares y geométricas</p>
          <div class="flex flex-wrap gap-4 items-center text-3xl">
            <VIcon name="home" family="sharp" />
            <VIcon name="settings" family="sharp" />
            <VIcon name="favorite" family="sharp" />
            <VIcon name="visibility" family="sharp" />
            <VIcon name="search" family="sharp" />
          </div>
        </div>
      </div>
    </section>

    <!-- Tamaños -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Tamaños</h2>
      <div class="p-6 rounded-lg bg-surface border border-border">
        <div class="flex flex-wrap gap-6 items-end">
          <div class="text-center">
            <VIcon name="star" size="xs" color="primary" />
            <p class="text-xs text-text-secondary mt-2">XS (16px)</p>
          </div>
          <div class="text-center">
            <VIcon name="star" size="sm" color="primary" />
            <p class="text-xs text-text-secondary mt-2">SM (20px)</p>
          </div>
          <div class="text-center">
            <VIcon name="star" size="md" color="primary" />
            <p class="text-xs text-text-secondary mt-2">MD (24px)</p>
          </div>
          <div class="text-center">
            <VIcon name="star" size="lg" color="primary" />
            <p class="text-xs text-text-secondary mt-2">LG (32px)</p>
          </div>
          <div class="text-center">
            <VIcon name="star" size="xl" color="primary" />
            <p class="text-xs text-text-secondary mt-2">XL (40px)</p>
          </div>
          <div class="text-center">
            <VIcon name="star" size="2xl" color="primary" />
            <p class="text-xs text-text-secondary mt-2">2XL (48px)</p>
          </div>
          <div class="text-center">
            <VIcon name="star" size="3xl" color="primary" />
            <p class="text-xs text-text-secondary mt-2">3XL (64px)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Colores -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Colores</h2>
      <div class="p-6 rounded-lg bg-surface border border-border">
        <div class="flex flex-wrap gap-6 items-center text-3xl">
          <div class="text-center">
            <VIcon name="palette" color="primary" />
            <p class="text-xs text-text-secondary mt-2">Primary</p>
          </div>
          <div class="text-center">
            <VIcon name="palette" color="secondary" />
            <p class="text-xs text-text-secondary mt-2">Secondary</p>
          </div>
          <div class="text-center">
            <VIcon name="palette" color="accent" />
            <p class="text-xs text-text-secondary mt-2">Accent</p>
          </div>
          <div class="text-center">
            <VIcon name="check_circle" color="success" />
            <p class="text-xs text-text-secondary mt-2">Success</p>
          </div>
          <div class="text-center">
            <VIcon name="warning" color="warning" />
            <p class="text-xs text-text-secondary mt-2">Warning</p>
          </div>
          <div class="text-center">
            <VIcon name="error" color="error" />
            <p class="text-xs text-text-secondary mt-2">Error</p>
          </div>
          <div class="text-center">
            <VIcon name="info" color="info" />
            <p class="text-xs text-text-secondary mt-2">Info</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Filled vs Outline -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Filled vs Outline</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Outline (Default)</h3>
          <div class="flex flex-wrap gap-4 items-center text-3xl">
            <VIcon name="home" :filled="false" />
            <VIcon name="favorite" :filled="false" color="error" />
            <VIcon name="star" :filled="false" color="warning" />
            <VIcon name="notifications" :filled="false" color="info" />
            <VIcon name="check_circle" :filled="false" color="success" />
          </div>
        </div>

        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Filled</h3>
          <div class="flex flex-wrap gap-4 items-center text-3xl">
            <VIcon name="home" :filled="true" />
            <VIcon name="favorite" :filled="true" color="error" />
            <VIcon name="star" :filled="true" color="warning" />
            <VIcon name="notifications" :filled="true" color="info" />
            <VIcon name="check_circle" :filled="true" color="success" />
          </div>
        </div>
      </div>
    </section>

    <!-- Weight (Peso) -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Peso de Fuente</h2>
      <div class="p-6 rounded-lg bg-surface border border-border">
        <div class="flex flex-wrap gap-6 items-center text-3xl">
          <div class="text-center">
            <VIcon name="settings" :weight="100" />
            <p class="text-xs text-text-secondary mt-2">100 (Thin)</p>
          </div>
          <div class="text-center">
            <VIcon name="settings" :weight="300" />
            <p class="text-xs text-text-secondary mt-2">300 (Light)</p>
          </div>
          <div class="text-center">
            <VIcon name="settings" :weight="400" />
            <p class="text-xs text-text-secondary mt-2">400 (Regular)</p>
          </div>
          <div class="text-center">
            <VIcon name="settings" :weight="600" />
            <p class="text-xs text-text-secondary mt-2">600 (Semi)</p>
          </div>
          <div class="text-center">
            <VIcon name="settings" :weight="700" />
            <p class="text-xs text-text-secondary mt-2">700 (Bold)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Estados Interactivos -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Estados</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Normal</h3>
          <div class="flex flex-wrap gap-4 items-center text-3xl">
            <VIcon name="home" />
            <VIcon name="favorite" color="error" />
            <VIcon name="settings" color="primary" />
          </div>
        </div>

        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Interactive (Hover me)</h3>
          <div class="flex flex-wrap gap-4 items-center text-3xl">
            <VIcon name="home" interactive />
            <VIcon name="favorite" color="error" interactive />
            <VIcon name="settings" color="primary" interactive />
          </div>
        </div>

        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Disabled</h3>
          <div class="flex flex-wrap gap-4 items-center text-3xl">
            <VIcon name="home" disabled />
            <VIcon name="favorite" color="error" disabled />
            <VIcon name="settings" color="primary" disabled />
          </div>
        </div>
      </div>
    </section>

    <!-- Casos de Uso -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Casos de Uso</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Botones con Iconos -->
        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Botones con Iconos</h3>
          <div class="space-y-3">
            <button
              class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition"
            >
              <VIcon name="add" size="sm" />
              <span>Crear nuevo</span>
            </button>
            <button
              class="flex items-center gap-2 px-4 py-2 bg-success text-white rounded-lg hover:opacity-90 transition"
            >
              <VIcon name="save" size="sm" />
              <span>Guardar cambios</span>
            </button>
            <button
              class="flex items-center gap-2 px-4 py-2 bg-error text-white rounded-lg hover:opacity-90 transition"
            >
              <VIcon name="delete" size="sm" />
              <span>Eliminar</span>
            </button>
          </div>
        </div>

        <!-- Iconos de Estado -->
        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Indicadores de Estado</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <VIcon name="check_circle" color="success" :filled="true" />
              <span class="text-text-primary">Operación exitosa</span>
            </div>
            <div class="flex items-center gap-3">
              <VIcon name="warning" color="warning" :filled="true" />
              <span class="text-text-primary">Precaución requerida</span>
            </div>
            <div class="flex items-center gap-3">
              <VIcon name="error" color="error" :filled="true" />
              <span class="text-text-primary">Ha ocurrido un error</span>
            </div>
            <div class="flex items-center gap-3">
              <VIcon name="info" color="info" :filled="true" />
              <span class="text-text-primary">Información adicional</span>
            </div>
          </div>
        </div>

        <!-- Navegación -->
        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Navegación</h3>
          <div class="space-y-2">
            <div
              class="flex items-center gap-3 p-2 rounded hover:bg-surface-variant cursor-pointer transition"
            >
              <VIcon name="home" color="primary" />
              <span class="text-text-primary">Inicio</span>
            </div>
            <div
              class="flex items-center gap-3 p-2 rounded hover:bg-surface-variant cursor-pointer transition"
            >
              <VIcon name="folder" color="primary" />
              <span class="text-text-primary">Archivos</span>
            </div>
            <div
              class="flex items-center gap-3 p-2 rounded hover:bg-surface-variant cursor-pointer transition"
            >
              <VIcon name="settings" color="primary" />
              <span class="text-text-primary">Configuración</span>
            </div>
            <div
              class="flex items-center gap-3 p-2 rounded hover:bg-surface-variant cursor-pointer transition"
            >
              <VIcon name="person" color="primary" />
              <span class="text-text-primary">Perfil</span>
            </div>
          </div>
        </div>

        <!-- Input Fields -->
        <div class="p-6 rounded-lg bg-surface border border-border">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Campos de Entrada</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-2 px-3 py-2 border border-border rounded-lg">
              <VIcon name="search" color="primary" size="sm" />
              <input
                type="text"
                placeholder="Buscar..."
                class="flex-1 outline-none bg-transparent text-text-primary"
              />
            </div>
            <div class="flex items-center gap-2 px-3 py-2 border border-border rounded-lg">
              <VIcon name="mail" color="primary" size="sm" />
              <input
                type="email"
                placeholder="Email"
                class="flex-1 outline-none bg-transparent text-text-primary"
              />
            </div>
            <div class="flex items-center gap-2 px-3 py-2 border border-border rounded-lg">
              <VIcon name="lock" color="primary" size="sm" />
              <input
                type="password"
                placeholder="Contraseña"
                class="flex-1 outline-none bg-transparent text-text-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Iconos Comunes de Referencia -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-text-primary">Iconos Comunes</h2>
      <div class="p-6 rounded-lg bg-surface border border-border">
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          <div v-for="icon in commonIconsList" :key="icon" class="text-center group cursor-pointer">
            <div
              class="flex items-center justify-center h-12 rounded hover:bg-surface-variant transition"
            >
              <VIcon :name="icon" size="lg" class="group-hover:scale-110 transition-transform" />
            </div>
            <p class="text-xs text-text-secondary mt-1 truncate" :title="icon">{{ icon }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import VIcon from '@/components/ui/icon/VIcon.vue';

// Lista de iconos comunes para mostrar
const commonIconsList = [
  'home',
  'star',
  'favorite',
  'settings',
  'search',
  'menu',
  'close',
  'add',
  'remove',
  'edit',
  'delete',
  'save',
  'done',
  'check',
  'visibility',
  'lock',
  'info',
  'warning',
  'error',
  'check_circle',
  'notifications',
  'mail',
  'send',
  'phone',
  'message',
  'person',
  'group',
  'folder',
  'description',
  'cloud',
  'download',
  'upload',
  'share',
  'schedule',
  'calendar_today',
  'arrow_back',
  'arrow_forward',
  'expand_more',
  'expand_less',
  'chevron_left',
  'chevron_right',
];
</script>
