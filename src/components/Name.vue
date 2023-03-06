<script setup>
import { show } from "../main.js"
import { player } from "../assets/game/gameplay.js"

const props = defineProps({
    textErrorSize: { type: String, default: "xs" },
    textHeaderSize: { type: String, default: "5xl" },
    textLabelSize: { type: String, default: "2xl" },
    paddingNameX: { type: Number, default: 0},
    paddingNameY: { type: Number, default: 0},
})
</script>
<template>
    <div class="flex flex-col items-center space-y-4">
        <div class="text-center text-black m04b absolute z-10 top-8" v-show="show.nameEmptyAlert">
            <div class="p-2 bg-red-600 items-center text-white leading-none rounded-full flex" role="alert">
                <span class="flex rounded-full bg-white uppercase px-2 font-bold mr-3 text-black" :class="`text-${textErrorSize}`">Error!</span>
                <span class="font-semibold mr-2 text-left flex-auto">Enter Your Name</span>
            </div>
        </div>
        
        <h1 class="justify-center flex text-center m04b choose-character" :class="`text-${textHeaderSize}`">Choose Character</h1>
        <label class="text-white shadow-table m04b" for="YOURNAME" :class="`text-${textLabelSize}`">Your Name:</label>
        <input v-model="player.name"
            class="bg-slate-50 border-4 border-slate-600 bg-opacity-65 text-center m04b" type="text"
            placeholder="ENTER YOUR NAME" maxlength="18"
            :class="`py-${paddingNameY} px-${paddingNameX}`">
    </div>
</template>
<style></style>