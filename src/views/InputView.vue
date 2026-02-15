<template>
  <main class="max-w-7xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-2 text-text-primary">Input Component</h1>
    <p class="text-lg text-text-secondary mb-12">
      Versatile input component with type-specific validation, masking, and form integration
    </p>

    <!-- SECTION 1: Input Types -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6 text-text-primary">Input Types</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <!-- Text Inputs Card -->
        <v-card variant="outline">
          <v-card-header>
            <template #title>Text Inputs</template>
            <template #subtitle>Standard text input types</template>
          </v-card-header>
          <v-card-body>
            <div class="space-y-4">
              <v-input
                v-model="examples.text"
                label="Text"
                placeholder="Enter any text"
                clearable
              />
              <v-input
                v-model="examples.email"
                type="email"
                label="Email"
                placeholder="example@domain.com"
                clearable
              />
              <v-input
                v-model="examples.password"
                type="password"
                label="Password"
                placeholder="Enter password"
                clearable
              />
              <v-input
                v-model="examples.url"
                type="url"
                label="URL"
                placeholder="https://example.com"
                clearable
              />
              <v-input
                v-model="examples.search"
                type="search"
                label="Search"
                placeholder="Type to search..."
                clearable
              />
            </div>
          </v-card-body>
        </v-card>

        <!-- Numeric Inputs Card -->
        <v-card variant="outline">
          <v-card-header>
            <template #title>Numeric Inputs</template>
            <template #subtitle>Numbers and decimals with validation</template>
          </v-card-header>
          <v-card-body>
            <div class="space-y-4">
              <v-input
                v-model="examples.number"
                type="number"
                label="Integer Number"
                placeholder="Enter a whole number"
                :min="0"
                :max="1000"
                clearable
              />
              <v-input
                v-model="examples.decimal"
                type="decimal"
                label="Decimal (2 places)"
                placeholder="1234.56"
                :decimal-places="2"
                :integer-digits="10"
                clearable
              />
              <v-input
                v-model="examples.phone"
                type="phone"
                label="Phone (Auto-formatted)"
                placeholder="123456789"
                clearable
              />
              <div class="text-sm text-text-secondary mt-2">
                ℹ️ Phone automatically formats to: +XX XXX XX XX XX
              </div>
            </div>
          </v-card-body>
        </v-card>
      </div>

      <!-- Filtered Inputs Card (Full Width) -->
      <v-card variant="outline">
        <v-card-header>
          <template #title>Filtered Inputs</template>
          <template #subtitle>Character filtering for specific input patterns</template>
        </v-card-header>
        <v-card-body>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <v-input
              v-model="examples.alphabetic"
              type="alphabetic"
              label="Alphabetic Only"
              placeholder="Letters only"
              clearable
            />
            <v-input
              v-model="examples.alphanumeric"
              type="alphanumeric"
              label="Alphanumeric"
              placeholder="Letters + Numbers"
              clearable
            />
            <v-input
              v-model="examples.alphanumericSpecial"
              type="alphanumeric-special"
              label="With Special Chars"
              placeholder="Any character allowed"
              clearable
            />
          </div>
        </v-card-body>
      </v-card>
    </section>

    <!-- SECTION 2: Variants & Styles -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6 text-text-primary">Variants & Styles</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Variants Card -->
        <v-card variant="outline">
          <v-card-header>
            <template #title>Variants</template>
            <template #subtitle>Visual styles</template>
          </v-card-header>
          <v-card-body>
            <div class="space-y-4">
              <v-input
                v-model="examples.variantOutline"
                variant="outline"
                label="Outline"
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
          </v-card-body>
        </v-card>

        <!-- Colors Card -->
        <v-card variant="outline">
          <v-card-header>
            <template #title>Colors</template>
            <template #subtitle>Focus colors</template>
          </v-card-header>
          <v-card-body>
            <div class="space-y-4">
              <v-input
                v-model="examples.colorPrimary"
                color="primary"
                label="Primary"
                placeholder="Click to focus"
                clearable
              />
              <v-input
                v-model="examples.colorSuccess"
                color="success"
                label="Success"
                placeholder="Click to focus"
                clearable
              />
              <v-input
                v-model="examples.colorWarning"
                color="warning"
                label="Warning"
                placeholder="Click to focus"
                clearable
              />
              <v-input
                v-model="examples.colorError"
                color="error"
                label="Error"
                placeholder="Click to focus"
                clearable
              />
            </div>
          </v-card-body>
        </v-card>

        <!-- Sizes Card -->
        <v-card variant="outline">
          <v-card-header>
            <template #title>Sizes</template>
            <template #subtitle>From xs to xl</template>
          </v-card-header>
          <v-card-body>
            <div class="space-y-4">
              <v-input
                v-model="examples.sizeXs"
                size="xs"
                label="Extra Small"
                placeholder="xs"
                clearable
              />
              <v-input
                v-model="examples.sizeSm"
                size="sm"
                label="Small"
                placeholder="sm"
                clearable
              />
              <v-input
                v-model="examples.sizeMd"
                size="md"
                label="Medium (default)"
                placeholder="md"
                clearable
              />
              <v-input
                v-model="examples.sizeLg"
                size="lg"
                label="Large"
                placeholder="lg"
                clearable
              />
              <v-input
                v-model="examples.sizeXl"
                size="xl"
                label="Extra Large"
                placeholder="xl"
                clearable
              />
            </div>
          </v-card-body>
        </v-card>
      </div>
    </section>

    <!-- SECTION 3: States & Features -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6 text-text-primary">States & Features</h2>
      
      <v-card variant="outline">
        <v-card-header>
          <template #title>Input States</template>
          <template #subtitle>Disabled, readonly, error, and icon states</template>
        </v-card-header>
        <v-card-body>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <v-input
              v-model="examples.disabledText"
              label="Disabled State"
              placeholder="disabled"
              disabled
              clearable
            />
            <v-input
              v-model="examples.readonlyText"
              label="Readonly State"
              placeholder="readonly"
              readonly
              clearable
            />
            <v-input
              v-model="examples.errorState"
              label="Error State"
              placeholder="This field has an error"
              :rules="[() => 'This is an error message']"
              validate-on="input"
              clearable
            />
            <v-input
              v-model="examples.withIcons"
              label="With Icons"
              placeholder="Icons automatically added"
              prepend-icon="search"
              clearable
            />
          </div>
        </v-card-body>
      </v-card>
    </section>

    <!-- SECTION 4: Form Demos -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6 text-text-primary">Form Demonstrations</h2>
      <p class="text-text-secondary mb-6">
        Complete form examples with validation, showing real-world usage patterns
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Login Form -->
        <v-card variant="soft">
          <v-card-header>
            <template #title>🔐 Login Form</template>
            <template #subtitle>Simple authentication example</template>
          </v-card-header>
          <v-card-body>
            <v-form ref="loginFormRef" @submit="handleLoginSubmit">
              <div class="space-y-4">
                <v-input
                  v-model="loginForm.email"
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  required
                  clearable
                />
                <v-input
                  v-model="loginForm.password"
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  required
                  :rules="[minLengthRule(8)]"
                  clearable
                />
              </div>
              <v-card-actions class="mt-6">
                <v-button type="submit" color="primary" class="w-full">
                  Iniciar Sesión
                </v-button>
              </v-card-actions>
            </v-form>
            <div v-if="loginForm.submitted" class="mt-4 p-4 bg-success/10 rounded-lg border border-success">
              <p class="text-sm font-semibold text-success mb-2">✓ Login successful!</p>
              <pre class="text-xs text-text-secondary">{{ JSON.stringify(loginForm, null, 2) }}</pre>
            </div>
          </v-card-body>
        </v-card>

        <!-- Registration Form -->
        <v-card variant="soft">
          <v-card-header>
            <template #title>📝 Registration Form</template>
            <template #subtitle>Complete validation example</template>
          </v-card-header>
          <v-card-body>
            <v-form ref="registerFormRef" @submit="handleRegisterSubmit">
              <div class="space-y-4">
                <v-input
                  v-model="registerForm.username"
                  label="Username"
                  placeholder="Choose a username"
                  required
                  :rules="[minLengthRule(3), alphanumericRule, usernameAvailableRule]"
                  clearable
                />
                <v-input
                  v-model="registerForm.email"
                  type="email"
                  label="Email"
                  placeholder="your@email.com"
                  required
                  clearable
                />
                <v-input
                  v-model="registerForm.password"
                  type="password"
                  label="Password"
                  placeholder="Min 8 characters"
                  required
                  :rules="[minLengthRule(8)]"
                  clearable
                />
                <v-input
                  v-model="registerForm.confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Repeat password"
                  required
                  :rules="[matchPasswordRule(registerForm.password)]"
                  clearable
                />
                <v-input
                  v-model="registerForm.phone"
                  type="phone"
                  label="Phone (Optional)"
                  placeholder="123456789"
                  clearable
                />
              </div>
              <v-card-actions class="mt-6 gap-2">
                <v-button type="submit" color="primary" class="flex-1">
                  Registrarse
                </v-button>
                <v-button type="button" variant="outline" @click="resetRegisterForm">
                  Reset
                </v-button>
              </v-card-actions>
            </v-form>
            <div v-if="registerForm.submitted" class="mt-4 p-4 bg-success/10 rounded-lg border border-success">
              <p class="text-sm font-semibold text-success mb-2">✓ Registration successful!</p>
              <pre class="text-xs text-text-secondary">{{ JSON.stringify(registerForm, null, 2) }}</pre>
            </div>
          </v-card-body>
        </v-card>

        <!-- Profile Form -->
        <v-card variant="soft">
          <v-card-header>
            <template #title>👤 User Profile</template>
            <template #subtitle>Personal information form</template>
          </v-card-header>
          <v-card-body>
            <v-form ref="profileFormRef" @submit="handleProfileSubmit">
              <div class="space-y-4">
                <v-input
                  v-model="profileForm.firstName"
                  type="alphabetic"
                  label="First Name"
                  placeholder="John"
                  required
                  clearable
                />
                <v-input
                  v-model="profileForm.lastName"
                  type="alphabetic"
                  label="Last Name"
                  placeholder="Doe"
                  required
                  clearable
                />
                <v-input
                  v-model="profileForm.email"
                  type="email"
                  label="Email"
                  placeholder="john.doe@example.com"
                  required
                  readonly
                  clearable
                />
                <v-input
                  v-model="profileForm.phone"
                  type="phone"
                  label="Phone Number"
                  placeholder="123456789"
                  clearable
                />
                <v-input
                  v-model="profileForm.website"
                  type="url"
                  label="Website (Optional)"
                  placeholder="https://yoursite.com"
                  clearable
                />
              </div>
              <v-card-actions class="mt-6">
                <v-button type="submit" color="primary" class="w-full">
                  Guardar Perfil
                </v-button>
              </v-card-actions>
            </v-form>
            <div v-if="profileForm.submitted" class="mt-4 p-4 bg-success/10 rounded-lg border border-success">
              <p class="text-sm font-semibold text-success mb-2">✓ Profile saved!</p>
              <pre class="text-xs text-text-secondary">{{ JSON.stringify(profileForm, null, 2) }}</pre>
            </div>
          </v-card-body>
        </v-card>

        <!-- Contact Form -->
        <v-card variant="soft">
          <v-card-header>
            <template #title>✉️ Contact Form</template>
            <template #subtitle>Reach out to us</template>
          </v-card-header>
          <v-card-body>
            <v-form ref="contactFormRef" @submit="handleContactSubmit">
              <div class="space-y-4">
                <v-input
                  v-model="contactForm.fullName"
                  label="Full Name"
                  placeholder="Your full name"
                  required
                  :rules="[minLengthRule(3)]"
                  clearable
                />
                <v-input
                  v-model="contactForm.email"
                  type="email"
                  label="Email"
                  placeholder="your@email.com"
                  required
                  clearable
                />
                <v-input
                  v-model="contactForm.subject"
                  label="Subject"
                  placeholder="Brief subject (max 100 chars)"
                  required
                  :maxlength="100"
                  clearable
                />
                <v-input
                  v-model="contactForm.phone"
                  type="phone"
                  label="Phone (Optional)"
                  placeholder="123456789"
                  clearable
                />
              </div>
              <v-card-actions class="mt-6">
                <v-button type="submit" color="primary" class="w-full">
                  Enviar Mensaje
                </v-button>
              </v-card-actions>
            </v-form>
            <div v-if="contactForm.submitted" class="mt-4 p-4 bg-success/10 rounded-lg border border-success">
              <p class="text-sm font-semibold text-success mb-2">✓ Message sent!</p>
              <pre class="text-xs text-text-secondary">{{ JSON.stringify(contactForm, null, 2) }}</pre>
            </div>
          </v-card-body>
        </v-card>

        <!-- Advanced Configuration Form (Full Width) -->
        <v-card variant="soft" class="lg:col-span-2">
          <v-card-header>
            <template #title>⚙️ Advanced Configuration</template>
            <template #subtitle>Mixed input types with specific validation</template>
          </v-card-header>
          <v-card-body>
            <v-form ref="configFormRef" @submit="handleConfigSubmit">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <v-input
                  v-model="configForm.apiKey"
                  label="API Key"
                  placeholder="Enter your API key"
                  required
                  prepend-icon="key"
                  clearable
                />
                <v-input
                  v-model="configForm.port"
                  type="number"
                  label="Port"
                  placeholder="1024-65535"
                  required
                  :min="1024"
                  :max="65535"
                  clearable
                />
                <v-input
                  v-model="configForm.timeout"
                  type="decimal"
                  label="Timeout (seconds)"
                  placeholder="1.5"
                  required
                  :decimal-places="2"
                  :min="0"
                  :max="300"
                  clearable
                />
                <v-input
                  v-model="configForm.webhookUrl"
                  type="url"
                  label="Webhook URL"
                  placeholder="https://api.example.com/webhook"
                  required
                  clearable
                />
                <v-input
                  v-model="configForm.searchQuery"
                  type="search"
                  label="Search Configurations"
                  placeholder="Type to search..."
                  clearable
                />
                <v-input
                  v-model="configForm.maxRetries"
                  type="number"
                  label="Max Retries"
                  placeholder="3"
                  :min="0"
                  :max="10"
                  clearable
                />
              </div>
              <v-card-actions class="mt-6 gap-2">
                <v-button type="submit" color="success" class="flex-1">
                  Guardar Configuración
                </v-button>
                <v-button type="button" variant="outline" @click="resetConfigForm">
                  Reset
                </v-button>
              </v-card-actions>
            </v-form>
            <div v-if="configForm.submitted" class="mt-4 p-4 bg-success/10 rounded-lg border border-success">
              <p class="text-sm font-semibold text-success mb-2">✓ Configuration saved!</p>
              <pre class="text-xs text-text-secondary">{{ JSON.stringify(configForm, null, 2) }}</pre>
            </div>
          </v-card-body>
        </v-card>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VInput from '@/components/ui/input/VInput.vue';
import VForm from '@/components/ui/form/VForm.vue';
import VButton from '@/components/ui/button/VButton.vue';
import VCard from '@/components/ui/card/VCard.vue';
import VCardHeader from '@/components/ui/card/VCardHeader.vue';
import VCardBody from '@/components/ui/card/VCardBody.vue';
import VCardActions from '@/components/ui/card/VCardActions.vue';

// ===== EXAMPLES DATA =====
const examples = ref({
  // Text inputs
  text: '',
  email: '',
  password: '',
  url: '',
  search: '',
  // Numeric inputs
  number: '',
  decimal: '',
  phone: '',
  // Filtered inputs
  alphabetic: '',
  alphanumeric: '',
  alphanumericSpecial: '',
  // Variants
  variantOutline: '',
  variantSolid: '',
  variantSoft: '',
  // Colors
  colorPrimary: '',
  colorSuccess: '',
  colorWarning: '',
  colorError: '',
  // Sizes
  sizeXs: '',
  sizeSm: '',
  sizeMd: '',
  sizeLg: '',
  sizeXl: '',
  // States
  disabledText: 'This field is disabled',
  readonlyText: 'This field is readonly',
  errorState: '',
  withIcons: '',
});

// ===== VALIDATION RULES =====
const minLengthRule = (min: number) => (val: string | number) => {
  const str = String(val);
  return str.length >= min ? true : `Mínimo ${min} caracteres`;
};

const alphanumericRule = (val: string | number) => {
  const str = String(val);
  return /^[a-zA-Z0-9_]+$/.test(str) ? true : 'Solo letras, números y guiones bajos';
};

const matchPasswordRule = (password: string) => (val: string | number) => {
  return String(val) === password ? true : 'Las contraseñas no coinciden';
};

const usernameAvailableRule = async (val: string | number): Promise<true | string> => {
  const username = String(val).trim();
  if (!username) return true;

  // Simulate server check
  return new Promise<true | string>((resolve) => {
    setTimeout(() => {
      const takenUsernames = ['admin', 'root', 'user', 'test'];
      resolve(takenUsernames.includes(username.toLowerCase()) ? 'Username already taken' : true);
    }, 500);
  });
};

// ===== LOGIN FORM =====
const loginFormRef = ref<InstanceType<typeof VForm>>();
const loginForm = ref({
  email: '',
  password: '',
  submitted: false,
});

const handleLoginSubmit = async (e: Event) => {
  e.preventDefault();
  if (loginFormRef.value) {
    const isValid = await loginFormRef.value.validate();
    loginForm.value.submitted = isValid;
  }
};

// ===== REGISTER FORM =====
const registerFormRef = ref<InstanceType<typeof VForm>>();
const registerForm = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
  submitted: false,
});

const handleRegisterSubmit = async (e: Event) => {
  e.preventDefault();
  if (registerFormRef.value) {
    const isValid = await registerFormRef.value.validate();
    registerForm.value.submitted = isValid;
  }
};

const resetRegisterForm = () => {
  if (registerFormRef.value) {
    registerFormRef.value.reset();
    registerForm.value.submitted = false;
  }
};

// ===== PROFILE FORM =====
const profileFormRef = ref<InstanceType<typeof VForm>>();
const profileForm = ref({
  firstName: '',
  lastName: '',
  email: 'john.doe@example.com', // Pre-filled as readonly
  phone: '',
  website: '',
  submitted: false,
});

const handleProfileSubmit = async (e: Event) => {
  e.preventDefault();
  if (profileFormRef.value) {
    const isValid = await profileFormRef.value.validate();
    profileForm.value.submitted = isValid;
  }
};

// ===== CONTACT FORM =====
const contactFormRef = ref<InstanceType<typeof VForm>>();
const contactForm = ref({
  fullName: '',
  email: '',
  subject: '',
  phone: '',
  submitted: false,
});

const handleContactSubmit = async (e: Event) => {
  e.preventDefault();
  if (contactFormRef.value) {
    const isValid = await contactFormRef.value.validate();
    contactForm.value.submitted = isValid;
  }
};

// ===== CONFIG FORM =====
const configFormRef = ref<InstanceType<typeof VForm>>();
const configForm = ref({
  apiKey: '',
  port: '',
  timeout: '',
  webhookUrl: '',
  searchQuery: '',
  maxRetries: '',
  submitted: false,
});

const handleConfigSubmit = async (e: Event) => {
  e.preventDefault();
  if (configFormRef.value) {
    const isValid = await configFormRef.value.validate();
    configForm.value.submitted = isValid;
  }
};

const resetConfigForm = () => {
  if (configFormRef.value) {
    configFormRef.value.reset();
    configForm.value.submitted = false;
  }
};
</script>

<style scoped>
/* Utility classes for consistent spacing */
.space-y-4 > * + * {
  margin-top: 1rem;
}
</style>
