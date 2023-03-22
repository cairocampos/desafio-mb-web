<template>
  <div :class="['input-wrapper', {error}]">
    <label>{{ label }} <span v-if="required" class="required">*</span></label>
    <input
      v-model="value"
      :type="type"
      v-maska
      :data-maska="mask"
      @blur="onBlur"
      @input="onInput"
    />
    <span v-if="error" class="text-error">
      {{ error }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { vMaska } from "maska"

const props = defineProps({
  modelValue: {
    type: String,
    required:true
  },
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  required: {
    type: Boolean,
    default: false
  },
  mask: {
    type: [Array, Object, String],
    required:false
  },
  validator: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const validate = () => {
  if (props.validator) {
    !props.validator?.$dirty && props.validator.$touch();
    props.validator.$test();
  }
};

const onBlur = () => validate()

const onInput = () => validate()

const error = computed(() => {
  if (props.validator?.$dirty) {
    return props.validator?.$messages?.[0] || "";
  }
  return "";
});

</script>

<style lang="scss" scoped>
@import '../styles/scss/variables.scss';

.input-wrapper {
  label {
    font-size: 1rem;
    display: block;
    margin-bottom: .2rem;
    .required {
      color: $danger;
    }
  }
  input {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: $input-text-color;
    background-color: $light;
    background-clip: padding-box;
    border: 1px solid $input-border-color;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s;
    outline: none;
    &:focus {
      border-color: $input-focus-border-color;
    }
  }
  &.error {
    input {
      border-color: $danger;
    }
    .text-error {
      color: $danger;
    }

  }
}
</style>