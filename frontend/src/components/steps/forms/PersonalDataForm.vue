<template>
  <TextField
    v-model="stepStore.form.name"
    label="Nome"
    required
    :validator="stepValidation.result.name"
  />

  <TextField
    v-model="stepStore.form.cpf_cnpj"
    :label="stepStore.isPhysicalType ? 'CPF' : 'CNPJ'"
    :mask="stepStore.isPhysicalType ? '###.###.###-##' : '##.###.###\\####-##'"
    required
    :validator="stepValidation.result.cpf_cnpj"
  />

  <TextField
    v-model="stepStore.form.birthdate"
    :label="stepStore.isPhysicalType ? 'Data de nascimento' : 'Data de abertura'"
    required
    :validator="stepValidation.result.birthdate"
    type="date"
  />

  <TextField
    v-model="stepStore.form.phone_number"
    label="Telefone"
    mask="(##) # ####-####"
    required
    :validator="stepValidation.result.phone_number"
  />
</template>

<script setup>
import { useStepStore } from '../../../store/stepStore';
import { useStepValidation } from '../../../store/stepValidationStore';
import TextField from '../../TextField.vue';

const stepStore = useStepStore()
const stepValidation = useStepValidation()

</script>

<style lang="scss" scoped>

</style>