<template>
<div class="flex flex-col gap-10">

    <div class="grid grid-cols-4 gap-10 flex-col">
        <div class="flex gap-10">
            <div>
                {{ one }}
            </div>
            +
            <div>
                {{ two }}
            </div>
            =
            <div>
                {{ sum}}
            </div>
        </div>
        <div class="flex gap-10">
            <div>
                {{ one }}
            </div>
            -
            <div>
                {{ two }}
            </div>
            =
            <div>
                {{ di}}
            </div>
        </div>
        <div class="flex gap-10">
            <div>
                {{ one }}
            </div>
            x
            <div>
                {{ two }}
            </div>
            =
            <div>
                {{ mul}}
            </div>
        </div>

        <div class="flex gap-10">
            <div>
                {{ one }}
            </div>
            /
            <div>
                {{ two }}
            </div>
            =
            <div>
                {{ sum}}
            </div>
        </div>

        
    </div>

    <div class="flex *:text-white  gap-10 *:bg-gray-700/50 *:p-3.5">

        <button @click="clickone">countOne</button>
        <button @click="clicktow">countTow</button>
    </div>
</div>
</template>

<script setup>
// import Anothersetup from './Anothersetup.vue';
// import Testsetup from './Testsetup.vue';
import {  provide,ref,computed} from 'vue';

const one = ref(0);
const two = ref(0);

const sum = computed(() => one.value + two.value);
const mul = computed(() => one.value * two.value);
const di = computed(() => one.value - two.value);

const clickone = () => {
    one.value++
}
const clicktow = () => {
    two.value++
}
// Provide the refs directly
provide('numberone', one);
provide('numbertwo', two);
</script>
