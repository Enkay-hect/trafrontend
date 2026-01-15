<template>
  <nav class="bg-white border-b border-gray-200 h-20 flex items-center ">
    <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-full">

        <div class="flex items-center">
          <span class="text-2xl font-semibold" style="color:#1e40af">
            <img
                  src="/images/Logo/logo_blue.png"
                  alt=""
                  class=" w-full h-full object-contain b-2 border-red-200"
              />
          </span>
        </div>

        <div class="hidden lg:flex items-center space-x-10 gap-10">

          <div class="text-base font-medium text-gray-700 hover:text-[#1e40af] cursor-pointer">
              Home
          </div>
          
          <motion-div
            v-for="item in navItems"
            :key="item.id"
            :initial="{ opacity: 1, y: 0 }"
            :hover="{ y: -2, scale: 1.05 }"
            :transition="{ type:'spring', stiffness:300, damping:24 }"
            class="text-base font-medium text-gray-700 hover:text-[#1e40af] cursor-pointer"
          >
            <!-- {{ item }} -->
                <router-link
                  :to="{ path: item.path, hash: item.hash }"
                  class="text-base font-medium text-gray-700 hover:text-[#1e40af]"
                >
                  {{ item.label }}
                </router-link>
          </motion-div>



          <!-- for dark mode -->
           <!-- <button
              @click="toggleTheme"
              class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:ring-2 hover:ring-blue-500 transition"
              :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              <div v-if="isDark">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.95l-.71.71m16.1 0l-.71-.71M4.05 4.05l-.71-.71M21 12h-1M4 12H3m16.95 4.95l-.71-.71M6.76 6.76l-.71-.71" />
                </svg>
              </div>
              <div v-else>


                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              </div>
            </button> -->



        <!-- services dropdown -->
        <div
          class="relative "
          @mouseenter="servicesOpen = true"
          @mouseleave="servicesOpen = false"
        >

        <!-- <motion-div
            :initial="{ opacity: 1, y: 0 }"
            :hover="{ y: -2, scale: 1.05 }"
            :transition="{ type:'spring', stiffness:300, damping:24 }"
            class="text-base font-medium text-gray-700 hover:text-[#1e40af] cursor-pointer flex items-center gap-1"
          >
            Our services
            <span class="text-xs">▼</span>
          </motion-div>

          <div class="absolute left-0 top-full h-3 w-full"></div> -->

          <!-- Dropdown -->
          <!-- <motion-div
            v-if="servicesOpen"
            :initial="{ opacity: 0, y: 10 }"
            :enter="{ opacity: 1, y: 0 }"
            :leave="{ opacity: 0, y: 10 }"
            :transition="{ duration: 0.2 }"
            class="absolute top-full mt-3 left-0 w-56 bg-white rounded-xl shadow-lg border border-gray-100 z-50"
          >
            <div class="py-2 ">
              <div class="px-5 py-3 hover:bg-gray-50 cursor-pointer">
                Web Development
              </div>
              <div class="px-5 py-3 hover:bg-gray-50 cursor-pointer">
                Mobile App Development
              </div>
              <div class="px-5 py-3 hover:bg-gray-50 cursor-pointer">
                UI / UX Design
              </div>
              <div class="px-5 py-3 hover:bg-gray-50 cursor-pointer">
                Data Analytics
              </div>
            </div>
          </motion-div> -->
        </div>



          <!-- <motion-div
            :initial="{ opacity: 1, y: 0 }"
            :hover="{ y: -2, scale: 1.05 }"
            :transition="{ type:'spring', stiffness:300, damping:24 }"
            class="text-base font-medium text-gray-700 hover:text-[#1e40af] cursor-pointer"
          >
            About Us
          </motion-div> -->
        </div>

        <div class="flex items-center gap-4">

      <!--    <motion-div
            class="hidden lg:block"
            :initial="{ scale:1 }"
            :hover="{ scale:1.05 }"
            :transition="{ type:'spring', stiffness:300, damping:24 }"
          >
            <button
              class="bg-[#1e3a8a] hover:bg-[#1e2a6e] text-white font-medium px-8 py-3 rounded-xl shadow-sm"
            >
              Sign Up
            </button>
          </motion-div> -->

          <button
            @click="toggleMobile"
            class="lg:hidden p-2 rounded-md focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke-width="1.5"
                 stroke="currentColor"
                 class="w-7 h-7 text-gray-700">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <motion-div
      v-if="mobileOpen"
      :initial="{ opacity: 0, y: -40 }"
      :enter="{ opacity: 1, y: 0 }"
      :leave="{ opacity: 0, y: -40 }"
      :transition="{ type: 'spring', stiffness: 260, damping: 24 }"
      class="fixed inset-0 top-[72px] z-[60] lg:hidden bg-white overflow-y-auto"
    >
      <div class="px-6 pt-6 pb-12 space-y-5">

        <div
          v-for="item in navItems"
          :key="item.id"
          @click="closeMobileMenu"
          class="text-gray-800 text-lg font-medium py-2 cursor-pointer"
        >
          <router-link
            :to="{ path: item.path, hash: item.hash }"
            @click="mobileOpen = false"
            class="block text-lg font-medium text-gray-800 py-2"
          >
            {{ item.label }}
          </router-link>
        </div>

        <div>
          <button
            type="button"
            @click="toggleMobileServices"
            class="w-full flex items-center justify-between text-gray-800 text-lg font-medium py-2"
          >
            Our services
            <span class="text-sm">
              {{ servicesOpenMobile ? '▲' : '▼' }}
            </span>
          </button>

          <motion-div
            v-if="servicesOpenMobile"
            :initial="{ opacity: 0, height: 0 }"
            :enter="{ opacity: 1, height: 'auto' }"
            :leave="{ opacity: 0, height: 0 }"
            :transition="{ duration: 0.2 }"
            class="pl-4 overflow-hidden"
          >
            <div class="text-gray-600 py-2 text-base cursor-pointer" @click="closeMobileMenu">
                Web Development
            </div>
            <div class="text-gray-600 py-2 text-base cursor-pointer" @click="closeMobileMenu">
                Mobile App Development
            </div>
            <div class="text-gray-600 py-2 text-base cursor-pointer" @click="closeMobileMenu">
              UI / UX Design
            </div>
            <div class="text-gray-600 py-2 text-base cursor-pointer" @click="closeMobileMenu">
              Data Analytics
            </div>
          </motion-div>
    </div>

    <div
      class="text-gray-800 text-lg font-medium py-2 cursor-pointer"
      @click="closeMobileMenu"
    >
      About Us
    </div>

   <!-- <motion-div
      :initial="{ scale: 1 }"
      :hover="{ scale: 1.05 }"
      :transition="{ type: 'spring', stiffness: 300, damping: 22 }"
      class="pt-8"
    >
      <button
        class="w-full bg-[#1e3a8a] hover:bg-[#162e6e] text-white font-semibold px-6 py-4 rounded-xl shadow"
        @click="closeMobileMenu"
      >
        Sign Up
      </button>
    </motion-div> -->

  </div>
</motion-div>


  </nav>
</template>



<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import { useThemeStore } from '@/stores/useThemeStore.js'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.dark)

const toggleTheme = () => {
  themeStore.toggle()
  localStorage.setItem('darkMode', themeStore.dark)
}

const mobileOpen = ref(false)
const servicesOpenMobile = ref(false)
const servicesOpen = ref(false)

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value

  if (!mobileOpen.value) {
    servicesOpenMobile.value = false
  }
}

function toggleMobileServices() {
  servicesOpenMobile.value = !servicesOpenMobile.value
}

function closeOnOutsideClick(e) {
  const nav = e.target.closest('nav')
  if (!nav) {
    mobileOpen.value = false
    servicesOpenMobile.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeOnOutsideClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeOnOutsideClick)
})

watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    mobileOpen.value = false
    servicesOpenMobile.value = false
  }
})


const navItems = [
  // { label: 'Home', path: '/', hash: '#home' },
  { label: 'Workspace', path: '/', hash: '#workspace' },
  { label: 'Academy', path: '/', hash: '#academy' },
  { label: 'About Us',  }
]

</script>

<style scoped>
</style>
