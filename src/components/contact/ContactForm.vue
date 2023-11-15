<script setup>
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Switch,
  SwitchGroup,
  SwitchLabel,
} from "@headlessui/vue";
import FormInput from "./FormInput.vue";
import FormTextArea from "./FormTextArea.vue";
import emailjs from "@emailjs/browser";
import FlashMessage from "../utilities/FlashMessage.vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

const formData = ref({
  companyName: "",
  firstName: "",
  surname: "",
  email: "",
  phoneNumber: "",
  message: "",
  type1: 0,
  type2: 0,
  type3: 0,
  type4: 0,
  type5: 0,
  type6: 0,
  type7: 0,
  type8: 0,
  agreed: false,
});

let flashMessage = "";
let flashClass = "";
let showFlash = ref(false);
let showOptional = ref(false);

const emit = defineEmits(["sent", "hideFlash"]);

async function sendEmail(e) {
  try {
    await emailjs.sendForm(
      "service_rbmpat2023",
      "template_5z2w93a",
      "#emailForm",
      "4xFGKTSY7k-UWM8zh",
    );
    const form = document.getElementById("emailForm");
    form.reset();
    emit("sent", {
      message: "Success! Your message was sent!",
      class: "bg-green-400 text-black",
    });
    setTimeout(() => {
      emit("hideFlash");
    }, 4000);
  } catch (error) {
    emit("sent", {
      message: "Sorry. There was an error sending. Please try again.",
      class: "bg-red-400 text-black",
    });
  }
}
</script>
<template>
  <form
    id="emailForm"
    action="#"
    class="h-full mx-auto mt-8 max-w-xl sm:mt-10"
    @submit.prevent="sendEmail()"
  >
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-4">
      <FormInput
        v-model="formData.companyName"
        autocomplete="organization"
        class="sm:col-span-4"
        label="Company"
        name="company"
        required="required"
        type="text"
      />
      <FormInput
        v-model="formData.firstName"
        autocomplete="given-name"
        class="sm:col-span-2"
        label="First Name"
        name="firstName"
        required="required"
        type="text"
      />
      <FormInput
        v-model="formData.surname"
        autocomplete="last-name"
        class="sm:col-span-2"
        label="Last Name"
        name="lastName"
        required="required"
        type="text"
      />
      <FormInput
        v-model="formData.email"
        autocomplete="email"
        class="sm:col-span-2"
        label="Email"
        name="email"
        required="required"
        type="email"
      />
      <FormInput
        v-model="formData.phoneNumber"
        autocomplete="tel"
        class="sm:col-span-2"
        label="Phone Number"
        name="phoneNumber"
        required="required"
        type="tel"
      />
      <FormTextArea
        v-model="formData.phoneNumber"
        class="sm:col-span-4"
        label="Message"
        name="message"
      />
      <div class="sm:col-span-4">
        <Disclosure v-slot="{ open }" as="div" class="pt-6">
          <dt>
            <DisclosureButton
              class="flex w-full items-start justify-between text-left text-white"
            >
              <span class="text-sm font-semibold leading-7">
                Optional Information
              </span>
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
          <DisclosurePanel as="dd" class="mt-2 px-4">
            <div
              class="sm:col-span-4 grid grid-cols-1 sm:grid-cols-4 gap-y-6 gap-x-8"
            >
              <div class="sm:col-span-4">
                <p class="text-sm text-gray-300">
                  Please provide us with an estimate of each of the following
                  types of appliance you need tested. (Refer to the
                  <router-link
                    class="font-semibold text-indigo-600"
                    target="_blank"
                    to="/appliances"
                    >Appliances
                  </router-link>
                  page for an explanation of each type.)
                </p>
              </div>
              <FormInput
                v-model="formData.type1"
                autocomplete="number"
                class="sm:col-span-1"
                label="Portable"
                name="type1"
                type="number"
              />
              <FormInput
                v-model="formData.type2"
                autocomplete="number"
                class="sm:col-span-1"
                label="Handheld"
                name="type2"
                type="number"
              />
              <FormInput
                v-model="formData.type3"
                autocomplete="number"
                class="sm:col-span-1"
                label="Movable"
                name="type3"
                type="number"
              />
              <FormInput
                v-model="formData.type4"
                autocomplete="number"
                class="sm:col-span-1"
                label="Stationary"
                name="type4"
                type="number"
              />
              <FormInput
                v-model="formData.type5"
                autocomplete="number"
                class="sm:col-span-1"
                label="Fixed"
                name="type5"
                type="number"
              />
              <FormInput
                v-model="formData.type6"
                autocomplete="number"
                class="sm:col-span-1"
                label="Built In"
                name="type6"
                type="number"
              />
              <FormInput
                v-model="formData.type7"
                autocomplete="number"
                class="sm:col-span-1"
                label="IT"
                name="type7"
                type="number"
              />
              <FormInput
                v-model="formData.type8"
                autocomplete="number"
                class="sm:col-span-1"
                label="Power Cabling"
                name="type8"
                type="number"
              />
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
      <!--      <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-4">-->
      <!--        <div class="flex h-6 items-center">-->
      <!--          <Switch-->
      <!--              v-model="formData.agreed"-->
      <!--              :class="[-->
      <!--              formData.agreed ? 'bg-indigo-600' : 'bg-gray-200',-->
      <!--              'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',-->
      <!--            ]"-->
      <!--          >-->
      <!--            <span class="sr-only">Agree to policies</span>-->
      <!--            <span-->
      <!--                :class="[-->
      <!--                formData.agreed ? 'translate-x-3.5' : 'translate-x-0',-->
      <!--                'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',-->
      <!--              ]"-->
      <!--                aria-hidden="true"-->
      <!--            />-->
      <!--          </Switch>-->
      <!--        </div>-->
      <!--        <SwitchLabel class="text-sm leading-6 text-gray-300">-->
      <!--          By selecting this, you agree to our-->
      <!--          {{ ' ' }}-->
      <!--          <router-link class="font-semibold text-indigo-600" to="/"-->
      <!--          >privacy&nbsp;policy-->
      <!--          </router-link>-->
      <!--          .-->
      <!--        </SwitchLabel>-->
      <!--      </SwitchGroup>-->
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
</template>
