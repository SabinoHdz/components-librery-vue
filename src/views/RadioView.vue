<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-2 text-text-primary">Radio Component</h1>
    <p class="text-text-secondary mb-12">Radio buttons con opciones, colores y tamaños</p>

    <!-- SECCIÓN 1: COLORES -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Colores Semánticos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Primary -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Primary</h3>
          <div class="space-y-3">
            <v-radio v-model="colorSelected" value="primary-1" color="primary" label="Option 1" />
            <v-radio v-model="colorSelected" value="primary-2" color="primary" label="Option 2" />
            <v-radio v-model="colorSelected" value="primary-3" color="primary" label="Option 3" />
          </div>
          <p class="text-xs text-text-secondary mt-4">Selected: {{ colorSelected }}</p>
        </div>

        <!-- Error -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Error</h3>
          <div class="space-y-3">
            <v-radio v-model="colorSelected" value="error-1" color="error" label="Option 1" />
            <v-radio v-model="colorSelected" value="error-2" color="error" label="Option 2" />
            <v-radio v-model="colorSelected" value="error-3" color="error" label="Option 3" />
          </div>
        </div>

        <!-- Success -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Success</h3>
          <div class="space-y-3">
            <v-radio v-model="colorSelected" value="success-1" color="success" label="Option 1" />
            <v-radio v-model="colorSelected" value="success-2" color="success" label="Option 2" />
            <v-radio v-model="colorSelected" value="success-3" color="success" label="Option 3" />
          </div>
        </div>

        <!-- Warning -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Warning</h3>
          <div class="space-y-3">
            <v-radio v-model="colorSelected" value="warning-1" color="warning" label="Option 1" />
            <v-radio v-model="colorSelected" value="warning-2" color="warning" label="Option 2" />
            <v-radio v-model="colorSelected" value="warning-3" color="warning" label="Option 3" />
          </div>
        </div>

        <!-- Secondary -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Secondary</h3>
          <div class="space-y-3">
            <v-radio
              v-model="colorSelected"
              value="secondary-1"
              color="secondary"
              label="Option 1"
            />
            <v-radio
              v-model="colorSelected"
              value="secondary-2"
              color="secondary"
              label="Option 2"
            />
            <v-radio
              v-model="colorSelected"
              value="secondary-3"
              color="secondary"
              label="Option 3"
            />
          </div>
        </div>

        <!-- Info -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Info</h3>
          <div class="space-y-3">
            <v-radio v-model="colorSelected" value="info-1" color="info" label="Option 1" />
            <v-radio v-model="colorSelected" value="info-2" color="info" label="Option 2" />
            <v-radio v-model="colorSelected" value="info-3" color="info" label="Option 3" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 2: TAMAÑOS -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Tamaños</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Extra Small -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Extra Small (xs)</h3>
          <div class="space-y-2">
            <v-radio v-model="sizeSelected" value="xs-1" size="xs" label="Option 1" />
            <v-radio v-model="sizeSelected" value="xs-2" size="xs" label="Option 2" />
            <v-radio v-model="sizeSelected" value="xs-3" size="xs" label="Option 3" />
          </div>
        </div>

        <!-- Small -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Small (sm)</h3>
          <div class="space-y-2.5">
            <v-radio v-model="sizeSelected" value="sm-1" size="sm" label="Option 1" />
            <v-radio v-model="sizeSelected" value="sm-2" size="sm" label="Option 2" />
            <v-radio v-model="sizeSelected" value="sm-3" size="sm" label="Option 3" />
          </div>
        </div>

        <!-- Medium -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Medium (md) - Default</h3>
          <div class="space-y-3">
            <v-radio v-model="sizeSelected" value="md-1" size="md" label="Option 1" />
            <v-radio v-model="sizeSelected" value="md-2" size="md" label="Option 2" />
            <v-radio v-model="sizeSelected" value="md-3" size="md" label="Option 3" />
          </div>
        </div>

        <!-- Large -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Large (lg)</h3>
          <div class="space-y-3.5">
            <v-radio v-model="sizeSelected" value="lg-1" size="lg" label="Option 1" />
            <v-radio v-model="sizeSelected" value="lg-2" size="lg" label="Option 2" />
            <v-radio v-model="sizeSelected" value="lg-3" size="lg" label="Option 3" />
          </div>
        </div>

        <!-- Extra Large (colspan 2 en md) -->
        <div class="p-6 bg-surface rounded-lg border border-border md:col-span-2">
          <h3 class="font-semibold mb-3 text-text-primary">Extra Large (xl)</h3>
          <div class="space-y-4">
            <v-radio v-model="sizeSelected" value="xl-1" size="xl" label="Option 1" />
            <v-radio v-model="sizeSelected" value="xl-2" size="xl" label="Option 2" />
            <v-radio v-model="sizeSelected" value="xl-3" size="xl" label="Option 3" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 3: VARIANTES -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Variantes Visuales</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Solid -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Solid</h3>
          <div class="space-y-3">
            <v-radio
              v-model="variantSelected"
              value="solid-1"
              variant="solid"
              color="primary"
              label="Option 1"
            />
            <v-radio
              v-model="variantSelected"
              value="solid-2"
              variant="solid"
              color="primary"
              label="Option 2"
            />
            <v-radio
              v-model="variantSelected"
              value="solid-3"
              variant="solid"
              color="primary"
              label="Option 3"
            />
          </div>
        </div>

        <!-- Outline -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Outline</h3>
          <div class="space-y-3">
            <v-radio
              v-model="variantSelected"
              value="outline-1"
              variant="outline"
              color="primary"
              label="Option 1"
            />
            <v-radio
              v-model="variantSelected"
              value="outline-2"
              variant="outline"
              color="primary"
              label="Option 2"
            />
            <v-radio
              v-model="variantSelected"
              value="outline-3"
              variant="outline"
              color="primary"
              label="Option 3"
            />
          </div>
        </div>

        <!-- Soft -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Soft</h3>
          <div class="space-y-3">
            <v-radio
              v-model="variantSelected"
              value="soft-1"
              variant="soft"
              color="primary"
              label="Option 1"
            />
            <v-radio
              v-model="variantSelected"
              value="soft-2"
              variant="soft"
              color="primary"
              label="Option 2"
            />
            <v-radio
              v-model="variantSelected"
              value="soft-3"
              variant="soft"
              color="primary"
              label="Option 3"
            />
          </div>
        </div>

        <!-- Borderless -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Borderless</h3>
          <div class="space-y-3">
            <v-radio
              v-model="variantSelected"
              value="borderless-1"
              variant="borderless"
              color="primary"
              label="Option 1"
            />
            <v-radio
              v-model="variantSelected"
              value="borderless-2"
              variant="borderless"
              color="primary"
              label="Option 2"
            />
            <v-radio
              v-model="variantSelected"
              value="borderless-3"
              variant="borderless"
              color="primary"
              label="Option 3"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 4: ESTADOS -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Estados</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Disabled -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Disabled</h3>
          <div class="space-y-3">
            <v-radio
              v-model="stateSelected"
              value="disabled-1"
              color="primary"
              label="Option 1"
              disabled
            />
            <v-radio
              v-model="stateSelected"
              value="disabled-2"
              color="primary"
              label="Option 2 (Disabled)"
              disabled
            />
            <v-radio v-model="stateSelected" value="disabled-3" color="primary" label="Option 3" />
          </div>
        </div>

        <!-- Error State -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Error State</h3>
          <div class="space-y-3">
            <v-radio
              v-model="stateSelected"
              value="error-state-1"
              color="primary"
              label="Option 1"
            />
            <v-radio
              v-model="stateSelected"
              value="error-state-2"
              color="primary"
              label="Option 2"
              :error="true"
            />
            <v-radio
              v-model="stateSelected"
              value="error-state-3"
              color="primary"
              label="Option 3"
              error
              error-message="This field is required"
            />
          </div>
        </div>

        <!-- Readonly -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Readonly</h3>
          <div class="space-y-3">
            <v-radio
              v-model="stateSelected"
              value="readonly-1"
              color="primary"
              label="Option 1 (Readonly)"
              readonly
            />
            <v-radio v-model="stateSelected" value="readonly-2" color="primary" label="Option 2" />
            <v-radio v-model="stateSelected" value="readonly-3" color="primary" label="Option 3" />
          </div>
        </div>

        <!-- Readonly & Disabled -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Combinaciones</h3>
          <div class="space-y-3">
            <v-radio
              v-model="stateSelected"
              value="combo-1"
              color="success"
              label="Success - Seleccionado"
              size="lg"
            />
            <v-radio
              v-model="stateSelected"
              value="combo-2"
              color="warning"
              label="Warning - Default"
              size="lg"
            />
            <v-radio
              v-model="stateSelected"
              value="combo-3"
              color="error"
              label="Error - Disabled"
              size="lg"
              disabled
            />
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 5: HINTS Y VALIDACIÓN -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Hints y Validación</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Con Hint -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Con Hint</h3>
          <div class="space-y-3">
            <v-radio
              v-model="hintSelected"
              value="hint-1"
              color="primary"
              label="Option 1"
              hint="Este es un hint descriptivo"
            />
            <v-radio
              v-model="hintSelected"
              value="hint-2"
              color="primary"
              label="Option 2"
              hint="Información adicional aquí"
            />
          </div>
        </div>

        <!-- Con Error Message -->
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Con Error Message</h3>
          <div class="space-y-3">
            <v-radio v-model="hintSelected" value="error-msg-1" color="primary" label="Option 1" />
            <v-radio
              v-model="hintSelected"
              value="error-msg-2"
              color="error"
              label="Option 2 - Error"
              error
              error-message="Debes seleccionar esta opción"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 6: LABORATORIO -->
    <section>
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Laboratorio (Sandbox)</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Controls -->
        <div class="lg:col-span-1 p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-4 text-text-primary">Controles</h3>
          <div class="space-y-4">
            <div>
              <label for="lab-color" class="block text-sm font-medium mb-2">Color</label>
              <select
                id="lab-color"
                v-model="lab.color"
                class="w-full p-2 border border-border rounded-md bg-background text-text-primary"
              >
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
                <option value="info">Info</option>
                <option value="neutral">Neutral</option>
              </select>
            </div>

            <div>
              <label for="lab-size" class="block text-sm font-medium mb-2">Tamaño</label>
              <select
                id="lab-size"
                v-model="lab.size"
                class="w-full p-2 border border-border rounded-md bg-background text-text-primary"
              >
                <option value="xs">Extra Small</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">Extra Large</option>
              </select>
            </div>

            <div>
              <label for="lab-variant" class="block text-sm font-medium mb-2">Variante</label>
              <select
                id="lab-variant"
                v-model="lab.variant"
                class="w-full p-2 border border-border rounded-md bg-background text-text-primary"
              >
                <option value="solid">Solid</option>
                <option value="outline">Outline</option>
                <option value="soft">Soft</option>
                <option value="borderless">Borderless</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="flex items-center gap-2">
                <input v-model="lab.disabled" type="checkbox" class="w-4 h-4" />
                <span class="text-sm">Disabled</span>
              </label>
              <label class="flex items-center gap-2">
                <input v-model="lab.readonly" type="checkbox" class="w-4 h-4" />
                <span class="text-sm">Readonly</span>
              </label>
              <label class="flex items-center gap-2">
                <input v-model="lab.error" type="checkbox" class="w-4 h-4" />
                <span class="text-sm">Error</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Preview -->
        <div class="lg:col-span-2 p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-4 text-text-primary">Preview</h3>
          <div class="space-y-4">
            <v-radio
              v-model="labSelected"
              value="lab-1"
              :color="lab.color"
              :size="lab.size"
              :variant="lab.variant"
              :disabled="lab.disabled"
              :readonly="lab.readonly"
              :error="lab.error"
              label="Option 1"
              error-message="Error message here"
            />
            <v-radio
              v-model="labSelected"
              value="lab-2"
              :color="lab.color"
              :size="lab.size"
              :variant="lab.variant"
              :disabled="lab.disabled"
              :readonly="lab.readonly"
              :error="lab.error"
              label="Option 2 (Selected)"
            />
            <v-radio
              v-model="labSelected"
              value="lab-3"
              :color="lab.color"
              :size="lab.size"
              :variant="lab.variant"
              :disabled="lab.disabled"
              :readonly="lab.readonly"
              :error="lab.error"
              label="Option 3"
            />

            <div class="mt-6 p-4 bg-background rounded border border-border">
              <p class="text-sm text-text-secondary">
                <span class="font-semibold">Selected:</span> {{ labSelected || '(none)' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { RadioColor, RadioSize, RadioVariant } from '../components/ui/radio/radio';
import VRadio from '../components/ui/radio/VRadio.vue';

// Estados para diferentes secciones
const colorSelected = ref('primary-1');
const sizeSelected = ref('md-1');
const variantSelected = ref('solid-1');
const stateSelected = ref('disabled-1');
const hintSelected = ref('hint-1');
const labSelected = ref('lab-2');

// Laboratorio con tipos correctos
const lab = reactive({
  color: 'primary' as RadioColor,
  size: 'md' as RadioSize,
  variant: 'solid' as RadioVariant,
  disabled: false,
  readonly: false,
  error: false,
});
</script>
