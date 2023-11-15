<script setup>
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { Dialog, DialogPanel } from "@headlessui/vue";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Appliances", href: "/appliances" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const mobileMenuOpen = ref(false);
</script>
<template>
  <header class="inset-x-0 top-0 sticky z-50 bg-blue-950">
    <nav
      aria-label="Global"
      class="flex items-center justify-between p-4 lg:px-8"
    >
      <div class="flex lg:flex-1">
        <router-link class="-m-1.5 p-1.5" to="/">
          <span class="sr-only">RB Mobile Pat Testing</span>
          <img
            alt=""
            class="h-12 w-auto hover:animate-spin"
            src="../../assets/images/rbm.logo.svg"
          />
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          type="button"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" class="h-6 w-6" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="text-sm font-semibold leading-6 text-white"
          >{{ item.name }}
        </router-link>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a class="text-sm font-semibold leading-6 text-white" href="#"></a>
      </div>
    </nav>
    <Dialog
      :open="mobileMenuOpen"
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
      >
        <div class="flex items-center justify-between">
          <a class="-m-1.5 p-1.5" href="/public">
            <span class="sr-only">RB Mobile Pat Testing</span>
            <img
              alt=""
              class="h-8 w-auto"
              src="../../assets/images/rbm.logo.svg"
            />
          </a>
          <button
            class="-m-2.5 rounded-md p-2.5 text-gray-400"
            type="button"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" class="h-6 w-6" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/25">
            <div class="space-y-2 py-6">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                >{{ item.name }}
              </router-link>
            </div>
            <!--            <div class="py-6">-->
            <!--              <a-->
            <!--                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"-->
            <!--                href="#"-->
            <!--                >Log in</a-->
            <!--              >-->
            <!--            </div>-->
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
