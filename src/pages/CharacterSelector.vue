<script setup>
import { characters } from "../main.js"
import Name from "../components/Name.vue"
import CharacterCard from "../components/CharacterCard.vue"
import Back from "../components/button/Back.vue"
import CharacterSlider from "../components/CharacterSlider.vue"

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
        <Name text-header-size="3xl" text-label-size="sm"/>
        <div class="w-auto flex flex-row justify-center text-white">
            <CharacterSlider/>
        </div>
        <Back height="16"/>
    </div>
</template>
<style scoped></style>