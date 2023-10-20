<script setup>
import CategoryCard from "./CategoryCard.vue";

const serviceList = [
  {
    title: "Portable",
    image: "toaster.png",
    body: "Easy to move whilst in operation e.g. toaster, coffee machine, kettle etc.",
  },
  {
    title: "Handheld",
    image: "grinder.png",
    body: "Portable by design and requiring the use of direct hand contact e.g. drill, grinder, hair clippers etc.",
  },
  {
    title: "Movable",
    image: "fender.png",
    body: "Similar to the previous two categories but larger and generally heavier e.g. fridge, PA System, guitar amplifier etc.",
  },
  {
    title: "Stationary",
    image: "oven.png",
    body: "Designed not to be moved and generally weighs in excess of 18kg e.g. washing machine, oven, stage lighting etc.",
  },
  {
    title: "Fixed",
    image: "mitre.png",
    body: "Items permanently fixed in place e.g. drill press, mitre saw etc.",
  },
  {
    title: "Built In",
    image: "hob.png",
    body: "Items built into a unit e.g. dishwasher, oven, hob, mixing desk etc.",
  },
  {
    title: "IT",
    image: "IT.png",
    body: "As the name suggests, all equipment in your IT estate e.g. PCs, laptops, printers, photocopiers etc.",
  },
  {
    title: "Power cabling",
    image: "extensions.png",
    body: "Specifically portable cabling e.g. extension leads, multi-socket adapters, charging cables etc.",
  },
];
</script>

<template>
  <div class="w-10/12 my-0 mx-auto max-w-7xl">
    <div class="flex flex-wrap justify-center">
      <CategoryCard v-for="service in serviceList" :image="service.image">
        <template #title
          ><h1 class="my-8 mx-0 text-center text-3xl text-white font-bold">
            {{ service.title }}
          </h1></template
        >
        <template #default>{{ service.body }}</template>
      </CategoryCard>
    </div>
  </div>
</template>
