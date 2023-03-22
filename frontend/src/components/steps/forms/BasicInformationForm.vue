<template>
  <TextField
      v-model="stepStore.form.email"
      label="Endereço de e-mail"
      required
      :validator="stepValidation.result.email"
    />

  <div v-if="showSetType" class="form-group">
    <div class="radio">
      <input
        v-model="stepStore.form.type"
        type="radio"
        id="radio-1"
        @change="stepValidation.result.type.$test()"
        value="PF" />
      <label for="radio-1">Pessoa Física</label>
    </div>

    <div class="radio">
      <input
        v-model="stepStore.form.type"
        type="radio"
        id="radio-2"
        @change="stepValidation.result.type.$test()"
        value="PJ" />
      <label for="radio-2">Pessoa Jurídica</label>
    </div>
  </div>
</template>

<script setup>
import { useStepStore } from '../../../store/stepStore';
import { useStepValidation } from '../../../store/stepValidationStore';
import TextField from '../../TextField.vue';

defineProps({
  showSetType: {
    type: Boolean,
    default: true
  }
})

const stepStore = useStepStore()
const stepValidation = useStepValidation()
</script>

<style lang="scss" scoped>
.form-group {
  display: flex;
  gap: 1rem;
  .radio {
    display: flex;
    align-items: center;
    input {
      margin-left: 0;
    }
  }
}
</style>