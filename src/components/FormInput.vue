<script setup>
import { ref } from "vue";

defineProps({
  modelValue: String,
  name: String,
  label: String,
  autocomplete: String,
  type: String,
});

let inputValue = ref("");
</script>

<template>
  <div>
    <label
      :for="name"
      class="block text-sm font-semibold leading-6 text-gray-300"
      >{{ label }}</label
    >
    <div class="mt-2.5">
      <input
        :id="name"
        v-model="inputValue"
        :autocomplete="autocomplete"
        :name="name"
        :type="type"
        class="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        required
        @input="$emit('update:modelValue', inputValue)"
      />
    </div>
  </div>
</template>
