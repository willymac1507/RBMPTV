<script setup>
import { ref } from "vue";

import Navbar from "../nav/Navbar.vue";
</script>
<!--Begin Template-->
<template>
  <div class="bg-gray-900">
    <div class="absolute inset-0 isolate overflow-hidden pt-14 h-screen">
      <img
        alt=""
        class="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-multiply"
        src="https://images.unsplash.com/photo-1566417110104-cd4f94af0fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
      />
      <div
        aria-hidden="true"
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
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
        aria-hidden="true"
        class="absolute inset-0 -z-10 transform-gpu overflow-hidden flex flex-col align-middle"
      >
        <img
          alt=""
          class="opacity-60 h-screen"
          src="../../assets/images/rbm.logo.svg"
        />
      </div>
      <div
        class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 h-screen flex items-center"
      >
        <div class="text-center mx-auto">
          <h1
            class="text-4xl font-bold tracking-tight text-white sm:text-5xl uppercase"
          >
            RB Mobile Pat Testing
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            Working hard so you can work safely.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <router-link
              class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              to="/contact"
              >Contact Us
            </router-link>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
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
    </div>
  </div>
</template>
