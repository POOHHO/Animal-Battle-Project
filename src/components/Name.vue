<script setup>
import { show } from "../main.js"
import { player } from "../assets/game/gameplay.js"

const props = defineProps({
    textErrorSize: { type: String, default: "xs" },
    textHeaderSize: { type: String, default: "4xl" },
    textLabelSize: { type: String, default: "2xl" },
    paddingNameX: { type: Number, default: 0 },
    paddingNameY: { type: Number, default: 0 }
})
const paddingRemX = `${props.paddingNameX / 4}rem`
const paddingRemY = `${props.paddingNameY / 4}rem`
</script>
<template>
    <div class="flex flex-col items-center space-y-4">
        <div class="text-center text-black m04b absolute z-10 top-8" v-show="show.nameEmptyAlert">
            <div class="p-2 bg-red-600 items-center text-white leading-none rounded-full flex" role="alert">
                <span
                    :class="`text-${textErrorSize} flex rounded-full bg-white uppercase px-2 font-bold mr-3 text-black`">Error!</span>
                <span class="font-semibold mr-2 text-left flex-auto">Enter Your Name</span>
            </div>
        </div>
        <h1 class="justify-center flex text-center m04b choose-character " :class="`text-${textHeaderSize}`">Choose
            Character</h1>
        <label class="text-white shadow-table m04b" for="YOURNAME" :class="`text-${textLabelSize}`">Your Name</label>
        <input v-model="player.name"
            class="`bg-slate-50 border-4 border-slate-600 bg-opacity-65 text-center m04b paddingX paddingY`" type="text"
            placeholder="ENTER YOUR NAME" maxlength="18">
    </div>
</template>
<style scoped>
.paddingX {
    padding-left: v-bind(paddingRemX);
    padding-right: v-bind(paddingRemX);
}

.paddingY {
    padding-top: v-bind(paddingRemY);
    padding-bottom: v-bind(paddingRemY);
}

.choose-character {
    filter: drop-shadow(1px 0 0 black) drop-shadow(0 1px 0 black) drop-shadow(-1px 0 0 black) drop-shadow(0 -1px 0 black);
}</style>