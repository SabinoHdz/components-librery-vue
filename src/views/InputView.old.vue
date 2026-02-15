<template>
  <div class="input-view">
    <div class="header">
      <h1>Input Component</h1>
      <p class="subtitle">Versatile input component with type-specific validation and masking</p>
    </div>

    <!-- Basic Input -->
    <section class="section">
      <h2>Basic Text Input</h2>
      <div class="example-grid">
        <v-input
          v-model="examples.text"
          label="Full Name"
          placeholder="Enter your name"
          clearable
        />
        <v-input
          v-model="examples.textRequired"
          label="Username"
          required
          placeholder="Choose a username"
          clearable
        />
      </div>
    </section>

    <!-- Email Input -->
    <section class="section">
      <h2>Email Input</h2>
      <v-input
        v-model="examples.email"
        type="email"
        label="Email Address"
        placeholder="example@domain.com"
        required
        :rules="[emailCustomRule]"
        clearable
      />
    </section>

    <!-- Number Input -->
    <section class="section">
      <h2>Number Input</h2>
      <div class="example-grid">
        <v-input
          v-model="examples.number"
          type="number"
          label="Quantity"
          placeholder="Enter a number"
          :min="0"
          :max="1000"
          clearable
        />
        <v-input
          v-model="examples.numberRequired"
          type="number"
          label="Age"
          required
          :min="0"
          :max="150"
          clearable
        />
      </div>
    </section>

    <!-- Decimal Input -->
    <section class="section">
      <h2>Decimal Input (No Separators)</h2>
      <div class="example-grid">
        <v-input
          v-model="examples.decimal"
          type="decimal"
          label="Price"
          placeholder="1234.56"
          :decimal-places="2"
          :integer-digits="10"
          clearable
        />
        <v-input
          v-model="examples.decimalAlt"
          type="decimal"
          label="Temperature"
          placeholder="36.5"
          :decimal-places="1"
          :integer-digits="3"
          clearable
        />
      </div>
    </section>

    <!-- Phone Input -->
    <section class="section">
      <h2>Phone Input (Auto-formatted)</h2>
      <v-input
        v-model="examples.phone"
        type="phone"
        label="Phone Number"
        placeholder="123456789"
        clearable
      />
    </section>

    <!-- Password Input -->
    <section class="section">
      <h2>Password Input with Toggle</h2>
      <div class="example-grid">
        <v-input
          v-model="examples.password"
          type="password"
          label="Password"
          placeholder="Enter password"
          required
          clearable
        />
        <v-input
          v-model="examples.confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="Repeat password"
          required
          :rules="[confirmPasswordRule]"
          clearable
        />
      </div>
    </section>

    <!-- Search Input -->
    <section class="section">
      <h2>Search Input</h2>
      <v-input
        v-model="examples.search"
        type="search"
        label="Search"
        placeholder="Type to search..."
        clearable
      />
    </section>

    <!-- Alphabetic Input -->
    <section class="section">
      <h2>Alphabetic Input (Letters Only)</h2>
      <v-input
        v-model="examples.alphabetic"
        type="alphabetic"
        label="Name"
        placeholder="Only letters"
        clearable
      />
    </section>

    <!-- Alphanumeric Input -->
    <section class="section">
      <h2>Alphanumeric Input (Letters + Numbers)</h2>
      <v-input
        v-model="examples.alphanumeric"
        type="alphanumeric"
        label="Product Code"
        placeholder="ABC123"
        clearable
      />
    </section>

    <!-- Alphanumeric with Special Characters -->
    <section class="section">
      <h2>Alphanumeric with Special Characters</h2>
      <v-input
        v-model="examples.alphanumericSpecial"
        type="alphanumeric-special"
        label="Special Text"
        placeholder="Can include special chars"
        clearable
      />
    </section>

    <!-- URL Input -->
    <section class="section">
      <h2>URL Input</h2>
      <v-input
        v-model="examples.url"
        type="url"
        label="Website"
        placeholder="https://example.com"
        clearable
      />
    </section>

    <!-- Size Variants -->
    <section class="section">
      <h2>Size Variants</h2>
      <div class="space-y-3">
        <v-input
          v-model="examples.textXS"
          size="xs"
          label="Extra Small"
          placeholder="xs size"
          clearable
        />
        <v-input
          v-model="examples.textSm"
          size="sm"
          label="Small"
          placeholder="sm size"
          clearable
        />
        <v-input
          v-model="examples.textMd"
          size="md"
          label="Medium (default)"
          placeholder="md size"
          clearable
        />
        <v-input
          v-model="examples.textLg"
          size="lg"
          label="Large"
          placeholder="lg size"
          clearable
        />
        <v-input
          v-model="examples.textXL"
          size="xl"
          label="Extra Large"
          placeholder="xl size"
          clearable
        />
      </div>
    </section>

    <!-- Color Variants -->
    <section class="section">
      <h2>Color Variants</h2>
      <div class="space-y-3">
        <v-input
          v-model="examples.colorPrimary"
          color="primary"
          label="Primary"
          placeholder="primary"
          clearable
        />
        <v-input
          v-model="examples.colorSuccess"
          color="success"
          label="Success"
          placeholder="success"
          clearable
        />
        <v-input
          v-model="examples.colorWarning"
          color="warning"
          label="Warning"
          placeholder="warning"
          clearable
        />
        <v-input
          v-model="examples.colorError"
          color="error"
          label="Error"
          placeholder="error"
          clearable
        />
      </div>
    </section>

    <!-- Variant Styles -->
    <section class="section">
      <h2>Variant Styles</h2>
      <div class="space-y-3">
        <v-input
          v-model="examples.variantOutline"
          variant="outline"
          label="Outline (default)"
          placeholder="outline variant"
          clearable
        />
        <v-input
          v-model="examples.variantSolid"
          variant="solid"
          label="Solid"
          placeholder="solid variant"
          clearable
        />
        <v-input
          v-model="examples.variantSoft"
          variant="soft"
          label="Soft"
          placeholder="soft variant"
          clearable
        />
      </div>
    </section>

    <!-- Disabled & Readonly -->
    <section class="section">
      <h2>Disabled & Readonly</h2>
      <div class="example-grid">
        <v-input
          v-model="examples.disabledText"
          label="Disabled Input"
          placeholder="disabled"
          disabled
          clearable
        />
        <v-input
          v-model="examples.readonlyText"
          label="Readonly Input"
          placeholder="readonly"
          readonly
          clearable
        />
      </div>
    </section>

    <!-- Form Integration -->
    <section class="section">
      <h2>Form Integration</h2>
      <v-form ref="formRef" @submit="handleFormSubmit">
        <div class="form-grid">
          <v-input
            v-model="formData.name"
            label="Full Name"
            required
            :rules="[(val) => (String(val).length >= 3 ? true : 'Mínimo 3 caracteres')]"
            clearable
          />
          <v-input v-model="formData.email" type="email" label="Email" required clearable />
          <v-input v-model="formData.phone" type="phone" label="Phone" required clearable />
          <v-input
            v-model="formData.password"
            type="password"
            label="Password"
            required
            :rules="[(val) => (String(val).length >= 8 ? true : 'Mínimo 8 caracteres')]"
            clearable
          />
        </div>
        <div class="form-actions">
          <button type="submit" class="btn btn-primary">Validate Form</button>
          <button type="button" class="btn btn-secondary" @click="resetForm">Reset</button>
        </div>
      </v-form>
      <div v-if="formSubmitted" class="form-result">
        <p class="form-success">✓ Form is valid!</p>
        <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
      </div>
    </section>

    <!-- Custom Validation -->
    <section class="section">
      <h2>Custom Validation</h2>
      <v-input
        v-model="examples.username"
        label="Username"
        required
        :rules="[
          (val) => (String(val).length >= 3 ? true : 'Mínimo 3 caracteres'),
          (val) =>
            !val || /^[a-zA-Z0-9_]+$/.test(String(val))
              ? true
              : 'Solo letras, números y guiones bajos',
          usernameAvailableRule,
        ]"
        placeholder="At least 3 chars, alphanumeric"
        clearable
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VInput from '@/components/ui/input/VInput.vue';
import VForm from '@/components/ui/form/VForm.vue';

// ===== EXAMPLES =====
const examples = ref({
  text: '',
  textRequired: '',
  email: '',
  number: '',
  numberRequired: '',
  decimal: '',
  decimalAlt: '',
  phone: '',
  password: '',
  confirmPassword: '',
  search: '',
  alphabetic: '',
  alphanumeric: '',
  alphanumericSpecial: '',
  url: '',
  textXS: '',
  textSm: '',
  textMd: '',
  textLg: '',
  textXL: '',
  colorPrimary: '',
  colorSuccess: '',
  colorWarning: '',
  colorError: '',
  variantOutline: '',
  variantSolid: '',
  variantSoft: '',
  disabledText: 'Disabled value',
  readonlyText: 'Readonly value',
  username: '',
});

// ===== FORM DATA =====
const formRef = ref<InstanceType<typeof VForm>>();
const formData = ref({
  name: '',
  email: '',
  phone: '',
  password: '',
});
const formSubmitted = ref(false);

// ===== VALIDATION RULES =====
const emailCustomRule = (val: string | number) => {
  const email = String(val).trim();
  if (!email) return true;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) ? true : 'Please enter a valid email';
};

const confirmPasswordRule = (val: string | number) => {
  const confirmPwd = String(val);
  const password = examples.value.password;
  return confirmPwd === password ? true : 'Passwords do not match';
};

const usernameAvailableRule = async (val: string | number): Promise<true | string> => {
  const username = String(val).trim();
  if (!username) return true;

  // Simulación de verificación en servidor
  return new Promise<true | string>((resolve) => {
    setTimeout(() => {
      const takenUsernames = ['admin', 'root', 'user', 'test'];
      resolve(!takenUsernames.includes(username.toLowerCase()) ? true : 'Username already taken');
    }, 500);
  });
};

// ===== FORM HANDLERS =====
const handleFormSubmit = async (e: Event) => {
  e.preventDefault();
  if (formRef.value) {
    const isValid = await formRef.value.validate();
    formSubmitted.value = isValid;
  }
};

const resetForm = () => {
  if (formRef.value) {
    formRef.value.reset();
    formSubmitted.value = false;
  }
};
</script>
