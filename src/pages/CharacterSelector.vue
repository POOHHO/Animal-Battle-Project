<script setup>
import { ref } from "vue"
import { backtoMain, characters } from "../main.js"
import path from "../assets/path_data.json"
import Name from "../components/Name.vue"
import CharacterCard from "../components/CharacterCard.vue"
import Back from "../components/button/Back.vue"

const charId = ref(0)

const nextChar = () => charId.value >= characters.length-1 ? charId.value = 0 : charId.value++
const previousChar = () => charId.value <= 0 ? charId.value = characters.length-1 : charId.value--

</script>
<template>
    <div class="flex flex-col items-center w-screen h-screen justify-center max-lg:hidden">
        <Name :padding-name-x="20" :padding-name-y="1"/>
        <div class="w-full flex justify-center overflow-x-scroll items-center space-x-4 p-5">
            <CharacterCard v-for="(item, index) in characters" :key="index" :char-id="item.id"/>
        </div>
        <Back />
    </div>
    <!-- RESPONSIVE -->
    <div class="w-screen h-screen lg:hidden flex flex-col justify-center items-center space-y-4">
        <Name text-header-size="xl" text-label-size="sm"/>
        <div class="w-auto flex flex-row justify-center">
            <div class="flex flex-row justify-center w-full h-full">
                <button @click="previousChar" class="pr-2 text-4xl text-white">
                    <span class="pb-1 px-1 bg-black rounded-full bg-opacity-50 font-bold">&#60</span>
                </button>
                <CharacterCard :char-id="charId"/>
                <button @click="nextChar" class="pl-2 text-4xl text-white">
                    <span class="pb-1 px-1 bg-black rounded-full bg-opacity-50 font-bold">&#62</span>
                </button>
            </div>
        </div>
        <Back height="2/3"/>
    </div>
</template>
<style scoped></style>