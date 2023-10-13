<script setup>
const props = defineProps(['card']);
const card = props.card;
</script>
<template>
  <div class="h-7 w-5 flex-none text-indigo-400">
    <component
        :is="card.icon"
        aria-hidden="true"
    />
    <div class="text-base leading-7 ">
      <h3 class="font-semibold text-white">{{ card.name }}</h3>
      <img :src="card.image" alt="">
      <p class="mt-2 text-gray-300">{{ card.description }}</p>
    </div>
  </div>
</template>
