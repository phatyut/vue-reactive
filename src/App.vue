<template>
  <div class="flex w-screen h-screen gap-0.5 ">
      <div class="relative  w-[20%] h-full bg-gray-900">
            <Bodyleft></Bodyleft>
      </div>
      <div class="text-white bg-gray-900 relative w-screen h-screen">
        <router-view></router-view>
      </div>

  </div>
</template>