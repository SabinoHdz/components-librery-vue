<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-2 text-text-primary">Checkbox Component</h1>
    <p class="text-text-secondary mb-12">Checkboxes con colores, variantes, tamanos y grupos</p>

    <!-- SECCION 1: COLORES -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Colores Semanticos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Primary</h3>
          <div class="space-y-3">
            <v-checkbox-group v-model="primarySelected" :options="primaryOptions" color="primary" />
          </div>
          <p class="text-xs text-text-secondary mt-4">Selected: {{ primarySelected.join(', ') }}</p>
        </div>

        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Error</h3>
          <div class="space-y-3">
            <v-checkbox-group v-model="errorSelected" :options="errorOptions" color="error" />
          </div>
        </div>

        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Success</h3>
          <div class="space-y-3">
            <v-checkbox-group v-model="successSelected" :options="successOptions" color="success" />
          </div>
        </div>

        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Warning</h3>
          <div class="space-y-3">
            <v-checkbox-group v-model="warningSelected" :options="warningOptions" color="warning" />
          </div>
        </div>

        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Secondary</h3>
          <div class="space-y-3">
            <v-checkbox-group
              v-model="secondarySelected"
              :options="secondaryOptions"
              color="secondary"
            />
          </div>
        </div>

        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Info</h3>
          <div class="space-y-3">
            <v-checkbox-group v-model="infoSelected" :options="infoOptions" color="info" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECCION 2: TAMANOS -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Tamanos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Extra Small (xs)</h3>
          <div class="space-y-2">
            <v-checkbox v-model="sizeSelected" true-value="xs-1" size="xs" label="Option 1" />
            <v-checkbox v-model="sizeSelected" true-value="xs-2" size="xs" label="Option 2" />
          </div>
        </div>

        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Small (sm)</h3>
          <div class="space-y-2.5">
            <v-checkbox v-model="sizeSelected" true-value="sm-1" size="sm" label="Option 1" />
            <v-checkbox v-model="sizeSelected" true-value="sm-2" size="sm" label="Option 2" />
          </div>
        </div>

        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Medium (md)</h3>
          <div class="space-y-3">
            <v-checkbox v-model="sizeSelected" true-value="md-1" size="md" label="Option 1" />
            <v-checkbox v-model="sizeSelected" true-value="md-2" size="md" label="Option 2" />
          </div>
        </div>

        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Large (lg)</h3>
          <div class="space-y-3">
            <v-checkbox v-model="sizeSelected" true-value="lg-1" size="lg" label="Option 1" />
            <v-checkbox v-model="sizeSelected" true-value="lg-2" size="lg" label="Option 2" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECCION 3: VARIANTES -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Variantes</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Solid</h3>
          <div class="space-y-3">
            <v-checkbox v-model="variantSelected" true-value="solid-1" label="Solid" />
            <v-checkbox v-model="variantSelected" true-value="solid-2" label="Solid 2" />
          </div>
        </div>

        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Outline</h3>
          <div class="space-y-3">
            <v-checkbox
              v-model="variantSelected"
              true-value="outline-1"
              variant="outline"
              label="Outline"
            />
            <v-checkbox
              v-model="variantSelected"
              true-value="outline-2"
              variant="outline"
              label="Outline 2"
            />
          </div>
        </div>

        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Soft</h3>
          <div class="space-y-3">
            <v-checkbox v-model="variantSelected" true-value="soft-1" variant="soft" label="Soft" />
            <v-checkbox
              v-model="variantSelected"
              true-value="soft-2"
              variant="soft"
              label="Soft 2"
            />
          </div>
        </div>

        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Borderless</h3>
          <div class="space-y-3">
            <v-checkbox
              v-model="variantSelected"
              true-value="borderless-1"
              variant="borderless"
              label="Borderless"
            />
            <v-checkbox
              v-model="variantSelected"
              true-value="borderless-2"
              variant="borderless"
              label="Borderless 2"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- SECCION 4: ESTADOS -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Estados</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Disabled</h3>
          <div class="space-y-3">
            <v-checkbox disabled label="Disabled" />
            <v-checkbox disabled :model-value="true" label="Checked" />
          </div>
        </div>

        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Readonly</h3>
          <div class="space-y-3">
            <v-checkbox readonly :model-value="true" label="Readonly" />
            <v-checkbox readonly label="Readonly empty" />
          </div>
        </div>

        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Error + Hint</h3>
          <div class="space-y-3">
            <v-checkbox
              v-model="stateSelected"
              true-value="error-1"
              error
              error-message="Necesitas aceptar"
              hint="Acepta los terminos"
              label="Acepto terminos"
            />
          </div>
        </div>

        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Required</h3>
          <div class="space-y-3">
            <v-checkbox
              v-model="stateSelected"
              true-value="required-1"
              required
              label="Obligatorio"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- SECCION 5: GROUP -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Checkbox Group</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Vertical</h3>
          <v-checkbox-group
            v-model="groupSelected"
            :options="groupOptions"
            label="Selecciona tus intereses"
            hint="Puedes elegir varios"
          />
          <p class="text-xs text-text-secondary mt-4">Selected: {{ groupSelected }}</p>
        </div>

        <div class="p-6 bg-surface rounded-lg border border-border">
          <h3 class="font-semibold mb-3 text-text-primary">Horizontal + Required</h3>
          <v-checkbox-group
            v-model="groupSelected"
            :options="groupOptions"
            direction="horizontal"
            required
            label="Selecciona al menos uno"
          />
        </div>
      </div>
    </section>

    <!-- SECCION 6: SANDBOX -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Sandbox</h2>
      <div class="p-6 bg-surface rounded-lg border border-border grid gap-6 md:grid-cols-2">
        <div class="space-y-4">
          <div>
            <label for="lab-color" class="text-sm font-medium text-text-primary">Color</label>
            <select id="lab-color" v-model="lab.color" class="w-full mt-2">
              <option value="primary">primary</option>
              <option value="secondary">secondary</option>
              <option value="success">success</option>
              <option value="warning">warning</option>
              <option value="error">error</option>
              <option value="info">info</option>
              <option value="neutral">neutral</option>
            </select>
          </div>

          <div>
            <label for="lab-size" class="text-sm font-medium text-text-primary">Size</label>
            <select id="lab-size" v-model="lab.size" class="w-full mt-2">
              <option value="xs">xs</option>
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
              <option value="xl">xl</option>
            </select>
          </div>

          <div>
            <label for="lab-variant" class="text-sm font-medium text-text-primary">Variant</label>
            <select id="lab-variant" v-model="lab.variant" class="w-full mt-2">
              <option value="solid">solid</option>
              <option value="outline">outline</option>
              <option value="soft">soft</option>
              <option value="borderless">borderless</option>
            </select>
          </div>

          <div class="flex items-center gap-3">
            <input id="lab-disabled" v-model="lab.disabled" type="checkbox" />
            <label for="lab-disabled" class="text-sm text-text-secondary">Disabled</label>
          </div>
          <div class="flex items-center gap-3">
            <input id="lab-readonly" v-model="lab.readonly" type="checkbox" />
            <label for="lab-readonly" class="text-sm text-text-secondary">Readonly</label>
          </div>
          <div class="flex items-center gap-3">
            <input id="lab-error" v-model="lab.error" type="checkbox" />
            <label for="lab-error" class="text-sm text-text-secondary">Error</label>
          </div>
          <div class="flex items-center gap-3">
            <input id="lab-required" v-model="lab.required" type="checkbox" />
            <label for="lab-required" class="text-sm text-text-secondary">Required</label>
          </div>
        </div>

        <div class="space-y-4">
          <v-checkbox
            v-model="labValue"
            :color="lab.color"
            :size="lab.size"
            :variant="lab.variant"
            :disabled="lab.disabled"
            :readonly="lab.readonly"
            :error="lab.error"
            :required="lab.required"
            label="Checkbox interactivo"
            hint="Texto de ayuda"
            error-message="Campo obligatorio"
          />
          <p class="text-xs text-text-secondary">Value: {{ labValue }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import type {
  CheckboxColor,
  CheckboxSize,
  CheckboxVariant,
} from '@/components/ui/checkbox/checkbox';
import VCheckbox from '@/components/ui/checkbox/VCheckbox.vue';
import VCheckboxGroup from '@/components/ui/checkbox/VCheckboxGroup.vue';

const primarySelected = ref(['primary']);
const errorSelected = ref(['error']);
const successSelected = ref(['success']);
const warningSelected = ref(['warning']);
const secondarySelected = ref(['secondary']);
const infoSelected = ref(['info']);

const primaryOptions = [
  { label: 'Primary', value: 'primary' },
  { label: 'Primary 2', value: 'primary-2' },
  { label: 'Primary 3', value: 'primary-3' },
];
const errorOptions = [
  { label: 'Error', value: 'error' },
  { label: 'Error 2', value: 'error-2' },
  { label: 'Error 3', value: 'error-3' },
];
const successOptions = [
  { label: 'Success', value: 'success' },
  { label: 'Success 2', value: 'success-2' },
  { label: 'Success 3', value: 'success-3' },
];
const warningOptions = [
  { label: 'Warning', value: 'warning' },
  { label: 'Warning 2', value: 'warning-2' },
  { label: 'Warning 3', value: 'warning-3' },
];
const secondaryOptions = [
  { label: 'Secondary', value: 'secondary' },
  { label: 'Secondary 2', value: 'secondary-2' },
  { label: 'Secondary 3', value: 'secondary-3' },
];
const infoOptions = [
  { label: 'Info', value: 'info' },
  { label: 'Info 2', value: 'info-2' },
  { label: 'Info 3', value: 'info-3' },
];
const sizeSelected = ref('xs-1');
const variantSelected = ref('solid-1');
const stateSelected = ref('error-1');

const groupSelected = ref(['dev']);
const groupOptions = [
  { label: 'Desarrollo', value: 'dev' },
  { label: 'Diseno', value: 'design' },
  { label: 'Marketing', value: 'marketing' },
];

const labValue = ref(false);
const lab = reactive({
  color: 'primary' as CheckboxColor,
  size: 'md' as CheckboxSize,
  variant: 'solid' as CheckboxVariant,
  disabled: false,
  readonly: false,
  error: false,
  required: false,
});
</script>
