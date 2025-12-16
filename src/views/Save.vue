<template>
  <div class="min-h-screen bg-gradient-to-br from-[#0a1a4f] via-white to-[#0a1a4f] flex flex-col">

    <section class="flex flex-col flex-1 items-center justify-center text-center px-6">

      <motion-div
        v-motion
        :initial="{ opacity: 0, y: -50 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-[#0a1a4f]"
      >
        Build Your Future with  
        <span class="text-[#3aa0ff]">Tech Academy</span>
      </motion-div>


      <motion-div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 0.8 } }"
        class="max-w-2xl text-lg text-gray-700 mb-10"
      >
        Learn industry-relevant skills in UI/UX, Data Analytics, Web Development (Frontend & Backend), 
        and App Development with React Native.  
        Join us and gain the knowledge to excel in today’s digital world.
      </motion-div>


      <motion-a
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1, transition: { delay: 1 } }"
        href="#enroll"
        class="bg-[#0a1a4f] text-white font-semibold px-10 py-4 rounded-2xl shadow-lg hover:bg-[#2a7ccc] transition"
      >
        Enroll Now
      </motion-a>
    </section>


    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-16 bg-white">
      <motion-div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0 }"
        class="p-6 rounded-2xl shadow-md border bg-gradient-to-br from-white to-[#f0f4ff]"
      >
        <h3 class="text-xl font-bold text-[#0a1a4f] mb-2">UI/UX Design</h3>
        <p class="text-gray-600 text-sm">Master user research, wireframing, prototyping, and design systems.</p>
      </motion-div>

      <motion-div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 0.2 } }"
        class="p-6 rounded-2xl shadow-md border bg-gradient-to-br from-white to-[#f0f4ff]"
      >
        <h3 class="text-xl font-bold text-[#0a1a4f] mb-2">Data Analytics</h3>
        <p class="text-gray-600 text-sm">Learn data visualization, SQL, Python, and actionable insights.</p>
      </motion-div>

      <motion-div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 0.4 } }"
        class="p-6 rounded-2xl shadow-md border bg-gradient-to-br from-white to-[#f0f4ff]"
      >
        <h3 class="text-xl font-bold text-[#0a1a4f] mb-2">Web Development</h3>
        <p class="text-gray-600 text-sm">Frontend + Backend skills with modern frameworks and tools.</p>
      </motion-div>

      <motion-div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 0.6 } }"
        class="p-6 rounded-2xl shadow-md border bg-gradient-to-br from-white to-[#f0f4ff]"
      >
        <h3 class="text-xl font-bold text-[#0a1a4f] mb-2">App Development</h3>
        <p class="text-gray-600 text-sm">Build cross-platform apps with React Native and modern APIs.</p>
      </motion-div>
    </section>


    <footer class="text-center py-6 bg-[#0a1a4f]">
      <p class="text-gray-300 text-sm">
        © 2025 Tech Academy. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style>
</style>
