<template>
  <span :class="badgeClass">
    <slot>Badge</slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { BadgeProps } from './badge';
import { badgeVariants } from './badge.variants';

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'solid',
  color: 'primary',
  size: 'md',
});

const badgeClass = computed(() =>
  badgeVariants({
    variant: props.variant,
    color: props.color,
    size: props.size,
  }),
);
</script>
