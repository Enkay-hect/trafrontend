<template>
  <div
    class="bg-white rounded-2xl shadow-xl w-full max-w-3xl mx-auto
           max-h-[calc(100vh-120px)] flex flex-col"
  >
    <div class="px-6 py-4 border-b">
      <p class="text-sm text-gray-500">Step 2 of 4</p>
      <h2 class="text-xl font-semibold text-gray-900">Course Details</h2>
    </div>

    <div class="px-6 py-6 space-y-8 ">

      <!-- Course of Interest -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-3">
          Course of Interest <span class="text-red-500">*</span>
        </label>

        <div class="space-y-3">
          <label class="flex items-center gap-3">
            <input type="radio" value="Frontend Development" v-model="store.courseDetails.courseInterest" />
                Frontend Development
          </label>

          <label class="flex items-center gap-3">
            <input type="radio" value="Backend Development" v-model="store.courseDetails.courseInterest" />
                Backend Development
          </label>

          <label class="flex items-center gap-3">
            <input type="radio" value="Mobile App Development" v-model="store.courseDetails.courseInterest" />
             Mobile App Development
          </label>

          <label class="flex items-center gap-3">
            <input type="radio" value="UI/UX" v-model="store.courseDetails.courseInterest" />
                UI/UX
          </label>

          <label class="flex items-center gap-3">
            <input type="radio" value="Data Analytics" v-model="store.courseDetails.courseInterest" />
                Data Analytics
          </label>
        </div>
      </div>

      <!-- Learning Mode -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-3">
          Preferred learning mode <span class="text-red-500">*</span>
        </label>

        <div class="space-y-3">
          <label class="flex items-center gap-3">
            <input type="radio" value="Virtual" v-model="store.courseDetails.learningMode" />
            Virtual
          </label>

          <label class="flex items-center gap-3">
            <input type="radio" value="Physical" v-model="store.courseDetails.learningMode" />
            Physical
          </label>
        </div>
      </div>

      <!-- Class Schedule -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-3">
          Preferred class schedule <span class="text-red-500">*</span>
        </label>

        <div class="space-y-3">
          <label class="flex items-center gap-3">
            <input type="radio" value="Morning" v-model="store.courseDetails.classSchedule" />
            Morning: 9am – 12noon
          </label>

          <label class="flex items-center gap-3">
            <input type="radio" value="Afternoon" v-model="store.courseDetails.classSchedule" />
            Afternoon: 1pm – 4pm
          </label>
        </div>
      </div>

    </div>

    
  </div>
</template>

<script setup>
import { useRegistrationStore } from '@/stores/UserRegistrationStore.js'

const store = useRegistrationStore()

// defineEmits(['next', 'prev'])
</script>

<style>

</style>
