<script setup>
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/vue/24/outline";
import Navbar from "./Navbar.vue";
</script>
<!-- -->
<template>
  <Navbar />
  <div class="relative isolate bg-gray-900 min-h-[calc(100vh-80px)]">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div
        class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"
      >
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div
            class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2"
          >
            <div
              aria-hidden="true"
              class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
            >
              <div
                class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                style="
                  clip-path: polygon(
                    74.1% 56.1%,
                    100% 38.6%,
                    97.5% 73.3%,
                    85.5% 100%,
                    80.7% 98.2%,
                    72.5% 67.7%,
                    60.2% 37.8%,
                    52.4% 32.2%,
                    47.5% 41.9%,
                    45.2% 65.8%,
                    27.5% 23.5%,
                    0.1% 35.4%,
                    17.9% 0.1%,
                    27.6% 23.5%,
                    76.1% 2.6%,
                    74.1% 56.1%
                  );
                "
              />
            </div>
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-white">
            Get in touch
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            Proin volutpat consequat porttitor cras nullam gravida at. Orci
            molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
            sed malesuada et magna.
          </p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <BuildingOffice2Icon
                  aria-hidden="true"
                  class="h-7 w-6 text-gray-400"
                />
              </dt>
              <dd class="text-left">1 Mill Lane<br />Norwich<br />NR1 3HS</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon aria-hidden="true" class="h-7 w-6 text-gray-400" />
              </dt>
              <dd>
                <a class="hover:text-white" href="tel:(07000)777888"
                  >(07000) 777888</a
                >
              </dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon
                  aria-hidden="true"
                  class="h-7 w-6 text-gray-400"
                />
              </dt>
              <dd>
                <a
                  class="hover:text-white"
                  href="mailto:info@rbmpattesting.co.uk"
                  >info@rbmpattesting.co.uk</a
                >
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <form
        action="#"
        class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        method="POST"
      >
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                class="block text-sm font-semibold leading-6 text-white"
                for="first-name"
                >First name</label
              >
              <div class="mt-2.5">
                <input
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  name="first-name"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label
                class="block text-sm font-semibold leading-6 text-white"
                for="last-name"
                >Last name</label
              >
              <div class="mt-2.5">
                <input
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  name="last-name"
                  type="text"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                class="block text-sm font-semibold leading-6 text-white"
                for="email"
                >Email</label
              >
              <div class="mt-2.5">
                <input
                  id="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  name="email"
                  type="email"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                class="block text-sm font-semibold leading-6 text-white"
                for="phone-number"
                >Phone number</label
              >
              <div class="mt-2.5">
                <input
                  id="phone-number"
                  autocomplete="tel"
                  class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  name="phone-number"
                  type="tel"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                class="block text-sm font-semibold leading-6 text-white"
                for="message"
                >Message</label
              >
              <div class="mt-2.5">
                <textarea
                  id="message"
                  class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  name="message"
                  rows="4"
                />
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button
              class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              type="submit"
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
