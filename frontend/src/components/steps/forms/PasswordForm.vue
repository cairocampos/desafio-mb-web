<template>
  <TextField
    v-model="stepStore.form.password"
    label="Sua senha"
    type="password"
    required
    :validator="stepValidation.result.password"
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