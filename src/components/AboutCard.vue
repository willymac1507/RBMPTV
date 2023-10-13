<script setup>
const props = defineProps(['feature']);
const feature = props.feature;
</script>
<template>
  <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
    <component :is="feature.icon" aria-hidden="true" class="h-5 w-5 flex-none text-indigo-400"/>
    {{ feature.name }}
  </dt>
  <dd class="items-start mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
    <p class="flex-auto text-left">{{ feature.description }}</p>
    <p class="mt-6">
      <router-link :to="feature.href" class="text-sm font-semibold leading-6 text-indigo-400">Learn more <span
          aria-hidden="true">→</span></router-link>
    </p>
  </dd>
</template>
