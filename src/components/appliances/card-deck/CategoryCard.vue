<script setup>
defineProps({
  image: String,
});

function getImageUrl(fileName) {
  return new URL(`/src/assets/images/${fileName}`, import.meta.url);
}
</script>

<template>
  <!--Col-->
  <div
    class="xl:w-[calc(25%-2rem)] lg:w-[calc(33%-2rem)] md:w-[calc(50%-2rem)] w-full mb-8 mt-0 mx-0 md:m-4 cursor-pointer"
    ontouchstart="this.classList.toggle('hover');"
  >
    <!--Container-->
    <div class="transform-style-3d perspective-1000 group">
      <!--Front-->
      <div
        class="bg-cover shadow-card rounded-xl bg-center ease-in-out duration-700 backface-hidden text-center min-h-[350px] h-auto text-white text-2xl after:absolute after:inset-0 after:z-[1] after:w-full after:h-full after:content-[''] after:block after:opacity-60 after:bg-black after:backface-hidden after:rounded-xl group-hover:ease-in-out group-hover:duration-700 rotate-y-0 transform-style-3d group-hover:-rotate-y-180 group-hover:transform-style-3d"
      >
        <img
          :alt="image"
          :src="getImageUrl(image)"
          class="rounded-xl absolute inset-0 h-full object-cover"
        />
        <!--Inner-->
        <div
          class="-translate-y-1/2 translate-z-[60px] scale-95 top-1/2 absolute left-0 w-full p-8 z-20 outline-transparent outline-1 perspective-[inherit]"
        >
          <p
            class="font-3xl mb-8 relative after:content-[''] after:w-16 after: h-[2px] after:absolute after:bg-[#c6d4df] after:block after:left-0 after:right-0 after: my-0 mx-auto after:-bottom-[75px]"
          >
            <slot name="title">Default Title</slot>
          </p>
        </div>
      </div>
      <!--Back-->
      <div
        class="absolute inset-0 w-full bg-cover bg-white shadow-card rounded-xl bg-center ease-in-out duration-700 backface-hidden text-center min-h-[350px] h-auto text-white text-2xl group-hover:ease-in-out group-hover:duration-700 group-hover:rotate-y-0 group-hover:transform-style-3d rotate-y-180 transform-style-3d"
      >
        <!--Logo-->
        <div
          class="flex justify-center -translate-y-1/2 translate-z-[60px] scale-95 top-1/4 absolute left-0 w-full p-8 z-20 outline-transparent outline-1 perspective-[inherit]"
        >
          <img
            :src="getImageUrl('rbm.logo.svg')"
            alt="logo"
            class="w-7/12 h-full z-30"
          />
        </div>

        <!--Inner-->
        <div
          class="-translate-y-1/2 translate-z-[60px] scale-95 top-2/3 absolute left-0 w-full p-8 z-20 outline-transparent outline-1 perspective-[inherit]"
        >
          <p class="text-black text-md">
            <slot>Default Back</slot>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
