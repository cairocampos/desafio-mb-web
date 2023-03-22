<template>
  <div class="container">
    <h4>Etapa <span class="step">{{ currentStep.step }}</span> de {{ totalSteps }}</h4>
    <KeepAlive>
      <Transition name="slide-fade" mode="out-in">
        <component
          :is="currentStep.component"
        />
      </Transition>
    </KeepAlive>
  </div>
</template>

<script setup>
import { shallowRef, ref, computed, onMounted, watch } from 'vue';
import BasicInformationStep from './components/steps/BasicInformationStep.vue'
import PersonalDataStep from './components/steps/PersonalDataStep.vue'
import PasswordStep from './components/steps/PasswordStep.vue'
import ReviewStep from './components/steps/ReviewStep.vue'
import { useStepStore } from './store/stepStore';

const steps = [
  {
    step: 1,
    component: shallowRef(BasicInformationStep),
  },
  {
    step: 2,
    component: shallowRef(PersonalDataStep),
  },
  {
    step: 3,
    component: shallowRef(PasswordStep),
  },
  {
    step: 4,
    component: shallowRef(ReviewStep),
  }
]

const currentStep = ref(steps[0]);
const totalSteps = computed(() => steps.length)
const stepStore = useStepStore();
const setStep = () => {
  currentStep.value = steps.find(step => step.step === stepStore.currentStep)
}

watch(() => stepStore.currentStep, () => {
  setStep()
});

onMounted(() => {
  setStep();
})

</script>

<style lang="scss" scoped>
@import "./styles/scss/variables.scss";
.container {
  max-width: 380px;
  width: 100%;
  margin: 0 auto;
  .step {
    color: $primary;
  }

  .content {
    width: 100%;
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>