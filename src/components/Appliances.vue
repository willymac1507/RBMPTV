<script setup>
import Navbar from "./Navbar.vue";
import CardDeck from "./card deck/CardDeck.vue";
</script>
<template>
  <Navbar />
  <div
    class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 min-h-[calc(100vh-80px)]"
  >
    <img
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      src="../assets/images/2377_Level_3_CG_Master.png"
    />
    <div
      class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
    >
      <div
        class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div
      class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
    >
      <div
        class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div class="mx-auto px-8 max-w-2xl lg:max-w-7xl lg:text-center">
      <h2 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Appliance Categories
      </h2>
      <div class="mt-6">
        <p class="mb-8 md:mb-12">
          What needs to be PAT tested? Many will tell you that "If it has a
          plug, it needs to be tested." But it is a little more complex than
          that. Below is a list of categories of equipment that we test as part
          of our service. Hover or tap on each one for more detail.
        </p>
        <CardDeck />
      </div>
    </div>
  </div>
</template>
<style />
