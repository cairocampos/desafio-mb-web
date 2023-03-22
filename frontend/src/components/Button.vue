<template>
  <button @click="onClick()" :class="['btn', `btn-${variant}`]" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
const VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary"
}
</script>

<script setup>
defineProps({
  variant: {
    type: String,
    default: VARIANTS.PRIMARY
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits('click')

const onClick = () => {
  emit('click')
}

</script>

<style lang="scss" scoped>
@import '../styles/scss/variables.scss';
.btn {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: all .3s ease-in-out;
  outline: none;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  &-primary {
    background-color: $primary;
    color: #FAFAFA;
    &:hover {
      background-color: $primary-dark;
    }
  }
  &-secondary {
    color: $primary;
    border-color: $primary;
    background-color: $white;
    &:hover {
      background-color: $primary;
      border-color: transparent;
      color: $light;
    }
  }
  &[disabled] {
    cursor: not-allowed;
    background-color: $button-disabled-bg;
    color: $light;
  }
}

</style>