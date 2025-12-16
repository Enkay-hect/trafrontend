<template>
  <section class="w-full bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6">


      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


        <motion-div
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
          class="w-full rounded-2xl overflow-hidden border border-gray-300"
        >
          <img
            src="/images/academy/classroom.png"
            alt="Academy Cover"
            class="w-full h-full object-cover"
          />
        </motion-div>


        <motion-div
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }"
          class="space-y-6"
        >


        <h2 class="text-2xl font-semibold text-center lg:text-left text-gray-900">
            Our Academy
          </h2>


          <p class="text-gray-700 leading-relaxed text-justify">
            Explore our comprehensive courses designed to equip you with essential tech skills,
            from coding and data analysis to cybersecurity and UX design. Each course combines
            hands-on projects with expert-led instruction to help you build practical, job-ready
            skills in a collaborative environment. The courses offered are
          </p>


          <div class="flex flex-wrap gap-4 pt-2">


            <div
              v-for="(item, index) in courses"
              :key="index"
              class="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm text-gray-800"
            >
              <img :src="item.icon" alt="icon" class="w-5 h-5" />
              <span class="text-sm font-medium whitespace-nowrap">{{ item.name }}</span>
            </div>

          </div>


          <div class="pt-4">
            <button
              class="px-8 py-3 bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-lg font-medium shadow-md transition"
            >
              Go to Academy
            </button>
          </div>

        </motion-div>

      </div>

    </div>
  </section>
</template>

<script setup>
const courses = [
  {
    name: "Web development",
    icon: "/images/academy/right-tick.png",
  },
  {
    name: "UI/UX design",
    icon: "/images/academy/right-tick.png",
  },
 
  {
    name: "Backend  development",
    icon: "/images/academy/right-tick.png",
  },
  {
    name: "Data analysis",
    icon: "/images/academy/right-tick.png",
  },
   {
    name: "Mobile App development",
    icon: "/images/academy/right-tick.png",
  },
];
</script>

<style scoped>

</style>
