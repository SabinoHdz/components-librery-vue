<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-8 text-text-primary">Select Component</h1>

    <!-- Basic -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Basic</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-surface rounded-lg border border-border"
      >
        <v-select v-model="basic.country" label="Country" :options="countryOptions" />
        <v-select
          v-model="basic.city"
          label="City"
          :options="cityOptions"
          placeholder="Selecciona una ciudad"
          clearable
        />
      </div>
    </section>

    <!-- Variants -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Variants</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-surface rounded-lg border border-border"
      >
        <v-select v-model="variants.outline" label="Outline" :options="countryOptions" />
        <v-select
          v-model="variants.solid"
          label="Solid"
          variant="solid"
          :options="countryOptions"
        />
        <v-select v-model="variants.soft" label="Soft" variant="soft" :options="countryOptions" />
        <v-select
          v-model="variants.borderless"
          label="Borderless"
          variant="borderless"
          :options="countryOptions"
        />
        <v-select
          v-model="variants.filled"
          label="Filled"
          variant="filled"
          :options="countryOptions"
        />
      </div>
    </section>

    <!-- Sizes & Dense -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Sizes & Dense</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 bg-surface rounded-lg border border-border"
      >
        <v-select v-model="sizes.xs" label="XS" size="xs" :options="countryOptions" />
        <v-select v-model="sizes.sm" label="SM" size="sm" :options="countryOptions" />
        <v-select v-model="sizes.md" label="MD" size="md" :options="countryOptions" />
        <v-select v-model="sizes.lg" label="LG" size="lg" :options="countryOptions" />
        <v-select v-model="sizes.xl" label="XL" size="xl" :options="countryOptions" />
        <v-select v-model="sizes.dense" label="Dense" :options="countryOptions" :dense="true" />
      </div>
    </section>

    <!-- States -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">States</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-surface rounded-lg border border-border"
      >
        <v-select v-model="states.disabled" label="Disabled" :options="countryOptions" disabled />
        <v-select v-model="states.loading" label="Loading" :options="countryOptions" loading />
        <v-select v-model="states.readonly" label="Readonly" :options="countryOptions" readonly />
      </div>
    </section>

    <!-- Search -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Searchable</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-surface rounded-lg border border-border"
      >
        <v-select
          v-model="searchable.country"
          label="Country"
          :options="countryOptions"
          searchable
          clearable
          hint="Busca por nombre o valor"
        />
        <v-select
          v-model="searchable.tech"
          label="Tech Stack"
          :options="techOptions"
          searchable
          clearable
        />
      </div>
    </section>

    <!-- Multiple & Chips -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Multiple & Chips</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-surface rounded-lg border border-border"
      >
        <v-select
          v-model="multiple.skills"
          label="Skills"
          :options="skillOptions"
          multiple
          use-chips
          searchable
          clearable
          hint="Selecciona varias habilidades"
        />
        <v-select
          v-model="multiple.tools"
          label="Tools (max 3)"
          :options="toolOptions"
          multiple
          use-chips
          searchable
          :max-values="3"
          hint="Maximo 3 seleccionados"
        />
      </div>
    </section>

    <!-- Events -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Events</h2>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-surface rounded-lg border border-border"
      >
        <v-select
          v-model="eventsDemo.value"
          label="Select con eventos"
          :options="countryOptions"
          clearable
          hint="Eventos: update:modelValue, change, focus, blur, clear"
          @update:modelValue="handleUpdate"
          @change="handleChange"
          @focus="handleEvent('focus')"
          @blur="handleEvent('blur')"
          @clear="handleEvent('clear')"
        />
        <div class="p-4 bg-surface-variant rounded-lg border border-border">
          <p class="text-sm font-semibold text-text-primary mb-2">Ultimo evento</p>
          <div class="text-sm text-text-secondary">
            <div><strong>Evento:</strong> {{ eventsState.lastEvent }}</div>
            <div><strong>Payload:</strong> {{ eventsState.lastValue || '-' }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Validation Form -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Validation</h2>
      <div class="p-6 bg-surface rounded-lg border border-border">
        <v-form ref="formRef" @submit="handleSubmit">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <v-select
              v-model="form.country"
              label="Country"
              :options="countryOptions"
              required
              clearable
            />
            <v-select
              v-model="form.role"
              label="Role"
              :options="roleOptions"
              required
              :rules="[minLengthRule(3)]"
              clearable
            />
            <v-select
              v-model="form.tags"
              label="Tags"
              :options="tagOptions"
              multiple
              use-chips
              required
              :rules="[minSelectedRule(2)]"
              hint="Selecciona al menos 2"
            />
          </div>
          <div class="mt-6 flex gap-2">
            <v-button type="submit" color="primary">Validar</v-button>
            <v-button type="button" variant="outline" @click="handleReset">Reset</v-button>
          </div>
        </v-form>
        <div v-if="form.submitted" class="mt-4 p-4 bg-success/10 rounded-lg border border-success">
          <p class="text-sm font-semibold text-success mb-2">✓ Formulario valido!</p>
          <pre class="text-xs text-text-secondary">{{ JSON.stringify(form, null, 2) }}</pre>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VSelect from '@/components/ui/select/VSelect.vue';
import VForm from '@/components/ui/form/VForm.vue';
import VButton from '@/components/ui/button/VButton.vue';

const countryOptions = [
  { label: 'Peru', value: 'PE' },
  { label: 'Colombia', value: 'CO' },
  { label: 'Mexico', value: 'MX' },
  { label: 'Argentina', value: 'AR' },
  { label: 'Chile', value: 'CL' },
];

const cityOptions = [
  { label: 'Lima', value: 'lima' },
  { label: 'Bogota', value: 'bogota' },
  { label: 'CDMX', value: 'cdmx' },
  { label: 'Buenos Aires', value: 'buenos-aires' },
];

const techOptions = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
];

const skillOptions = [
  { label: 'UI/UX', value: 'ui' },
  { label: 'Frontend', value: 'fe' },
  { label: 'Backend', value: 'be' },
  { label: 'DevOps', value: 'devops' },
  { label: 'QA', value: 'qa' },
];

const toolOptions = [
  { label: 'Figma', value: 'figma' },
  { label: 'VS Code', value: 'vscode' },
  { label: 'Docker', value: 'docker' },
  { label: 'Postman', value: 'postman' },
  { label: 'GitHub', value: 'github' },
];

const roleOptions = [
  { label: 'Developer', value: 'dev' },
  { label: 'Designer', value: 'design' },
  { label: 'Product', value: 'pm' },
  { label: 'QA', value: 'qa' },
];

const tagOptions = [
  { label: 'UI', value: 'ui' },
  { label: 'API', value: 'api' },
  { label: 'Docs', value: 'docs' },
  { label: 'Testing', value: 'testing' },
  { label: 'DX', value: 'dx' },
];

const basic = ref({ country: '', city: '' });
const variants = ref({ outline: '', solid: '', soft: '', borderless: '', filled: '' });
const sizes = ref({ xs: '', sm: '', md: '', lg: '', xl: '', dense: '' });
const states = ref({ disabled: 'PE', loading: '', readonly: 'CO' });
const searchable = ref({ country: '', tech: '' });
const multiple = ref({ skills: [], tools: [] as string[] });
const eventsDemo = ref({ value: '' });
const eventsState = ref({ lastEvent: '---', lastValue: '' });

const formRef = ref<InstanceType<typeof VForm>>();
const form = ref({ country: '', role: '', tags: [] as string[], submitted: false });

const minLengthRule = (min: number) => (val: string | number | unknown) => {
  const str = String(val || '').trim();
  return str.length >= min ? true : `Minimo ${min} caracteres`;
};

const minSelectedRule = (min: number) => (val: string[] | unknown) => {
  const arr = Array.isArray(val) ? val : [];
  return arr.length >= min ? true : `Selecciona al menos ${min}`;
};

const handleUpdate = (value: string | number | Array<string | number>) => {
  eventsState.value.lastEvent = 'update:modelValue';
  eventsState.value.lastValue = JSON.stringify(value);
};

const handleChange = (value: string | number | Array<string | number>) => {
  eventsState.value.lastEvent = 'change';
  eventsState.value.lastValue = JSON.stringify(value);
};

const handleEvent = (name: string) => {
  eventsState.value.lastEvent = name;
};

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  if (formRef.value) {
    const isValid = await formRef.value.validate();
    form.value.submitted = isValid;
  }
};

const handleReset = () => {
  if (formRef.value) {
    formRef.value.reset();
    form.value.submitted = false;
  }
};
</script>
