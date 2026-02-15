<template>
  <div class="input-wrapper">
    <!-- Label -->
    <label v-if="label" class="input-label" :for="inputId">
      {{ label }}
      <span v-if="required" class="input-label-required">*</span>
    </label>

    <!-- Input container -->
    <div :class="['input-container', inputContainerClass]">
      <!-- Prepend icon -->
      <div v-if="prependIconName" class="input-prepend">
        <v-icon :name="prependIconName" size="sm" />
      </div>

      <!-- Input element -->
      <input
        :id="inputId"
        ref="inputRef"
        :value="getDisplayValue()"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :minlength="minlength"
        :min="type === 'number' || type === 'decimal' ? min : undefined"
        :max="type === 'number' || type === 'decimal' ? max : undefined"
        :step="type === 'number' || type === 'decimal' ? step : undefined"
        :aria-label="ariaLabel || label"
        :aria-describedby="hasError ? errorId : ariaDescribedBy"
        :aria-invalid="hasError"
        class="input-field"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
      />

      <!-- Append icon (password eye toggle) -->
      <button
        v-if="type === 'password'"
        type="button"
        class="input-append-btn"
        @click="togglePasswordVisibility"
        :aria-label="showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'"
      >
        <v-icon :name="showPassword ? 'visibility_off' : 'visibility'" size="sm" />
      </button>

      <!-- Clearable icon -->
      <button
        v-if="clearable && modelValue && !disabled && !readonly"
        type="button"
        class="input-append-btn"
        @click="handleClear"
        aria-label="Limpiar"
      >
        <v-icon name="close" size="sm" />
      </button>
    </div>

    <!-- Error message -->
    <div v-if="hasError && touched" :id="errorId" class="input-error" role="alert">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { VIcon } from '../icon';
import type { InputProps } from './input';
import { getDefaultRequiredMessage, getTypeErrorMessages } from './input';
import { inputVariants } from './input.variants';
import {
  filterInputByType,
  applyInputMask,
  limitDecimalPlaces,
  limitIntegerDigits,
} from './input.masks';
import { validateByType, getTypeErrorMessage } from './input.validators';
import { useFormContext, type ValidationRule } from '../form';

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  disabled: false,
  readonly: false,
  required: false,
  validateOn: 'blur',
  clearable: true,
  variant: 'outline',
  color: 'primary',
  size: 'md',
  decimalPlaces: 2,
  integerDigits: 10,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'focus'): void;
  (e: 'blur'): void;
  (e: 'clear'): void;
}>();

// ===== REFS =====
const inputRef = ref<HTMLInputElement | null>(null);
const touched = ref(false);
const focused = ref(false);
const dirty = ref(false);
const showPassword = ref(false);
const errorMessage = ref('');

// ===== COMPUTED =====
const inputId = computed(() => `input-${Math.random().toString(36).slice(2, 9)}`);

const errorId = computed(() => `${inputId.value}-error`);

const computedInputType = computed(() => {
  if (props.type === 'password' && showPassword.value) return 'text';
  if (props.type === 'phone') return 'tel';
  if (props.type === 'email') return 'email';
  if (props.type === 'url') return 'url';
  if (props.type === 'search') return 'search';
  return 'text';
});

const prependIconName = computed(() => {
  if (props.prependIcon) return props.prependIcon;
  if (props.type === 'search') return 'search';
  if (props.type === 'email') return 'mail';
  if (props.type === 'phone') return 'phone';
  if (props.type === 'url') return 'link';
  return undefined;
});

const effectiveRules = computed(() => {
  const baseRules = props.rules || [];

  // Agregar regla de requerido si required={true}
  if (props.required) {
    const requiredRule: ValidationRule = (val) => {
      const strVal = String(val).trim();
      if (!strVal) {
        return props.messageRequired || getDefaultRequiredMessage(props.label);
      }
      return true;
    };
    return [requiredRule, ...baseRules];
  }

  return baseRules;
});

const hasError = computed(() => errorMessage.value.length > 0);

const inputContainerClass = computed(() =>
  inputVariants({
    variant: props.variant,
    color: props.color,
    size: props.size,
    disabled: props.disabled,
    error: hasError.value,
  }),
);

// ===== METHODS =====

const getDisplayValue = (): string => {
  const value = String(props.modelValue || '');
  return applyInputMask(value, props.type);
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  let value = target.value;

  // Marcar como dirty
  if (value !== String(props.modelValue || '')) {
    dirty.value = true;
  }

  // 1. Filtrar caracteres inválidos
  value = filterInputByType(value, props.type);

  // 2. Respetar maxlength
  if (props.maxlength) {
    value = value.slice(0, props.maxlength);
  }

  // 3. Limitar decimales si es tipo decimal
  if (props.type === 'decimal') {
    value = limitDecimalPlaces(value, props.decimalPlaces);
    value = limitIntegerDigits(value, props.integerDigits);
  }

  // 4. Aplicar máscara visual
  target.value = applyInputMask(value, props.type);

  // 5. Emitir valor limpio (sin máscara para almacenamiento)
  const cleanValue = props.type === 'phone' ? value.replace(/\D/g, '') : value;
  emit('update:modelValue', cleanValue);

  // 6. Validar en tiempo real si es necesario
  if (props.validateOn === 'input' && touched.value) {
    validateField();
  }
};

const handleBlur = async () => {
  focused.value = false;
  touched.value = true;

  // Validar en blur
  if (props.validateOn === 'blur') {
    await validateField();
  }

  emit('blur');
};

const handleFocus = () => {
  focused.value = true;
  errorMessage.value = ''; // Limpiar error al enfocar
  emit('focus');
};

const handleClear = () => {
  emit('update:modelValue', '');
  errorMessage.value = '';
  touched.value = false;
  dirty.value = false;
  inputRef.value?.focus();
  emit('clear');
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const validateField = async (): Promise<boolean> => {
  errorMessage.value = '';
  const value = props.modelValue ?? '';

  // Validar con rules
  for (const rule of effectiveRules.value) {
    const result = await rule(value);
    if (result !== true) {
      errorMessage.value = String(result) || 'Campo inválido';
      return false;
    }
  }

  // Validar según tipo
  const isValidType = validateByType(value, props.type, {
    min: props.min,
    max: props.max,
    minlength: props.minlength,
    maxlength: props.maxlength,
    decimalPlaces: props.decimalPlaces,
    integerDigits: props.integerDigits,
  });

  if (!isValidType) {
    errorMessage.value = getTypeErrorMessage(props.type);
    return false;
  }

  return true;
};

const resetValidation = () => {
  errorMessage.value = '';
  touched.value = false;
  dirty.value = false;
};

const reset = () => {
  emit('update:modelValue', '');
  errorMessage.value = '';
  touched.value = false;
  dirty.value = false;
  showPassword.value = false;
};

// ===== FORM INTEGRATION =====
const formContext = useFormContext();
let unregister: (() => void) | null = null;

onMounted(() => {
  if (formContext) {
    unregister = formContext.registerField({
      validate: validateField,
      resetValidation,
      reset,
      focus: () => inputRef.value?.focus(),
    });
  }
});

onBeforeUnmount(() => {
  if (unregister) unregister();
});

// ===== EXPOSE =====
defineExpose({
  validate: validateField,
  resetValidation,
  reset,
  focus: () => inputRef.value?.focus(),
});
</script>
