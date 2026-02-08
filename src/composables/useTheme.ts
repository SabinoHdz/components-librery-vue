import { ref, onMounted, watch, computed, readonly } from 'vue';

export type Theme = 'light' | 'dark';

// Constantes
const STORAGE_KEY = 'theme';
const VALID_THEMES: Theme[] = ['light', 'dark'];
const DEFAULT_THEME: Theme = 'light';
const DOM_DARK_CLASS = 'dark';

// Estado reactivo (privado)
const theme = ref<Theme>(DEFAULT_THEME);
const isDark = computed<boolean>(() => theme.value === 'dark');

/**
 * Composable para gestionar el tema de la aplicación
 * Soporta persistencia en localStorage y sincronización con el DOM
 */
export function useTheme() {
  /**
   * Valida que un valor sea un tema válido
   */
  const isValidTheme = (value: unknown): value is Theme => {
    return typeof value === 'string' && VALID_THEMES.includes(value as Theme);
  };

  /**
   * Aplica el tema al DOM manipulando la clase en el elemento raíz
   */
  const applyTheme = (newTheme: Theme): void => {
    const htmlElement = document.documentElement;

    if (newTheme === 'dark') {
      htmlElement.classList.add(DOM_DARK_CLASS);
    } else {
      htmlElement.classList.remove(DOM_DARK_CLASS);
    }
  };

  /**
   * Carga el tema guardado del localStorage
   */
  const loadSavedTheme = (): Theme | undefined => {
    if (typeof window === 'undefined') return undefined;

    const savedTheme = localStorage.getItem(STORAGE_KEY);
    return isValidTheme(savedTheme) ? savedTheme : undefined;
  };

  /**
   * Guarda el tema en localStorage
   */
  const saveTheme = (newTheme: Theme): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newTheme);
    }
  };

  /**
   * Inicialización: carga tema guardado o usa por defecto
   */
  onMounted(() => {
    const savedTheme = loadSavedTheme();
    const initialTheme = savedTheme ?? DEFAULT_THEME;

    theme.value = initialTheme;
    applyTheme(initialTheme);
  });

  /**
   * Sincroniza cambios de tema con localStorage y DOM
   */
  watch(theme, (newTheme) => {
    applyTheme(newTheme);
    saveTheme(newTheme);
  });

  /**
   * Alterna entre los dos temas disponibles
   */
  const toggleTheme = (): void => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };

  /**
   * Establece el tema específico
   */
  const setTheme = (newTheme: Theme): void => {
    if (isValidTheme(newTheme)) {
      theme.value = newTheme;
    } else {
      console.warn(`Tema inválido: ${newTheme}. Usa "light" o "dark".`);
    }
  };

  return {
    // Estado reactivo (readonly para evitar mutaciones directas)
    theme: readonly(theme),
    isDark,

    // Métodos
    toggleTheme,
    setTheme,
  };
}
