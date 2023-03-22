import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, expect, it, describe } from 'vitest'
import BasicInformationStep from './BasicInformationStep.vue'
import {useStepStore} from '../../store/stepStore'
import {useStepValidation} from '../../store/stepValidationStore'
import Button from '../Button.vue'

describe('BasicInformationStep', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render title', () => {
    const wrapper = mount(BasicInformationStep)

    expect(wrapper.find('h1').text()).toBe('Seja bem vindo(a)');
  })

  it('should disable next button when form is invalid', () => {
    const wrapper = mount(BasicInformationStep)

    const buttonNextStep = wrapper.findComponent(Button)

    expect(buttonNextStep.exists()).toBeTruthy()
    expect(buttonNextStep.vm.disabled).toBeTruthy()
  })

  it('when email is invalid next button should be disabled', async () => {
    const wrapper = mount(BasicInformationStep)

    const stepStore = useStepStore();
    const stepValidationStore = useStepValidation();
    stepStore.form.email = 'invalid_email'
    stepValidationStore.result.email.$test()

    const buttonNextStep = await wrapper.findComponent(Button)

    expect(buttonNextStep.exists()).toBeTruthy()

    expect(buttonNextStep.vm.disabled).toBeTruthy()
  })

  it('should not disable next button when form is valid', async () => {
    const wrapper = mount(BasicInformationStep)

    const stepStore = useStepStore();
    const stepValidationStore = useStepValidation();
    stepStore.form.email = 'email@example.com'
    stepStore.form.type = 'PF'
    stepValidationStore.result.$test()

    const buttonNextStep = await wrapper.findComponent(Button)

    expect(buttonNextStep.exists()).toBeTruthy()

    expect(buttonNextStep.vm.disabled).toBeFalsy()
  })
})