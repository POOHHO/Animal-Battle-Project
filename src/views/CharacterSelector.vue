<script setup>
import { onMounted } from "vue"
import { characters } from "../main.js"
import path from "../assets/path_data.json"
import Name from "../components/Name.vue"
import CharacterCard from "../components/CharacterCard.vue"
import Back from "../components/button/Back.vue"
import CharacterSlider from "../components/CharacterSlider.vue"
import { usePlayers } from "../assets/game/players"
import Background from "../components/Background.vue"
import PasswordModal from "../components/authentication/PasswordModal.vue"
const myPlayers = usePlayers()
onMounted(async () => { await myPlayers.fetchPlayers() })



</script>

<template>
    <Background :background-image="path.mainimages" :center="true">
        <div class="flex flex-col items-center w-screen h-screen justify-center max-lg:hidden">
            <Name :padding-name-x="20" :padding-name-y="1" />
            <div class="w-full flex justify-center overflow-x-scroll items-center space-x-4 p-5">
                <CharacterCard v-for="(item, index) in characters" :key="index" :char-id="item.id" />
            </div>
            <Back />
        </div>
        <!-- RESPONSIVE -->
        <div class="w-screen h-screen lg:hidden flex flex-col justify-center items-center space-y-4">
            <Name />
            <div class="w-auto flex flex-row justify-center text-white">
                <CharacterSlider />
            </div>
            <Back height="16" />
        </div>
        
    </Background>
</template>
<style scoped></style>