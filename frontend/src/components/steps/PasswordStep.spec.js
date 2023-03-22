import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, expect, it, describe } from 'vitest'
import PasswordStep from './PasswordStep.vue'
import {useStepStore} from '../../store/stepStore'
import {useStepValidation} from '../../store/stepValidationStore'

describe('PasswordStep', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render title', () => {
    const wrapper = mount(PasswordStep)

    expect(wrapper.find('h1').text()).toBe('Senha de acesso');
  })

  it('should disable next button when form is invalid', () => {
    const wrapper = mount(PasswordStep)

    const buttonNextStep = wrapper.findComponent('.next')

    expect(buttonNextStep.exists()).toBeTruthy()
    expect(buttonNextStep.vm.disabled).toBeTruthy()
  })

  it('when password length is lower than 8 next button should be disabled', async () => {
    const wrapper = mount(PasswordStep)

    const stepStore = useStepStore();
    const stepValidationStore = useStepValidation();
    stepStore.form.password = '1'.repeat(5)
    stepValidationStore.result.password.$test()

    const buttonNextStep = await wrapper.findComponent('.next')

    expect(buttonNextStep.exists()).toBeTruthy()

    expect(buttonNextStep.vm.disabled).toBeTruthy()
  })

  it('should not disable next button when form is valid', async () => {
    const wrapper = mount(PasswordStep)

    const stepStore = useStepStore();
    const stepValidationStore = useStepValidation();
    stepStore.form.password = '1'.repeat(8)
    stepValidationStore.result.password.$test()

    const buttonNextStep = await wrapper.findComponent('.next')

    expect(buttonNextStep.exists()).toBeTruthy()

    expect(buttonNextStep.vm.disabled).toBeFalsy()
  })
})