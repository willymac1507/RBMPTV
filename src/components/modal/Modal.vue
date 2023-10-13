<script setup>
import Services from "../Services.vue";
import PATModal from "./PATModal.vue";
import LegalModal from "./LegalModal.vue";
import HelpModal from "./HelpModal.vue";

defineProps({
  show: Boolean,
  name: String,
});
</script>
<!-- -->
<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-[rgba(0,0,0,.7)] grid place-items-center"
  >
    <div class="rounded-md bg-white p-4 w-[80vw] max-w-lg">
      <div>
        <slot name="header">
          {{ name }}
        </slot>
      </div>
      <div>
        <slot> default body</slot>
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
</template>
