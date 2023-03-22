<template>
  <div class="content">
    <h1>Seja bem vindo(a)</h1>
    <PersonalDataForm />
    <div class="button-actions">
      <Button variant="secondary" @click="stepStore.setPreviousStep()">Voltar</Button>
      <Button :disabled="!formIsValid" @click="goToNextStep()">Continuar</Button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStepStore } from '../../store/stepStore';
import { useStepValidation } from '../../store/stepValidationStore';
import Button from '../Button.vue';
import PersonalDataForm from './forms/PersonalDataForm.vue';

const stepStore = useStepStore()
const stepValidation = useStepValidation()

const formIsValid = computed(() => {
  return !stepValidation.result.name.$invalid
    && !stepValidation.result.cpf_cnpj.$invalid
    && !stepValidation.result.birthdate.$invalid
    && !stepValidation.result.phone_number.$invalid
});

const goToNextStep = () => {
  if(formIsValid.value) {
    stepStore.currentStep++;
  }
}

</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  .button-actions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
</style>