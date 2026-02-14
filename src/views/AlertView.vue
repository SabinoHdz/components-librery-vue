<template>
  <main class="max-w-6xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold mb-8 text-text-primary">Alert Component</h1>

    <!-- SECCIÓN 1: Colores -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Colores</h2>
      <div class="space-y-3">
        <v-alert
          color="primary"
          title="Primary"
          message="Esta es una alerta informativa principal."
        />
        <v-alert color="secondary" title="Secondary" message="Esta es una alerta secundaria." />
        <v-alert color="accent" title="Accent" message="Esta es una alerta destacada especial." />
        <v-alert
          color="success"
          title="Success"
          message="¡Tu operación se completó exitosamente!"
        />
        <v-alert
          color="warning"
          title="Warning"
          message="Atención: Revisa esta información importante."
        />
        <v-alert
          color="error"
          title="Error"
          message="Ha ocurrido un error. Por favor, inténtalo de nuevo."
        />
        <v-alert color="info" title="Info" message="Aquí hay información útil para ti." />
      </div>
    </section>

    <!-- SECCIÓN 2: Variants -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Variantes</h2>
      <div class="space-y-3">
        <v-alert
          variant="solid"
          color="success"
          title="Solid"
          message="Fondo sólido - más prominente"
        />
        <v-alert
          variant="soft"
          color="info"
          title="Soft"
          message="Fondo semi-transparente - recomendado"
        />
        <v-alert
          variant="outline"
          color="warning"
          title="Outline"
          message="Solo borde - más sutil"
        />
        <v-alert
          variant="bordered"
          color="error"
          title="Bordered"
          message="Borde izquierdo grueso - estilo banner"
        />
      </div>
    </section>

    <!-- SECCIÓN 3: Con título y descripción -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Con Título y Descripción</h2>
      <div class="space-y-3">
        <v-alert color="success" variant="soft">
          <template #title>¡Pedido confirmado!</template>
          Tu compra ha sido procesada exitosamente. Recibirás un email de confirmación en breve.
        </v-alert>
        <v-alert color="info" variant="bordered">
          <template #title>Nueva actualización disponible</template>
          Hay una nueva versión de la aplicación. Te recomendamos actualizar para obtener las
          últimas mejoras y correcciones.
        </v-alert>
      </div>
    </section>

    <!-- SECCIÓN 4: Con acciones -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Con Botones de Acción</h2>
      <div class="space-y-3">
        <v-alert color="warning" variant="soft">
          <template #title>No has verificado tu email</template>
          Para acceder a todas las funciones, por favor verifica tu dirección de correo electrónico.
          <template #actions>
            <v-button variant="soft" color="warning" size="sm">Reenviar email</v-button>
            <v-button variant="ghost" color="warning" size="sm">Más tarde</v-button>
          </template>
        </v-alert>
        <v-alert color="error" variant="bordered">
          <template #title>Error de conexión</template>
          No se pudo conectar al servidor. Verifica tu conexión a internet e intenta nuevamente.
          <template #actions>
            <v-button variant="solid" color="error" size="sm">Reintentar</v-button>
            <v-button variant="ghost" color="error" size="sm">Cancelar</v-button>
          </template>
        </v-alert>
      </div>
    </section>

    <!-- SECCIÓN 5: Dismissible -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Dismissible (con botón cerrar)</h2>
      <div class="space-y-3">
        <v-alert
          v-if="alert1Visible"
          color="info"
          variant="soft"
          dismissible
          @dismiss="alert1Visible = false"
        >
          <template #title>Cookies</template>
          Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra
          política de cookies.
        </v-alert>
        <v-alert
          v-if="alert2Visible"
          color="success"
          variant="bordered"
          dismissible
          @dismiss="alert2Visible = false"
        >
          <template #title>¡Bienvenido de nuevo!</template>
          Es bueno verte de nuevo. Hay 3 mensajes nuevos esperándote.
        </v-alert>
        <v-button @click="resetAlerts" size="sm" variant="outline"
          >Restaurar alerts cerradas</v-button
        >
      </div>
    </section>

    <!-- SECCIÓN 6: Dense y Rounded -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Dense y Rounded (Quasar)</h2>
      <div class="space-y-3">
        <v-alert
          color="primary"
          variant="soft"
          dense
          title="Dense Alert"
          message="Versión compacta con menos padding"
        />
        <v-alert
          color="secondary"
          variant="soft"
          rounded
          title="Rounded Alert"
          message="Esquinas muy redondeadas"
        />
        <v-alert
          color="accent"
          variant="soft"
          dense
          rounded
          title="Dense + Rounded"
          message="Combinación de ambos modificadores"
        />
      </div>
    </section>

    <!-- SECCIÓN 7: Inline Actions -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Inline Actions (Quasar)</h2>
      <div class="space-y-3">
        <v-alert color="warning" variant="bordered" inline-actions>
          <template #title>Suscripción por vencer</template>
          Tu suscripción vence en 3 días.
          <template #actions>
            <v-button variant="solid" color="warning" size="sm">Renovar ahora</v-button>
            <v-button variant="ghost" color="warning" size="sm">Recordar después</v-button>
          </template>
        </v-alert>
      </div>
    </section>

    <!-- SECCIÓN 8: Tamaños -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Tamaños</h2>
      <div class="space-y-3">
        <v-alert
          size="xs"
          color="info"
          variant="soft"
          title="Extra Small"
          message="Tamaño XS - muy compacto"
        />
        <v-alert
          size="sm"
          color="info"
          variant="soft"
          title="Small"
          message="Tamaño SM - pequeño"
        />
        <v-alert
          size="md"
          color="info"
          variant="soft"
          title="Medium"
          message="Tamaño MD - mediano (default)"
        />
        <v-alert
          size="lg"
          color="success"
          variant="soft"
          title="Large"
          message="Tamaño LG - grande"
        />
        <v-alert
          size="xl"
          color="primary"
          variant="soft"
          title="Extra Large"
          message="Tamaño XL - extra grande"
        />
      </div>
    </section>

    <!-- SECCIÓN 9: Sin icono -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Sin Icono</h2>
      <div class="space-y-3">
        <v-alert
          color="info"
          variant="soft"
          :icon="false"
          title="Alert sin icono"
          message="Este alert no muestra icono."
        />
        <v-alert color="success" variant="bordered" :icon="false">
          También puedes usar alerts sin icono para un diseño más limpio y minimalista.
        </v-alert>
      </div>
    </section>

    <!-- SECCIÓN 10: Iconos personalizados -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Iconos Personalizados</h2>
      <div class="space-y-3">
        <v-alert color="accent" variant="soft">
          <template #icon>
            <v-icon name="star" size="md" />
          </template>
          <template #title>¡Nueva función!</template>
          Descubre las últimas características que hemos agregado para ti.
        </v-alert>
        <v-alert color="primary" variant="bordered">
          <template #icon>
            <v-icon name="notifications" size="md" />
          </template>
          <template #title>3 notificaciones nuevas</template>
          Tienes mensajes sin leer. Haz clic para verlos.
        </v-alert>
      </div>
    </section>

    <!-- SECCIÓN 11: Casos de uso reales -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-text-primary">Casos de Uso Reales</h2>
      <div class="space-y-3">
        <!-- Error con retry -->
        <v-alert color="error" variant="soft" dismissible @dismiss="() => {}">
          <template #title>Error al cargar los datos</template>
          No se pudieron cargar los datos del servidor. Por favor, verifica tu conexión e intenta
          nuevamente.
          <template #actions>
            <v-button variant="solid" color="error" size="sm">
              <v-icon name="refresh" size="sm" />
              Reintentar
            </v-button>
          </template>
        </v-alert>

        <!-- Success con continue -->
        <v-alert color="success" variant="bordered">
          <template #icon>
            <v-icon name="task_alt" size="md" />
          </template>
          <template #title>¡Configuración guardada!</template>
          Tus cambios se han guardado exitosamente.
          <template #actions>
            <v-button variant="solid" color="success" size="sm">Continuar</v-button>
          </template>
        </v-alert>

        <!-- Warning con learn more -->
        <v-alert color="warning" variant="soft" inline-actions>
          <template #title>Modo de mantenimiento programado</template>
          El sistema estará en mantenimiento el domingo de 2:00 AM a 4:00 AM.
          <template #actions>
            <v-button variant="ghost" color="warning" size="sm">Saber más</v-button>
          </template>
        </v-alert>

        <!-- Info banner style -->
        <v-alert color="info" variant="bordered" rounded dense inline-actions>
          Estamos mejorando nuestra aplicación. Comparte tu feedback.
          <template #actions>
            <v-button variant="solid" color="info" size="xs">Dar feedback</v-button>
            <v-button variant="ghost" color="info" size="xs">Ahora no</v-button>
          </template>
        </v-alert>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VAlert from '@/components/ui/alert/VAlert.vue';
import VButton from '@/components/ui/button/VButton.vue';
import VIcon from '@/components/ui/icon/VIcon.vue';

// Estado para alerts dismissible
const alert1Visible = ref(true);
const alert2Visible = ref(true);

const resetAlerts = () => {
  alert1Visible.value = true;
  alert2Visible.value = true;
};
</script>
