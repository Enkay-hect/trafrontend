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
          :disabled="!store.canProceed || apiStore.submitting"
          @click="store.nextStep()"
          class="ml-auto px-8 py-3 rounded-lg bg-blue-600 text-white"
        >
          Next
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

import { RegistrationApiStore } from '@/stores/RegistrationApiStore.js'

const apiStore = RegistrationApiStore()


const store = useRegistrationStore()

const currentStep = ref(1)


const submitStep1 = async () => {
  if (!store.canProceed) return

  try {
    await apiStore.submitStep1(store.personalInfo)
    store.nextStep() // ✅ ONLY here
  } catch (e) {
    // handle validation errors
  }
}

const handleNext = async () => {
  if (!store.canProceed) return

  if (store.step === 1) {
    await submitStep1()

    // Only move forward if API succeeded
    if (!apiStore.error) {
      store.nextStep()
    }
  } else {
    store.nextStep()
  }
}
</script>




<style>

</style>