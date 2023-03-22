<template>
  <div class="content">
    <h1>Seja bem vindo(a)</h1>
    <BasicInformationForm />
    <Button :disabled="!formIsValid" @click="goToNextStep()">Continuar</Button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStepStore } from '../../store/stepStore';
import { useStepValidation } from '../../store/stepValidationStore';
import Button from '../Button.vue';
import BasicInformationForm from './forms/BasicInformationForm.vue';

const stepStore = useStepStore()
const stepValidation = useStepValidation()

const formIsValid = computed(() => {
  return !stepValidation.result.email.$invalid
    && !stepValidation.result.type.$invalid
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
}
</style>