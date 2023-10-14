<script setup>
import { onMounted } from "vue";

defineProps({
  show: Boolean,
  name: String,
  content: Object,
});
</script>
<!-- -->
<template>
  <Transition
    enter-active-class="transition duration-300"
    enter-from-class="opacity-0 scale-125"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-125"
  >
    <div
      v-if="show"
      class="sc fixed inset-0 bg-[rgba(0,0,0,.7)] grid place-items-center"
    >
      <div class="rounded-md bg-white p-8 w-[80vw] max-w-lg">
        <div class="w-full grid place-content-center mb-4">
          <img alt="" src="../../assets/images/rbm.logo.svg" width="150" />
        </div>
        <div class="text-2xl font-semibold mb-6">
          <slot name="header"> Default Title</slot>
        </div>
        <div class="text-justify mb-8">
          <slot>Default Body</slot>
        </div>
        <footer class="border-t border-gray-200 mt-2 pt-2">
          <slot name="footer">
            <span
              class="cursor-pointer text-indigo-600 font-semibold"
              @click="$emit('close')"
            >
              Close <span aria-hidden="true">→</span>
            </span>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>
