<script setup>
// import {
//   BuildingOffice2Icon,
//   EnvelopeIcon,
//   PhoneIcon,
// } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import Navbar from "./Navbar.vue";

const agreed = ref(false);
</script>
<!-- -->
<template>
  <Navbar />
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div
      aria-hidden="true"
      class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] min-h-[calc(100vh-80px)]"
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
    <img
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      src="../assets/images/seawrd.png"
    />
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
    <form action="#" class="mx-auto mt-8 max-w-xl sm:mt-10" method="POST">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-4">
        <div class="sm:col-span-4">
          <label
            class="block text-sm font-semibold leading-6 text-gray-300"
            for="company"
            >Company</label
          >
          <div class="mt-2.5">
            <input
              id="company"
              autocomplete="organization"
              class="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="company"
              type="text"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            class="block text-sm font-semibold leading-6 text-gray-300"
            for="first-name"
            >First name</label
          >
          <div class="mt-2.5">
            <input
              id="first-name"
              autocomplete="given-name"
              class="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="first-name"
              type="text"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            class="block text-sm font-semibold leading-6 text-gray-300"
            for="last-name"
            >Last name</label
          >
          <div class="mt-2.5">
            <input
              id="last-name"
              autocomplete="family-name"
              class="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="last-name"
              type="text"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            class="block text-sm font-semibold leading-6 text-gray-300"
            for="email"
            >Email</label
          >
          <div class="mt-2.5">
            <input
              id="email"
              autocomplete="email"
              class="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="email"
              type="email"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            class="block text-sm font-semibold leading-6 text-gray-300"
            for="phone-number"
            >Phone number</label
          >
          <div class="relative mt-2.5">
            <input
              id="phone-number"
              autocomplete="tel"
              class="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="phone-number"
              type="tel"
            />
          </div>
        </div>
        <div class="sm:col-span-4">
          <label
            class="block text-sm font-semibold leading-6 text-gray-300"
            for="message"
            >Message</label
          >
          <div class="mt-2.5">
            <textarea
              id="message"
              class="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="message"
              rows="4"
            />
          </div>
        </div>
        <div class="sm:col-span-4">
          <p class="text-sm text-gray-300">
            Please provide us with an estimate of each of the following types of
            appliance you need tested. (Refer to the
            <router-link class="font-semibold text-indigo-600" to="/services"
              >Services
            </router-link>
            page for an explanation of each type.
          </p>
        </div>
        <div>
          <label
            class="block text-sm font-semibold leading-6 text-gray-300"
            for="type1"
            >Portable</label
          >
          <div class="mt-2.5">
            <input
              id="type1"
              class="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="type1"
              type="number"
              value="0"
            />
          </div>
        </div>
        <div>
          <label
            class="block text-sm font-semibold leading-6 text-gray-300"
            for="type2"
            >Handheld</label
          >
          <div class="mt-2.5">
            <input
              id="type2"
              class="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="type2"
              type="number"
              value="0"
            />
          </div>
        </div>
        <div>
          <label
            class="block text-sm font-semibold leading-6 text-gray-300"
            for="type3"
            >Movable</label
          >
          <div class="mt-2.5">
            <input
              id="type3"
              class="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="type3"
              type="number"
              value="0"
            />
          </div>
        </div>
        <div>
          <label
            class="block text-sm font-semibold leading-6 text-gray-300"
            for="type4"
            >Stationary</label
          >
          <div class="mt-2.5">
            <input
              id="type4"
              class="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="type4"
              type="number"
              value="0"
            />
          </div>
        </div>
        <div>
          <label
            class="block text-sm font-semibold leading-6 text-gray-300"
            for="type5"
            >Fixed</label
          >
          <div class="mt-2.5">
            <input
              id="type5"
              class="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="type5"
              type="number"
              value="0"
            />
          </div>
        </div>
        <div>
          <label
            class="block text-sm font-semibold leading-6 text-gray-300"
            for="type6"
            >Built In</label
          >
          <div class="mt-2.5">
            <input
              id="type6"
              class="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="type6"
              type="number"
              value="0"
            />
          </div>
        </div>
        <div>
          <label
            class="block text-sm font-semibold leading-6 text-gray-300"
            for="type7"
            >IT</label
          >
          <div class="mt-2.5">
            <input
              id="type7"
              class="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="type7"
              type="number"
              value="0"
            />
          </div>
        </div>
        <div>
          <label
            class="block text-sm font-semibold leading-6 text-gray-300"
            for="type8"
            >Power Cabling</label
          >
          <div class="mt-2.5">
            <input
              id="type8"
              class="bg-transparent block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="type8"
              type="number"
              value="0"
            />
          </div>
        </div>
        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-4">
          <div class="flex h-6 items-center">
            <Switch
              v-model="agreed"
              :class="[
                agreed ? 'bg-indigo-600' : 'bg-gray-200',
                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
              ]"
            >
              <span class="sr-only">Agree to policies</span>
              <span
                :class="[
                  agreed ? 'translate-x-3.5' : 'translate-x-0',
                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                ]"
                aria-hidden="true"
              />
            </Switch>
          </div>
          <SwitchLabel class="text-sm leading-6 text-gray-300">
            By selecting this, you agree to our
            {{ " " }}
            <router-link class="font-semibold text-indigo-600" to="/"
              >privacy&nbsp;policy
            </router-link>
            .
          </SwitchLabel>
        </SwitchGroup>
      </div>
      <div class="mt-10">
        <button
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
        >
          Let's talk
        </button>
      </div>
    </form>
  </div>
  <!--  <div class="relative isolate bg-gray-900 min-h-[calc(100vh-80px)]">-->
  <!--    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">-->
  <!--        <img-->
  <!--          alt=""-->
  <!--          class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"-->
  <!--          src="../assets/images/seawrd.png"-->
  <!--        />-->
  <!--      <div-->
  <!--        class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"-->
  <!--      >-->
  <!--        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">-->
  <!--          <div-->
  <!--            class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2"-->
  <!--          >-->
  <!--            <div-->
  <!--              aria-hidden="true"-->
  <!--              class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"-->
  <!--            >-->
  <!--              <div-->
  <!--                class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"-->
  <!--                style="-->
  <!--                  clip-path: polygon(-->
  <!--                    74.1% 56.1%,-->
  <!--                    100% 38.6%,-->
  <!--                    97.5% 73.3%,-->
  <!--                    85.5% 100%,-->
  <!--                    80.7% 98.2%,-->
  <!--                    72.5% 67.7%,-->
  <!--                    60.2% 37.8%,-->
  <!--                    52.4% 32.2%,-->
  <!--                    47.5% 41.9%,-->
  <!--                    45.2% 65.8%,-->
  <!--                    27.5% 23.5%,-->
  <!--                    0.1% 35.4%,-->
  <!--                    17.9% 0.1%,-->
  <!--                    27.6% 23.5%,-->
  <!--                    76.1% 2.6%,-->
  <!--                    74.1% 56.1%-->
  <!--                  );-->
  <!--                "-->
  <!--              />-->
  <!--            </div>-->
  <!--          </div>-->
  <!--          <h2 class="text-3xl font-bold tracking-tight text-white">-->
  <!--            Get in touch-->
  <!--          </h2>-->
  <!--          <p class="mt-6 text-lg leading-8 text-gray-300 text-justify">-->
  <!--  We'd really appreciate the opportunity to discuss your PAT testing needs. If-->
  <!--  you have a requirement, need a quote, or simply some friendly advice, please-->
  <!--  feel free to get in touch.-->
  <!--          </p>-->
  <!--          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">-->
  <!--            <div class="flex gap-x-4">-->
  <!--              <dt class="flex-none">-->
  <!--                <span class="sr-only">Address</span>-->
  <!--                <BuildingOffice2Icon-->
  <!--                  aria-hidden="true"-->
  <!--                  class="h-7 w-6 text-gray-400"-->
  <!--                />-->
  <!--              </dt>-->
  <!--              <dd class="text-left">-->
  <!--                RB Mobile PAT Testing<br />1 Mill Lane<br />Norwich<br />NR1 3HS-->
  <!--              </dd>-->
  <!--            </div>-->
  <!--            <div class="flex gap-x-4">-->
  <!--              <dt class="flex-none">-->
  <!--                <span class="sr-only">Telephone</span>-->
  <!--                <PhoneIcon aria-hidden="true" class="h-7 w-6 text-gray-400" />-->
  <!--              </dt>-->
  <!--              <dd>-->
  <!--                <a class="hover:text-white" href="tel:(07000)777888"-->
  <!--                  >(07000) 777888</a-->
  <!--                >-->
  <!--              </dd>-->
  <!--            </div>-->
  <!--            <div class="flex gap-x-4">-->
  <!--              <dt class="flex-none">-->
  <!--                <span class="sr-only">Email</span>-->
  <!--                <EnvelopeIcon-->
  <!--                  aria-hidden="true"-->
  <!--                  class="h-7 w-6 text-gray-400"-->
  <!--                />-->
  <!--              </dt>-->
  <!--              <dd>-->
  <!--                <a-->
  <!--                  class="hover:text-white"-->
  <!--                  href="mailto:info@rbmpattesting.co.uk"-->
  <!--                  >info@rbmpattesting.co.uk</a-->
  <!--                >-->
  <!--              </dd>-->
  <!--            </div>-->
  <!--          </dl>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <form-->
  <!--        action="#"-->
  <!--        class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"-->
  <!--        method="POST"-->
  <!--      >-->
  <!--        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">-->
  <!--          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">-->
  <!--            <div>-->
  <!--              <label-->
  <!--                class="block text-sm font-semibold leading-6 text-white"-->
  <!--                for="first-name"-->
  <!--                >First name</label-->
  <!--              >-->
  <!--              <div class="mt-2.5">-->
  <!--                <input-->
  <!--                  id="first-name"-->
  <!--                  autocomplete="given-name"-->
  <!--                  class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"-->
  <!--                  name="first-name"-->
  <!--                  type="text"-->
  <!--                />-->
  <!--              </div>-->
  <!--            </div>-->
  <!--            <div>-->
  <!--              <label-->
  <!--                class="block text-sm font-semibold leading-6 text-white"-->
  <!--                for="last-name"-->
  <!--                >Last name</label-->
  <!--              >-->
  <!--              <div class="mt-2.5">-->
  <!--                <input-->
  <!--                  id="last-name"-->
  <!--                  autocomplete="family-name"-->
  <!--                  class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"-->
  <!--                  name="last-name"-->
  <!--                  type="text"-->
  <!--                />-->
  <!--              </div>-->
  <!--            </div>-->
  <!--            <div class="sm:col-span-2">-->
  <!--              <label-->
  <!--                class="block text-sm font-semibold leading-6 text-white"-->
  <!--                for="email"-->
  <!--                >Email</label-->
  <!--              >-->
  <!--              <div class="mt-2.5">-->
  <!--                <input-->
  <!--                  id="email"-->
  <!--                  autocomplete="email"-->
  <!--                  class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"-->
  <!--                  name="email"-->
  <!--                  type="email"-->
  <!--                />-->
  <!--              </div>-->
  <!--            </div>-->
  <!--            <div class="sm:col-span-2">-->
  <!--              <label-->
  <!--                class="block text-sm font-semibold leading-6 text-white"-->
  <!--                for="phone-number"-->
  <!--                >Phone number</label-->
  <!--              >-->
  <!--              <div class="mt-2.5">-->
  <!--                <input-->
  <!--                  id="phone-number"-->
  <!--                  autocomplete="tel"-->
  <!--                  class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"-->
  <!--                  name="phone-number"-->
  <!--                  type="tel"-->
  <!--                />-->
  <!--              </div>-->
  <!--            </div>-->
  <!--            <div class="sm:col-span-2">-->
  <!--              <label-->
  <!--                class="block text-sm font-semibold leading-6 text-white"-->
  <!--                for="message"-->
  <!--                >Message</label-->
  <!--              >-->
  <!--              <div class="mt-2.5">-->
  <!--                <textarea-->
  <!--                  id="message"-->
  <!--                  class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"-->
  <!--                  name="message"-->
  <!--                  rows="4"-->
  <!--                />-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--          <div class="mt-8 flex justify-end">-->
  <!--            <button-->
  <!--              class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"-->
  <!--              type="submit"-->
  <!--            >-->
  <!--              Send message-->
  <!--            </button>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </form>-->
  <!--    </div>-->
  <!--  </div>-->
</template>
