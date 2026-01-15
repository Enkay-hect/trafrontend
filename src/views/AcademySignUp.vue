<template>
  <div class="mt-10 mb-10">

    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">

      <p class="text-sm text-gray-500 mb-4">
        Step {{ store.step }} of 4
      </p>

      <StepOne v-if="store.step === 1" />
      <StepTwo v-if="store.step === 2" />
      <StepThree v-if="store.step === 3" />
      <StepFour v-if="store.step === 4" />

      <div class="flex justify-between mt-10">
        <button
          v-if="store.step > 1"
          @click="store.prevStep()"
          class="px-6 py-3 rounded-lg border border-gray-300"
        >
          Back
        </button>

        <button
          v-if="store.step < 4"
          :disabled="!store.canProceed"
          @click="store.nextStep()"
          class="ml-auto px-8 py-3 rounded-lg bg-blue-600 text-white"
        >
          Next
        </button>

        <button
          v-if="store.step === 4"
          class="ml-auto px-8 py-3 rounded-lg bg-green-600 text-white hidden"
        >
          Submit
        </button>
      </div>

    </div>
  </div>

  <Footer />
</template>


<script setup>
import { ref } from 'vue'
import Footer from '@/components/FootComponent/Footer.vue';


import StepOne from '@/components/AcademyRegistration/FirstSection.vue'
import StepTwo from '@/components/AcademyRegistration/SecondSection.vue'
import StepThree from '@/components/AcademyRegistration/ThirdSection.vue'
import StepFour from '@/components/AcademyRegistration/SectionFour.vue'

import { useRegistrationStore } from '@/stores/UserRegistrationStore.js'


const store = useRegistrationStore()

const currentStep = ref(1)

const nextStep = () => {
  if (currentStep.value < 4) currentStep.value++
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
}
</script>




<style>

</style>