<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";
import Navbar from "./Navbar.vue";

const services = [
  {
    category: "Residential",
    description:
      "Catering for Landlords and Tenants, in houses, flats, holiday lets, sheltered housing etc.",
  },
  {
    category: "House in Multiple Occupation (HMO)",
    description:
      "A house in multiple occupation (HMO) is a property rented out by at least 3 people who are not from 1 ‘household’ (for example a family) but share facilities like the bathroom and kitchen. It’s sometimes called a ‘house share’.",
  },
  {
    category: "Small and Medium Enterprises (SME)",
    description:
      "Small-size enterprises are companies with fewer than 50 employees, and medium-size enterprises are ones with fewer than 250 employees.",
  },
  {
    category: "Offices",
    description:
      "From a home office to a multiple office building, we can provide a service to meet your needs.",
  },
  {
    category: "Construction Trade",
    description:
      "We can test all appliances whether 240V or 110V. We can come to you on site or at your yard or depot, whichever is better for you.",
  },
  {
    category: "Entertainment",
    description:
      "We cater for everyone from mobile performers, bands, discos and karaoke through to small, medium and large venues. We also work with zoos and amusement parks to ensure their PAT testing needs are covered.",
  },
  {
    category: "Hospitality",
    description:
      "Our service extends to all in the hospitality trade, from a roadside catering van to the largest hotel or resort. We can work with public houses, nightclubs, restaurants, B&Bs and multi-site chains.",
  },

  // More questions...
];
</script>

<template>
  <Navbar />
  <div
    class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 min-h-[calc(100vh-80px)]"
  >
    <img
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      src="../assets/images/pat-testing-equipment-2.png"
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
        Our Services
      </h2>
      <div class="mt-6">
        <p class="mb-8 md:mb-12">
          With fully calibrated specialist testing equipment, we can provide
          testing and certification to meet a wide range of needs, including:
        </p>
      </div>
      <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
        <Disclosure
          v-for="service in services"
          :key="service.category"
          v-slot="{ open }"
          as="div"
          class="pt-6"
        >
          <dt>
            <DisclosureButton
              class="flex w-full items-start justify-between text-left text-white"
            >
              <span class="text-base font-semibold leading-7">{{
                service.category
              }}</span>
              <span class="ml-6 flex h-7 items-center">
                <PlusSmallIcon
                  v-if="!open"
                  aria-hidden="true"
                  class="h-6 w-6"
                />
                <MinusSmallIcon v-else aria-hidden="true" class="h-6 w-6" />
              </span>
            </DisclosureButton>
          </dt>
          <DisclosurePanel as="dd" class="mt-2 px-12">
            <p class="text-left leading-7 text-gray-400">
              {{ service.description }}
            </p>
          </DisclosurePanel>
        </Disclosure>
      </dl>
    </div>
  </div>
</template>

<style />
