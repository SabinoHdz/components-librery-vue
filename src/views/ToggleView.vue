<template>
  <div class="p-8 max-w-6xl mx-auto">
    <h1 class="text-4xl font-bold mb-2">VToggle Component</h1>
    <p class="text-gray-600 mb-8">
      Beautiful and customizable toggle switch component (Quasar Style).
    </p>

    <!-- Basic Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Basic</h2>
      <p class="text-sm text-gray-600 mb-4">
        Use the <code class="px-1.5 py-0.5 bg-gray-100 rounded text-blue-600">color</code> prop to
        control the toggle's color.
      </p>
      <div class="p-6 border rounded-lg">
        <div class="flex gap-4 items-center">
          <VToggle v-model="basicToggle1" color="primary" />
          <VToggle v-model="basicToggle2" color="success" />
          <VToggle v-model="basicToggle3" color="warning" />
          <VToggle v-model="basicToggle4" color="error" />
        </div>
      </div>
    </section>

    <!-- Colors Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Colors</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="color in colors" :key="color" class="p-4 border rounded-lg">
          <p class="text-xs font-semibold text-gray-500 mb-4">{{ color }}</p>
          <VToggle
            v-model="colorToggles[color]"
            :color="color"
            label="Toggle"
            @update:model-value="($event) => logEvent(`Color ${color} changed to ${$event}`)"
          />
        </div>
      </div>
    </section>

    <!-- Sizes Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Sizes</h2>
      <div class="p-6 border rounded-lg">
        <div class="flex items-center gap-6">
          <div class="flex flex-col items-center gap-2">
            <VToggle v-model="sizeToggles.sm" size="sm" />
            <span class="text-xs text-gray-500">Small</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <VToggle v-model="sizeToggles.md" size="md" />
            <span class="text-xs text-gray-500">Medium</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <VToggle v-model="sizeToggles.lg" size="lg" />
            <span class="text-xs text-gray-500">Large</span>
          </div>
        </div>
      </div>
    </section>

    <!-- With Labels Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">With Labels</h2>
      <div class="p-6 border rounded-lg space-y-4">
        <VToggle v-model="labelLeftToggle" label-position="left" label="Battery Saver" />
        <VToggle v-model="labelRightToggle" label-position="right" label="Notifications" />
      </div>
    </section>

    <!-- With Icons Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">With Icons</h2>
      <div class="p-6 border rounded-lg space-y-4">
        <div class="flex items-center gap-3">
          <VToggle v-model="iconToggle1" on-icon="favorite" color="error" />
          <span class="text-sm text-gray-600">Same icon for each state</span>
        </div>
        <div class="flex items-center gap-3">
          <VToggle v-model="iconToggle2" on-icon="done" off-icon="close" color="error" />
          <span class="text-sm text-gray-600">Different icon for each state</span>
        </div>
      </div>
    </section>

    <!-- States Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">States</h2>
      <div class="space-y-6">
        <div class="p-4 border rounded-lg">
          <p class="text-xs font-semibold text-gray-500 mb-4">Disabled</p>
          <VToggle v-model="disabledToggle" disabled label="Disabled toggle" />
        </div>
        <div class="p-4 border rounded-lg">
          <p class="text-xs font-semibold text-gray-500 mb-4">Readonly</p>
          <VToggle v-model="readonlyToggle" readonly label="Readonly toggle" />
        </div>
        <div class="p-4 border rounded-lg">
          <p class="text-xs font-semibold text-gray-500 mb-4">Error</p>
          <VToggle
            v-model="errorToggle"
            error
            error-message="This is an error message"
            label="Error toggle"
          />
        </div>
        <div class="p-4 border rounded-lg">
          <p class="text-xs font-semibold text-gray-500 mb-4">Required</p>
          <VToggle v-model="requiredToggle" required label="Required toggle" />
        </div>
      </div>
    </section>

    <!-- Group Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Toggle Group</h2>
      <div class="space-y-6">
        <div class="p-4 border rounded-lg">
          <p class="text-xs font-semibold text-gray-500 mb-4">Horizontal</p>
          <VToggleGroup
            v-model="selectedNotification"
            :options="notificationOptions"
            label="Notifications"
            direction="horizontal"
          />
          <p class="text-sm text-gray-500 mt-3">Selected: {{ selectedNotification }}</p>
        </div>
        <div class="p-4 border rounded-lg">
          <p class="text-xs font-semibold text-gray-500 mb-4">Vertical</p>
          <VToggleGroup
            v-model="selectedTheme"
            :options="themeOptions"
            label="Theme"
            direction="vertical"
            size="lg"
            color="success"
          />
          <p class="text-sm text-gray-500 mt-3">Selected: {{ selectedTheme }}</p>
        </div>
      </div>
    </section>

    <!-- Sandbox Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Sandbox</h2>
      <div class="p-4 border rounded-lg">
        <VToggle
          v-model="sandboxToggle"
          :color="sandboxColor"
          :size="sandboxSize"
          :variant="sandboxVariant"
          :label-position="sandboxLabelPosition"
          :label="sandboxLabel"
          :error="sandboxError"
          :disabled="sandboxDisabled"
          :required="sandboxRequired"
          @update:model-value="($event) => logEvent(`Sandbox toggled to ${$event}`)"
        />

        <div class="mt-6 space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">Color</label>
            <select v-model="sandboxColor" class="border rounded px-2 py-1 w-full">
              <option v-for="c in colors" :key="c" :value="c">{{ c }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Size</label>
            <select v-model="sandboxSize" class="border rounded px-2 py-1 w-full">
              <option v-for="s in sizes" :key="s" :value="s">{{ s }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Variant</label>
            <select v-model="sandboxVariant" class="border rounded px-2 py-1 w-full">
              <option v-for="v in variants" :key="v" :value="v">{{ v }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Label Position</label>
            <select v-model="sandboxLabelPosition" class="border rounded px-2 py-1 w-full">
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
          <div class="flex items-center gap-4">
            <label class="flex items-center gap-2">
              <input v-model="sandboxDisabled" type="checkbox" class="w-4 h-4" />
              <span class="text-sm">Disabled</span>
            </label>
            <label class="flex items-center gap-2">
              <input v-model="sandboxError" type="checkbox" class="w-4 h-4" />
              <span class="text-sm">Error</span>
            </label>
            <label class="flex items-center gap-2">
              <input v-model="sandboxRequired" type="checkbox" class="w-4 h-4" />
              <span class="text-sm">Required</span>
            </label>
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Label</label>
            <input v-model="sandboxLabel" type="text" class="border rounded px-2 py-1 w-full" />
          </div>
        </div>
      </div>
    </section>

    <!-- Events Log -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Events Log</h2>
      <div class="bg-gray-100 rounded-lg p-4 max-h-48 overflow-y-auto">
        <div v-if="eventLog.length === 0" class="text-gray-500 text-sm">No events yet</div>
        <div
          v-for="(event, index) in eventLog"
          :key="index"
          class="text-sm text-gray-700 border-b pb-2 mb-2 last:border-b-0"
        >
          {{ event }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  VToggle,
  VToggleGroup,
  type ToggleColor,
  type ToggleSize,
  type ToggleVariant,
  type ToggleLabelPosition,
} from '../components/ui/toggle';

// Basic toggles
const basicToggle1 = ref(true);
const basicToggle2 = ref(true);
const basicToggle3 = ref(false);
const basicToggle4 = ref(false);

// Colors
const colors: ToggleColor[] = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'info',
  'neutral',
];
const colorToggles = ref<Record<ToggleColor, boolean>>({
  primary: true,
  secondary: false,
  success: true,
  warning: false,
  error: true,
  info: false,
  neutral: true,
});

// Sizes
const sizes: ToggleSize[] = ['sm', 'md', 'lg'];
const sizeToggles = ref<Record<ToggleSize, boolean>>({
  sm: false,
  md: true,
  lg: false,
});

// Variants (for sandbox only)
const variants: ToggleVariant[] = ['solid', 'soft', 'outline'];

// Label Position
const labelLeftToggle = ref(true);
const labelRightToggle = ref(false);

// Icons
const iconToggle1 = ref(true);
const iconToggle2 = ref(false);

// States
const disabledToggle = ref(true);
const readonlyToggle = ref(true);
const errorToggle = ref(false);
const requiredToggle = ref(false);

// Groups
const selectedNotification = ref('on');
const notificationOptions = [
  { label: 'Off', value: 'off' },
  { label: 'On', value: 'on' },
];

const selectedTheme = ref('light');
const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

// Sandbox
const sandboxToggle = ref(false);
const sandboxColor = ref<ToggleColor>('primary');
const sandboxSize = ref<ToggleSize>('md');
const sandboxVariant = ref<ToggleVariant>('solid');
const sandboxLabelPosition = ref<ToggleLabelPosition>('right');
const sandboxLabel = ref('Sandbox Toggle');
const sandboxDisabled = ref(false);
const sandboxError = ref(false);
const sandboxRequired = ref(false);

// Events
const eventLog = ref<string[]>([]);

const logEvent = (message: string) => {
  const timestamp = new Date().toLocaleTimeString();
  eventLog.value.unshift(`[${timestamp}] ${message}`);
  if (eventLog.value.length > 20) {
    eventLog.value.pop();
  }
};
</script>
