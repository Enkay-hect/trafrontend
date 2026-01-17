<template>
    <section class="h-full flex flex-col bg-gray-50 rounded-xl border border-gray-200">
  <div class="px-6 py-4 border-b bg-white rounded-t-xl">
    <h2 class="text-2xl font-semibold text-gray-800">Course Packages</h2>
    <p class="text-gray-600 mt-1">Select the packages you want to enroll in</p>
  </div>

  <div class="flex-1 overflow-y-auto px-6 py-6 space-y-6">

    <!-- Frontend -->
    <div v-if="store.courseDetails.course_of_interest === 'Frontend Development'" class="bg-white rounded-lg shadow-sm border p-6">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Frontend Development (6 Months)</h3>

      <div class="space-y-3">
        <label class="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            class="mt-1"
            :checked="store.selectedPackages.includes('web_fundamentals')"
            @change="store.togglePackage('web_fundamentals')"
          />
          <span>
            <span class="font-medium">Web Fundamentals/Framework</span>
            <span class="block text-sm text-gray-500">HTML, CSS, Tailwind, JavaScript, React/Vue – ₦150,000</span>
          </span>
        </label>

        <label class="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            class="mt-1"
            :checked="store.selectedPackages.includes('Web_Basics')"
            @change="store.togglePackage('Web_Basics')"
          />
          <span>
            <span class="font-medium">Web Basics</span>
            <span class="block text-sm text-gray-500">HTML, CSS, Tailwind/Bootstrap – ₦50,000</span>
          </span>
        </label>

        <label class="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            class="mt-1"
            :checked="store.selectedPackages.includes('JavaScript_TypeScript')"
            @change="store.togglePackage('JavaScript_TypeScript')"
          />
          <span>
            <span class="font-medium">JavaScript / TypeScript</span>
            <span class="block text-sm text-gray-500">₦50,000</span>
          </span>
        </label>

        <label class="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            class="mt-1"
            :checked="store.selectedPackages.includes('Frameworks')"
            @change="store.togglePackage('Frameworks')"
          />
          <span>
            <span class="font-medium">Vue.js / React.js</span>
            <span class="block text-sm text-gray-500">₦50,000</span>
          </span>
        </label>
      </div>
    </div>

    <!-- Backend -->
    <div v-if="store.courseDetails.course_of_interest === 'Backend Development'" class="bg-white rounded-lg shadow-sm border p-6">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Backend Development (4 Months)</h3>
      <div class="space-y-3">
        <label class="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            class="mt-1"
            :checked="store.selectedPackages.includes('PHP/JavaScript_Fundamentals')"
            @change="store.togglePackage('PHP/JavaScript_Fundamentals')"
          />
          <span>
            <span class="font-medium">PHP / Javascript Fundamentals</span>
            <span class="block text-sm text-gray-500">₦20,000</span>
          </span>
        </label>

        <label class="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            class="mt-1"
            :checked="store.selectedPackages.includes('Laravel_Node.js_ExpressJS')"
            @change="store.togglePackage('Laravel_Node.js_ExpressJS')"
          />
          <span>
            <span class="font-medium">Laravel / Node.js (Express)</span>
            <span class="block text-sm text-gray-500">₦60,000</span>
          </span>
        </label>

        <label class="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            class="mt-1"
            :checked="store.selectedPackages.includes('Databases')"
            @change="store.togglePackage('Databases')"
          />
          <span>
            <span class="font-medium">MySQL / MongoDB</span>
            <span class="block text-sm text-gray-500">₦20,000</span>
          </span>
        </label>
      </div>
    </div>

    <!-- Mobile App Development -->
    <div v-if="store.courseDetails.course_of_interest === 'Mobile App Development'" class="bg-white rounded-lg shadow-sm border p-6">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Mobile App Development (4 Months)</h3>
      <div class="space-y-3">
        <label class="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            class="mt-1"
            :checked="store.selectedPackages.includes('JS_RN_Fundamentals')"
            @change="store.togglePackage('JS_RN_Fundamentals')"
          />
          <span>
            <span class="font-medium">JavaScript / React Native Fundamentals</span>
            <span class="block text-sm text-gray-500">₦50,000</span>
          </span>
        </label>

        <label class="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            class="mt-1"
            :checked="store.selectedPackages.includes('RN_Framework')"
            @change="store.togglePackage('RN_Framework')"
          />
          <span>
            <span class="font-medium">React Native Framework</span>
            <span class="block text-sm text-gray-500">₦50,000</span>
          </span>
        </label>

        <label class="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            class="mt-1"
            :checked="store.selectedPackages.includes('Firebase')"
            @change="store.togglePackage('Firebase')"
          />
          <span>
            <span class="font-medium">Firebase (Auth & Firestore) / SQLite</span>
            <span class="block text-sm text-gray-500">₦30,000</span>
          </span>
        </label>
      </div>
    </div>

    <!-- UI/UX -->
    <div v-if="store.courseDetails.course_of_interest === 'UI/UX'" class="bg-white rounded-lg shadow-sm border p-6">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">UI/UX Design (3 Months)</h3>
      <label class="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          class="mt-1"
          :checked="store.selectedPackages.includes('UI/UX with Figma')"
          @change="store.togglePackage('UI/UX with Figma')"
        />
        <span>
          <span class="font-medium">UI/UX with Figma</span>
          <span class="block text-sm text-gray-500">₦80,000</span>
        </span>
      </label>
    </div>

    <!-- Data Analytics -->
    <div v-if="store.courseDetails.course_of_interest === 'Data Analytics'" class="bg-white rounded-lg shadow-sm border p-6">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">Data Analytics (6 Months)</h3>
      <div class="space-y-3">
        <label class="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            class="mt-1"
            :checked="store.selectedPackages.includes('Data_Analytics A')"
            @change="store.togglePackage('Data_Analytics A')"
          />
          <span>
            <span class="font-medium">Package A – Reporting Tools <span class="text-sm text-gray-500">(MS Excel, MySQL, Tableau)</span></span>
            <span class="block text-sm text-gray-500">₦70,000</span>
          </span>
        </label>

        <label class="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            class="mt-1"
            :checked="store.selectedPackages.includes('Data_Analytics B')"
            @change="store.togglePackage('Data_Analytics B')"
          />
          <span>
            <span class="font-medium">Package B – Programming Tools <span class="text-sm text-gray-500">(Python, Anaconda)</span></span>
            <span class="block text-sm text-gray-500">₦70,000</span>
          </span>
        </label>
      </div>
    </div>

    <!-- Total Amount -->
    <p class="mt-6 text-lg font-semibold text-gray-800">
      Total Amount: ₦{{ store.totalAmount }}
    </p>
  </div>
</section>

</template>

<script setup>

    import { useRegistrationStore } from '@/stores/UserRegistrationStore.js'

    const store = useRegistrationStore()

</script>

