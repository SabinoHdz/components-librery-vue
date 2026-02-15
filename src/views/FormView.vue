<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-8 text-text-primary">VForm Component</h1>

    <!-- SECTION 1: Validación Básica -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Validación Básica con Rules</h2>
      <div class="max-w-md">
        <v-form
          ref="basicFormRef"
          :model-value="basicEmail"
          :rules="basicRules"
          @validation-error="handleBasicError"
          @validation-success="handleBasicSuccess"
          @submit="handleBasicSubmit"
        >
          <div class="mb-4">
            <label class="block text-sm font-semibold mb-2">Email</label>
            <input
              v-model="basicEmail"
              type="email"
              placeholder="tu@email.com"
              class="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-semibold mb-2">Contraseña</label>
            <input
              v-model="basicPassword"
              type="password"
              placeholder="••••••••"
              class="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div class="flex gap-2">
            <button
              type="submit"
              class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
              Login
            </button>
            <button
              type="reset"
              class="px-4 py-2 border border-border text-text-primary rounded-lg hover:bg-surface-variant transition"
            >
              Limpiar
            </button>
          </div>

          <v-alert
            v-if="basicErrors.length"
            color="error"
            variant="soft"
            size="sm"
            class="mt-4"
            :message="`${basicErrors.length} error(es) encontrado(s)`"
          >
            <template #default>
              <ul class="list-disc list-inside text-sm">
                <li v-for="(error, idx) in basicErrors" :key="idx">{{ error }}</li>
              </ul>
            </template>
          </v-alert>

          <v-alert
            v-if="basicSuccess"
            color="success"
            variant="soft"
            size="sm"
            class="mt-4"
            message="Validación exitosa!"
          />
        </v-form>
      </div>
    </section>

    <!-- SECTION 2: Validación con Greedy Mode -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Greedy Mode (Validar Todo)</h2>
      <div class="max-w-md">
        <v-form
          ref="greedyFormRef"
          :model-value="{ email: greedyEmail, password: greedyPassword }"
          :rules="greedyRules"
          greedy
          @validation-error="handleGreedyError"
          @submit="handleGreedySubmit"
        >
          <div class="mb-4">
            <label class="block text-sm font-semibold mb-2">Email</label>
            <input
              v-model="greedyEmail"
              type="email"
              placeholder="tu@email.com"
              class="w-full px-3 py-2 border border-border rounded-lg"
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-semibold mb-2">Contraseña</label>
            <input
              v-model="greedyPassword"
              type="password"
              placeholder="Mín 8 caracteres"
              class="w-full px-3 py-2 border border-border rounded-lg"
            />
          </div>

          <button type="submit" class="px-4 py-2 bg-primary text-white rounded-lg">
            Validar todos
          </button>

          <v-alert
            v-if="greedyErrors.length"
            color="warning"
            variant="soft"
            size="sm"
            class="mt-4"
            :message="greedyErrors.length + ' errores'"
          >
            <template #default>
              <ul class="list-disc list-inside text-sm">
                <li v-for="(error, idx) in greedyErrors" :key="idx">{{ error }}</li>
              </ul>
            </template>
          </v-alert>
        </v-form>
      </div>
      <p class="text-sm text-text-secondary mt-3">
        Con <code>greedy</code>, VForm valida TODOS los campos y muestra TODOS los errores.
      </p>
    </section>

    <!-- SECTION 3: Control Programático -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Control Programático</h2>
      <div class="max-w-md">
        <v-form ref="programmaticFormRef">
          <div class="mb-4">
            <label class="block text-sm font-semibold mb-2">Nombre</label>
            <input
              v-model="programmaticName"
              placeholder="Ingresa tu nombre"
              class="w-full px-3 py-2 border border-border rounded-lg"
            />
          </div>

          <div class="flex gap-2 mb-4">
            <button
              type="button"
              @click="validateProgrammatic"
              class="px-4 py-2 bg-primary text-white rounded-lg"
            >
              Validar
            </button>
            <button
              type="button"
              @click="resetProgrammatic"
              class="px-4 py-2 bg-secondary text-white rounded-lg"
            >
              Reset
            </button>
            <button
              type="button"
              @click="resetValidationProgrammatic"
              class="px-4 py-2 bg-accent text-white rounded-lg"
            >
              Limpiar errores
            </button>
          </div>

          <div
            v-if="programmaticMessage"
            class="text-sm font-semibold"
            :class="programmaticValid ? 'text-success' : 'text-error'"
          >
            {{ programmaticMessage }}
          </div>
        </v-form>
      </div>
    </section>

    <!-- SECTION 4: Validación Asíncrona -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Validación Asíncrona</h2>
      <div class="max-w-md">
        <v-form
          ref="asyncFormRef"
          :model-value="asyncEmail"
          :rules="asyncRules"
          @validation-error="handleAsyncError"
          @validation-success="handleAsyncSuccess"
          @submit="handleAsyncSubmit"
        >
          <div class="mb-4">
            <label class="block text-sm font-semibold mb-2">Email (validando disponibilidad)</label>
            <input
              v-model="asyncEmail"
              type="email"
              placeholder="tu@email.com"
              class="w-full px-3 py-2 border border-border rounded-lg"
            />
            <div v-if="asyncValidating" class="text-sm text-text-secondary mt-2">
              Verificando disponibilidad...
            </div>
          </div>

          <button type="submit" class="px-4 py-2 bg-primary text-white rounded-lg">
            Registrar
          </button>

          <v-alert
            v-if="asyncErrors.length"
            color="error"
            variant="soft"
            size="sm"
            class="mt-4"
            :message="asyncErrors[0]"
          />
        </v-form>
      </div>
      <p class="text-sm text-text-secondary mt-3">
        Las reglas pueden ser asíncronas y esperar operaciones de servidor.
      </p>
    </section>

    <!-- SECTION 5: Props de Control -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Props de Control</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-4 border border-border rounded-lg">
          <h3 class="font-semibold mb-2">greedy: {{ greedyToggle }}</h3>
          <p class="text-sm text-text-secondary mb-3">
            Si true, valida TODOS los campos. Si false, para en el primer error.
          </p>
          <button
            @click="greedyToggle = !greedyToggle"
            class="px-3 py-1 bg-primary text-white rounded text-sm"
          >
            Toggle
          </button>
        </div>

        <div class="p-4 border border-border rounded-lg">
          <h3 class="font-semibold mb-2">noErrorFocus: {{ noErrorFocus }}</h3>
          <p class="text-sm text-text-secondary mb-3">
            Si true, no hace focus automático al campo con error.
          </p>
          <button
            @click="noErrorFocus = !noErrorFocus"
            class="px-3 py-1 bg-primary text-white rounded text-sm"
          >
            Toggle
          </button>
        </div>

        <div class="p-4 border border-border rounded-lg">
          <h3 class="font-semibold mb-2">noResetFocus: {{ noResetFocus }}</h3>
          <p class="text-sm text-text-secondary mb-3">Si true, no hace focus después de reset.</p>
          <button
            @click="noResetFocus = !noResetFocus"
            class="px-3 py-1 bg-primary text-white rounded text-sm"
          >
            Toggle
          </button>
        </div>

        <div class="p-4 border border-border rounded-lg">
          <h3 class="font-semibold mb-2">noValidate: {{ noValidate }}</h3>
          <p class="text-sm text-text-secondary mb-3">
            Si true, deshabilita validación HTML5 nativa.
          </p>
          <button
            @click="noValidate = !noValidate"
            class="px-3 py-1 bg-primary text-white rounded text-sm"
          >
            Toggle
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VForm, type ValidationRule } from '@/components/ui/form';
import VAlert from '@/components/ui/alert/VAlert.vue';

// ===== SECTION 1: Basic Validation =====
const basicFormRef = ref<InstanceType<typeof VForm> | null>(null);
const basicEmail = ref('');
const basicPassword = ref('');
const basicErrors = ref<string[]>([]);
const basicSuccess = ref(false);

const basicRules: ValidationRule<any>[] = [
  (form) => {
    if (!form.email) return 'Email requerido';
    if (!form.email.includes('@')) return 'Email inválido';
    return true;
  },
  (form) => {
    if (!form.password) return 'Contraseña requerida';
    if (form.password.length < 6) return 'Contraseña muy corta (mín 6)';
    return true;
  },
];

const handleBasicError = (payload: any) => {
  basicErrors.value = payload.errors;
  basicSuccess.value = false;
};

const handleBasicSuccess = () => {
  basicSuccess.value = true;
  basicErrors.value = [];
};

const handleBasicSubmit = () => {
  console.log('Login submitted:', { email: basicEmail.value });
};

// ===== SECTION 2: Greedy Mode =====
const greedyFormRef = ref<InstanceType<typeof VForm> | null>(null);
const greedyEmail = ref('');
const greedyPassword = ref('');
const greedyErrors = ref<string[]>([]);

const greedyRules: ValidationRule<any>[] = [
  (form) => {
    if (!form.email) return 'Email requerido';
    if (!form.email.includes('@')) return 'Email inválido';
    return true;
  },
  (form) => {
    if (!form.password) return 'Contraseña requerida';
    if (form.password.length < 8) return 'Mín 8 caracteres';
    return true;
  },
];

const handleGreedyError = (payload: any) => {
  greedyErrors.value = payload.errors;
};

const handleGreedySubmit = () => {
  console.log('Greedy form submitted');
};

// ===== SECTION 3: Programmatic Control =====
const programmaticFormRef = ref<InstanceType<typeof VForm> | null>(null);
const programmaticName = ref('');
const programmaticMessage = ref('');
const programmaticValid = ref(false);

const validateProgrammatic = async () => {
  if (!programmaticName.value) {
    programmaticMessage.value = 'Nombre requerido';
    programmaticValid.value = false;
    return;
  }
  if (programmaticName.value.length < 3) {
    programmaticMessage.value = 'Nombre muy corto (mín 3)';
    programmaticValid.value = false;
    return;
  }
  programmaticMessage.value = 'Validación exitosa!';
  programmaticValid.value = true;
};

const resetProgrammatic = () => {
  programmaticFormRef.value?.reset();
  programmaticMessage.value = '';
};

const resetValidationProgrammatic = () => {
  programmaticFormRef.value?.resetValidation();
  programmaticMessage.value = '';
};

// ===== SECTION 4: Async Validation =====
const asyncFormRef = ref<InstanceType<typeof VForm> | null>(null);
const asyncEmail = ref('');
const asyncErrors = ref<string[]>([]);
const asyncValidating = ref(false);

const asyncRules: ValidationRule<any>[] = [
  (email) => {
    if (!email) return 'Email requerido';
    if (!email.includes('@')) return 'Email inválido';
    return true;
  },
  async (email) => {
    asyncValidating.value = true;
    // Simular delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Simular check (algunos emails ya existen)
    const takenEmails = ['admin@example.com', 'user@example.com', 'test@example.com'];
    asyncValidating.value = false;
    if (takenEmails.includes(email.toLowerCase())) {
      return 'Este email ya está registrado';
    }
    return true;
  },
];

const handleAsyncError = (payload: any) => {
  asyncErrors.value = payload.errors;
};

const handleAsyncSuccess = () => {
  asyncErrors.value = [];
};

const handleAsyncSubmit = () => {
  console.log('Async form submitted:', asyncEmail.value);
};

// ===== SECTION 5: Props Control =====
const greedyToggle = ref(false);
const noErrorFocus = ref(false);
const noResetFocus = ref(false);
const noValidate = ref(true);
</script>
