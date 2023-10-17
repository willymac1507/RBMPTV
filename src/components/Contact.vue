<script setup>
// import {
//   BuildingOffice2Icon,
//   EnvelopeIcon,
//   PhoneIcon,
// } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import Navbar from "./Navbar.vue";
import ContactForm from "./ContactForm.vue";
import FlashMessage from "./FlashMessage.vue";

let showFlash = ref(false);
let flashMessage = ref("");
let flashClass = ref("");
</script>
<!-- -->
<template>
  <Navbar />
  <Transition
    enter-active-class="transition duration-300"
    enter-from-class="opacity-0 scale-125"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-125"
  >
    <FlashMessage
      v-show="showFlash"
      :class="flashClass"
      :message="flashMessage"
    />
  </Transition>
  <div
    class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 min-h-[calc(100vh-80px)]"
  >
    <img
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      src="../assets/images/seawrd.png"
    />
    <div
      aria-hidden="true"
      class="sm:absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
    >
      <div
        class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
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

    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Contact Us
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-300">
        We'd really appreciate the opportunity to discuss your PAT testing
        needs. If you have a requirement, need a quote, or simply some friendly
        advice, please feel free to get in touch.
      </p>
    </div>
    <ContactForm
      @hideFlash="showFlash = false"
      @sent="
        (args) => {
          flashMessage = args.message;
          flashClass = args.class;
          showFlash = true;
        }
      "
    />
  </div>
</template>
