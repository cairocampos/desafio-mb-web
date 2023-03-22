import { defineStore } from "pinia";
import { computed, ref } from "vue"

export const useStepStore = defineStore('stepStore', () => {
  const currentStep = ref(1);

  const form = ref({
    email: "",
    type: "",
    password: "",
    name: "",
    cpf_cnpj: "",
    birthdate: "",
    phone_number: "",
  })

  const setPreviousStep = () => {
    if(currentStep.value > 1) {
      currentStep.value--;
    }
  }

  const isPhysicalType = computed(() => form.value.type === 'PF')

  const reset = () => {
    currentStep.value = 1;
    form.value = {
      email: "",
      type: "",
      password: "",
      name: "",
      cpf_cnpj: "",
      birthdate: "",
      phone_number: "",
    }
  }

  return {
    currentStep,
    setPreviousStep,
    isPhysicalType,
    form,
    reset
  }
})