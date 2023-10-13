<script setup>
import { ArrowPathIcon, BoltIcon, CloudArrowUpIcon, LockClosedIcon, ScaleIcon } from '@heroicons/vue/20/solid';
import Navbar from './Navbar.vue';
import AboutCard from './AboutCard.vue';

const features = [
  {
    name: 'Portable Appliance Testing',
    image: 'pat-tested-plug.png',
    description:
        'What is Portable Appliance Testing, and why is it important to you, whether domestic, commercial or site based?',
    href: '/about/pat',
    icon: BoltIcon,
  },
  {
    name: 'The Legal Bit',
    image: 'E@W1989.png',
    description:
        'Read more about the legislation underpinning Portable Appliance Testing, and your legal obligations.',
    href: '#',
    icon: ScaleIcon,
  },
  {
    name: 'How We Can Help',
    image: 'PATman.png',
    description:
        'Find out what can we do to help ensure your safety, provide peace of mind and even save you money.',
    href: '#',
    icon: ArrowPathIcon,
  },
];
</script>
<template>
  <Navbar/>
  <div
      class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-[calc(100vh-80px)]"
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
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
        <h2 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">About Us</h2>
        <p class="mt-6 text-lg text-justify leading-8 text-gray-300">We provide a professional PAT Testing service
          across East
          Anglia. From 1 to 100 appliances or more, we can
          satisfy all your PAT testing needs, ensuring you are fully compliant with the
          latest regulations. From contact to certificate, you will receive a
          friendly, reliable service. Whether you are a homeowner or a tenant, a
          tradesman or a business of any kind, we come to you. Your appointment
          will be arranged for a time that suits you, so you can carry on doing
          what you need to do, with minimal disruption.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <AboutCard :feature="feature"/>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
