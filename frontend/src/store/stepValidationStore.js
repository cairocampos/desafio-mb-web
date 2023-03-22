import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue"
import useValidate from "vue-tiny-validate";
import { useStepStore } from "./stepStore";

export const useStepValidation = defineStore('stepValidation', () => {

  const isRequired = {
    name: 'required',
    test: (value) => Boolean(value),
    message: 'campo obrigatório'
  }

  const stepStore = useStepStore()

  const rules = reactive({
    name: isRequired,
    email: [
      isRequired, 
      {
        name: 'email',
        test: (value) => value.includes('@'),
        message: 'informe um email válido'
      }
    ],
    cpf_cnpj: isRequired,
    birthdate: isRequired,
    phone_number: isRequired,
    type: isRequired,
    password: [
      isRequired,
      {
        name: 'minLength',
        test: val => val.length >= 8,
        message: 'campo precisa ter no mínimo 8 digitos'
      }
    ],
  })

  const { result } = useValidate(stepStore.form, rules);

  result.value.$test()

  return {
    result
  }
})