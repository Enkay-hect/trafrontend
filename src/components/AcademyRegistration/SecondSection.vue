<template>
  <div
    class="bg-white rounded-2xl shadow-xl w-full max-w-3xl mx-auto
            flex flex-col"
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
            <input type="radio" value="Frontend Development" v-model="store.courseDetails.course_of_interest" />
                Frontend Development
          </label>

          <label class="flex items-center gap-3">
            <input type="radio" value="Backend Development" v-model="store.courseDetails.course_of_interest" />
                Backend Development
          </label>

          <label class="flex items-center gap-3">
            <input type="radio" value="Mobile App Development" v-model="store.courseDetails.course_of_interest" />
             Mobile App Development
          </label>

          <label class="flex items-center gap-3">
            <input type="radio" value="UI/UX" v-model="store.courseDetails.course_of_interest" />
                UI/UX
          </label>

          <label class="flex items-center gap-3">
            <input type="radio" value="Data Analytics" v-model="store.courseDetails.course_of_interest" />
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
            <input type="radio" value="virtual" v-model="store.courseDetails.learning_mode" />
            Virtual
          </label>

          <label class="flex items-center gap-3">
            <input type="radio" value="physical" v-model="store.courseDetails.learning_mode" />
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
            <input type="radio" value="morning" v-model="store.courseDetails.class_schedule" />
            Morning: 9am – 12noon
          </label>

          <label class="flex items-center gap-3">
            <input type="radio" value="afternoon" v-model="store.courseDetails.class_schedule" />
            Afternoon: 1pm – 4pm
          </label>
        </div>
      </div>


      <!-- student type -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-3">
          Student Type <span class="text-red-500">*</span>
        </label>

        <div class="space-y-3">
          <label class="flex items-center gap-3">
            <input type="radio" value="regular" v-model="store.courseDetails.student_type" />
            Regular
          </label>

          <label class="flex items-center gap-3">
            <input type="radio" value="IT" v-model="store.courseDetails.student_type" />
            IT
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
