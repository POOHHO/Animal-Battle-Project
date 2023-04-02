<script setup>
import { characters,show,player } from "../main.js"
import { usePlayers } from "../assets/game/players"
import path from "../assets/path_data.json"

import Name from "../components/Name.vue"
import CharacterCard from "../components/CharacterCard.vue"
import Back from "../components/button/Back.vue"
import CharacterSlider from "../components/CharacterSlider.vue"

const myPlayers = usePlayers()
</script>
<template>
    <div class="w-screen h-screen bg-cover" :style="`background-image: url('${path.mainimages}');`">
        <div class="flex flex-col items-center w-full h-full justify-center'">
            <div class="flex flex-col items-center w-screen h-screen justify-center max-lg:hidden">
                <Name :padding-name-x="20" :padding-name-y="1" :show="show" :player="player"/>
                <div class="w-full flex justify-center overflow-x-scroll items-center space-x-4 p-5">
                    <CharacterCard v-for="(item, index) in characters" :key="index" :char-id="item.id" :characters="characters" :my-players="myPlayers"/>
                </div>
                <Back />
            </div>
            <!-- RESPONSIVE -->
            <div class="w-screen h-screen lg:hidden flex flex-col justify-center items-center space-y-4">
                <Name :show="show" :player="player"/>
                <div class="w-auto flex flex-row justify-center text-white">
                    <CharacterSlider :characters="characters" :my-players="myPlayers"/>
                </div>
                <Back />
            </div>
        </div>
    </div>
</template>
<style scoped></style>