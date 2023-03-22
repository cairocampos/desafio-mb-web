import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import Button from './Button.vue'

describe('PasswordStep', () => {
  it('should emit click', async () => {
    const wrapper = mount(Button)

    const buttonElement = wrapper.find('button')
    await buttonElement.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('click')
  })
})