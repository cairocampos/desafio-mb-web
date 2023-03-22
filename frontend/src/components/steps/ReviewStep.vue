<template>
  <div class="content">
    <h1>Revise suas informações</h1>
    <BasicInformationForm :show-set-type="false"/>
    <PersonalDataForm/>
    <PasswordForm/>
    <div class="button-actions">
      <Button variant="secondary" @click="stepStore.setPreviousStep()">Voltar</Button>
      <Button :disabled="!formIsValid" @click="submit()">Cadastrar</Button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { api } from '../../api';
import { useStepStore } from '../../store/stepStore';
import { useStepValidation } from '../../store/stepValidationStore';
import Button from '../Button.vue';
import BasicInformationForm from './forms/BasicInformationForm.vue';
import PasswordForm from './forms/PasswordForm.vue';
import PersonalDataForm from './forms/PersonalDataForm.vue';

const stepStore = useStepStore()
const stepValidation = useStepValidation()

const formIsValid = computed(() => !stepValidation.result.$invalid);

const submit = async () => {
  if(!formIsValid.value) return;

  try {
    const response = await api.post('/registration', stepStore.form);
    if(!response.ok) {
      throw new Error(await response.text());
    }
    await response.json();
    stepStore.reset();
    alert('Usuário registrado com sucesso.')

  } catch(error) {
    alert('Ocorreu um erro, tente novamente mais tarde.')
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