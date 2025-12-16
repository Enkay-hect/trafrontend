<template>
  <section class="w-full bg-gray-200 py-20">
    <div class="max-w-5xl mx-auto px-6">


        <h2 class="text-center text-2xl font-semibold text-gray-900 mb-10">
        Frequently Asked Questions and answers
      </h2>


      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-gray-50 rounded-xl px-6 py-5"
        >

        <button
            class="w-full flex items-center justify-between text-left"
            @click="toggle(index)"
          >
            <span class="text-gray-900 font-medium">
              {{ faq.question }}
            </span>


            <span
              class="text-2xl font-light transition-transform duration-300"
              :class="openIndex === index ? 'rotate-45' : ''"
            >
              +
            </span>
          </button>


          <motion-div
            v-if="openIndex === index"
            :initial="{ opacity: 0, height: 0 }"
            :enter="{ opacity: 1, height: 'auto' }"
            :leave="{ opacity: 0, height: 0 }"
            :transition="{ duration: 0.3, ease: 'easeOut' }"
            class="overflow-hidden"
          >
            <p class="mt-4 text-gray-600 text-sm leading-relaxed">
              {{ faq.answer }}
            </p>
          </motion-div>
        </div>
      </div>


      <div class="mt-14 flex justify-center">
        <button
          class="bg-[#0f172a] hover:bg-[#1e293b] text-white px-8 py-3 rounded-lg font-medium shadow transition"
        >
          Still have questions?
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const openIndex = ref(null);

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const faqs = [
  {
    question: "Where is Techroom located",
    answer:
      "Techroom is located in a central and accessible area designed to support collaboration, learning, and innovation."
  },
  {
    question: "Where is Techroom located",
    answer:
      "Techroom is located in a central and accessible area designed to support collaboration, learning, and innovation."
  },
 
];
</script>

<style scoped>

</style>
