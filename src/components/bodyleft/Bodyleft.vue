<template>
    <div class=" relative w-full h-full flex flex-col">
        <div class="relative w-full h-auto p-3.5 flex flex-col ">
            <p class="text-center text-2xl text-gray-200">Learn</p>

            <div class=" border-t-2 border-gray-700 border-b grid grid-cols-2 justify-evenly w-full *:text-gray-600 *:hover:text-gray-400 *:hover:underline  gap-3.5 ">
                <router-link to="/http">Http</router-link>
                <router-link to="/ref">Ref</router-link>
                <router-link to="/lifecycle">Lifecycle</router-link>
                <router-link to="/provideandinject">ProvideAndInject</router-link>
                <router-link to="/forminput">Forminput</router-link>
                <router-link to="/animationplaincss">Animationplaincss</router-link>
                <router-link to="/animateVfor">animateVfor</router-link>
                <router-link to="/attrs">Attrs</router-link>
                <router-link to="/propslearning">Propslearning</router-link>
                <router-link to="/root">Root</router-link>
                <router-link to="/watch">Watch</router-link>
                <router-link to="/inputmodel">inputModel</router-link>
                <router-link to="/von">Von</router-link>
                <router-link to="/computed">Computed</router-link>
            </div>
        </div>



        <div class="relative w-full h-auto p-3.5 flex flex-col ">
           <p class="text-center text-2xl text-gray-200">Build</p>

           <div class=" border-t-2 border-gray-700 border-b grid grid-cols justify-evenly w-full *:text-gray-600 *:hover:text-gray-400 *:hover:underline  gap-3.5  ">
               <router-link to="/Builds">there_main_four</router-link>
               <router-link to="/reactivity">Reactivity</router-link>
           </div>
       </div>



        <div class="relative w-full h-auto p-3.5 flex flex-col ">
           <p class="text-center text-2xl text-gray-200">Reactive</p>

           <div class=" border-t-2 border-gray-700 border-b grid grid-cols-2 justify-evenly w-full *:text-gray-600 *:hover:text-gray-400 *:hover:underline  gap-3.5  ">
               <router-link to="/firstsetup">FirstsetUp</router-link>
               <router-link to="/reactivity">Reactivity</router-link>
               <router-link to="/props">Props</router-link>
           </div>
       </div>

    </div>
</template>