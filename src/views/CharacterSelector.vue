<script setup>
import { characters,show,player,monster,auth,popup } from "../main.js"
import { usePlayers } from "../assets/game/players"
import path from "../assets/path_data.json"

import router from "../router"
import Name from "../components/Name.vue"
import CharacterCard from "../components/CharacterCard.vue"
import Back from "../components/button/Back.vue"
import CharacterSlider from "../components/CharacterSlider.vue"
import PasswordModal from "../components/authentication/PasswordModal.vue"

const myPlayers = usePlayers()
const enterCamp = (characterId, password) => {
    // NAME EMPTY
    if (player.value.name.trim() === '') popup("nameEmptyAlert", 3000)
    else if (password.trim() === '') popup("passwordEmptyAlert", 3000)
    // PLAYER NAME EXISTS
    else if (myPlayers.getPlayers().filter((item) => item.name.toLowerCase() === player.value.name.toLowerCase()).length > 0) popup("existsAlert", 3000)
    else camp(characterId, password)
}
const camp = async (characterId, password) => {
    auth.value = true
    player.value.selectCharacter(characterId)
    player.value.password = password
    monster.value.setMaxHealth()
    const playerId = await myPlayers.addPlayer(player.value)
    const name = player.value.name
    player.value.name = ''
    player.value.id = playerId.id
    router.push("/camp")
    player.value.name = name

}
</script>
<template>
    <div class="w-screen h-screen bg-cover" :style="`background-image: url('${path.mainimages}');`">
        <div class="flex flex-col items-center w-full h-full justify-center'">
            <div class="flex flex-col items-center w-screen h-screen justify-center max-lg:hidden">
                <Name :padding-name-x="20" :padding-name-y="1" :show="show" :player="player"/>
                <div class="w-full flex justify-center overflow-x-scroll items-center space-x-4 p-5">
                    <CharacterCard v-for="(item, index) in characters" :key="index" :char-id="item.id" :characters="characters"/>
                </div>
                <Back />
            </div>
            <!-- RESPONSIVE -->
            <div class="w-screen h-screen lg:hidden flex flex-col justify-center items-center space-y-4">
                <Name :show="show" :player="player"/>
                <div class="w-auto flex flex-row justify-center text-white">
                    <CharacterSlider :characters="characters"/>
                </div>
                <Back />
            </div>
            <PasswordModal @create="enterCamp(charId, $event.password)" />
        </div>
    </div>
</template>
<style scoped></style>