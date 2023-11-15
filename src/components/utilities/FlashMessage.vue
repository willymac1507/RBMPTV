<template>
  <div
    id="flashMessage"
    class="absolute top-[80px] left-0 z-20 flex justify-center items-center {{ classAdd }} w-full max-h-8"
  >
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  message: String,
  classAdd: String,
});
</script>
