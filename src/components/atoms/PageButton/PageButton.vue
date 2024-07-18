<template>
  <button :class="className" @click="emit('handleClick')">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { PageButtonVariant } from './PageButton'

interface PageButtonProps {
  variant: PageButtonVariant
  withIcon?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<PageButtonProps>(), {
  variant: PageButtonVariant.PRIMARY
})

const emit = defineEmits<{
  (e: 'handleClick'): void
}>()

const className = computed(() => [
  'page-button',
  `page-button--${props.variant}`,
  { 'page-button--with-icon': props.withIcon, 'page-button--full-width': props.fullWidth }
])
</script>
<style lang="scss" scoped>
@use '@/styles/_sfc' as *;

.page-button {
  font-family: $font-spartan;
  font-weight: 700;
  font-size: rem(12);
  line-height: calc(15 / 12);
  letter-spacing: -0.25px;
  border-radius: 24px;
  padding: 17px 24px 16px;
  transition: all 0.3s ease-in;

  &--primary {
    background-color: $color-purple-alpha;
    color: $color-white;

    &:hover {
      background-color: $color-purple-beta;
    }
  }

  &--secondary {
    background-color: var(--color-btn-bg-alpha);
    color: var(--color-btn-txt-alpha);

    &:hover {
      background-color: var(--color-btn-bg-beta);
    }
  }

  &--tertiary {
    background-color: $color-grey-alpha;
    color: var(--color-btn-txt-beta);

    &:hover {
      background-color: var(--color-btn-bg-gamma);
    }
  }

  &--quaternary {
    background-color: $color-orange-alpha;
    color: $color-white;

    &:hover {
      background-color: $color-orange-beta;
    }
  }

  &--quinary {
    background-color: $color-purple-epsilon;
    color: $color-purple-gamma;

    &:hover {
      background-color: $color-purple-delta;
    }
  }

  &--with-icon {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &--full-width {
    width: 100%;
  }
}
</style>
