<script setup>
import Navbar from './Navbar.vue';
import { BoltIcon, NewspaperIcon, ScaleIcon, } from '@heroicons/vue/20/solid';
import Card from './Card.vue';

const cards = [
  {
    name: 'Portable Appliance Testing?',
    description:
        'What is Portable Appliance Testing, and why is it important to you, whether domestic, commercial or site based?',
    icon: BoltIcon,
  },
  {
    name: 'The Legal Bit',
    description:
        'Read more about the legislation underpinning Portable Appliance Testing, and your legal obligations.',
    icon: ScaleIcon,
  },
  {
    name: 'How Can We Help?',
    description:
        'What can we do to help ensure your safety, provide peace of mind and even save you money?.',
    icon: NewspaperIcon,
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
    <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
      <div class="mx-auto max-w-2xl lg:max-w-4xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          About Us
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          We provide a professional PAT Testing service across East Anglia. From 1 to 100 appliances or more, we can
          satisfy all your PAT testing needs, ensuring you are fully compliant with the
          latest regulations. From contact to certificate, you will receive a
          friendly, reliable service. Whether you are a homeowner or a tenant, a
          tradesman or a business of any kind, we come to you. Your appointment
          will be arranged for a time that suits you, so you can carry on doing
          what you need to do, with minimal disruption.
        </p>
      </div>
      <div
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        <Card
            v-for="card in cards"
            :key="card.name"
            :card="card"
        />
      </div>
    </div>
  </div>
  <!--  <section id="about" class="about">-->
  <!--    <div class="section__content">-->
  <!--      <div class="section__title">About Us</div>-->
  <!--      <div class="section__block">-->
  <!--        <div class="block__imageContainer">-->
  <!--          <img-->
  <!--              alt=""-->
  <!--              class="block__image"-->
  <!--              src="/images/HPAT400-action4.png"-->
  <!--          />-->
  <!--        </div>-->
  <!--        <div class="block__textContainer">-->
  <!--          <p class="block__para">-->
  <!--            We are a local company offering a professional PAT Testing service-->
  <!--            across East Anglia. From 1 to 100 appliances or more, we can-->
  <!--            satisfy all your PAT testing needs, ensuring you are fully-->
  <!--            compliant with the latest regulations. From contact to-->
  <!--            certificate, you will receive a friendly, reliable service. No-->
  <!--            matter if you are a homeowner or a tenant, a tradesman, musician-->
  <!--            or a business of any kind, we come to you. Your appointment will-->
  <!--            be arranged for a time that suits you, so you can carry on doing-->
  <!--            what you need to do, with minimal disruption.-->
  <!--          </p>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="section__block">-->
  <!--        <div class="block__textContainer">-->
  <!--          <h2 class="block__title">What is Portable Appliance Testing?</h2>-->
  <!--          <p class="block__para">-->
  <!--            Portable Appliance Testing is the name given to a series of-->
  <!--            inspections and electrical tests carried out on portable equipment-->
  <!--            to ensure that it is able to be used safely. It is more accurately-->
  <!--            known as the Inspection and Testing of In-service Electrical-->
  <!--            Equipment. It is important to note that performing a Portable-->
  <!--            Appliance Test doesn’t just consist of plugging a piece of-->
  <!--            equipment into a PAT tester and seeing if it passes or fails.-->
  <!--            Portable Appliance Testing also encompasses the recording and-->
  <!--            upkeep of records.-->
  <!--          </p>-->
  <!--        </div>-->
  <!--        <div class="block__imageContainer">-->
  <!--          <img-->
  <!--              alt=""-->
  <!--              class="block__image"-->
  <!--              src="/images/patdrill.png"-->
  <!--          />-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="section__block">-->
  <!--        <div class="block__imageContainer">-->
  <!--          <img-->
  <!--              alt=""-->
  <!--              class="block__image"-->
  <!--              src="/images/pat-tested-plug.png"-->
  <!--          />-->
  <!--        </div>-->
  <!--        <div class="block__textContainer">-->
  <!--          <h2 class="block__title">Is PAT testing a legal requirement?</h2>-->
  <!--          <p class="block__para">-->
  <!--          </p>-->
  <!--          <ul>-->
  <!--            <li>The Health & Safety at Work Act 1974</li>-->
  <!--            <li>The Management of Health & Safety at Work Regulations</li>-->
  <!--            <li>The Provision and Use of Work Equipment Regulations 1998</li>-->
  <!--            <li>The Electricity at Work Regulations 1989</li>-->
  <!--          </ul>-->
  <!--          <p class="block__para">-->
  <!--            Employers, Institutions and Landlords have a statutory-->
  <!--            responsibility to ensure that all portable appliances on the-->
  <!--            premises are safe for use.-->
  <!--          </p>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div class="section__block">-->
  <!--        <div class="block__textContainer">-->
  <!--          <h2 class="block__title">This is where we come in!</h2>-->
  <!--          <p class="block__para">-->
  <!--            A regular PAT testing regime ensures that your duty of care under the above legislation is met, and-->
  <!--            crucially,-->
  <!--            documented and certified.-->
  <!--            PAT testing is not only a cost-effective way to ensure the safety of employees, members of the public or-->
  <!--            tradespeople, but it can lead to reductions in insurance premiums also.-->
  <!--            Our prices are tailored to your individual circumstances, and are an affordable way of gaining peace of-->
  <!--            mind.-->
  <!--            <span class="block__tagline">We work hard so you can work safely!</span>-->
  <!--          </p>-->
  <!--        </div>-->
  <!--        <div class="block__imageContainer">-->
  <!--          <img-->
  <!--              alt=""-->
  <!--              class="block__image"-->
  <!--              src="/images/PATman.png"-->
  <!--          />-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </section>-->
</template>
