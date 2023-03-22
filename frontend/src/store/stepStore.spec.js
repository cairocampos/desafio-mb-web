import { setActivePinia, createPinia } from 'pinia'
import { useStepStore } from '../store/stepStore'

describe('Step Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('previous step', () => {
    const stepStore = useStepStore()
    expect(stepStore.currentStep).toBe(1)
    stepStore.setPreviousStep()
    expect(stepStore.currentStep).toBe(1)

    stepStore.currentStep = 3;
    expect(stepStore.currentStep).toBe(2)
  })
})