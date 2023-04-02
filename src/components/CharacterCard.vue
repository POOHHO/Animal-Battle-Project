<script setup>
import { popup,player, monster,auth } from "../main.js"
import router from "../router/index.js";
import PasswordModal from "./authentication/PasswordModal.vue";

const props = defineProps({ characters: { type: Array,required: true },charId: Number, myPlayers: {required: true} })

const camp = async (characterId, password) => {
    auth.value = true
    player.value.selectCharacter(characterId)
    player.value.password = password
    monster.value.setMaxHealth()
    const playerId = await props.myPlayers.addPlayer(player.value)
    const name = player.value.name
    player.value.name = ''
    player.value.id = playerId.id
    router.push("/camp")
    player.value.name = name

}

const enterCamp = (characterId, password) => {
    // NAME EMPTY
    if (player.value.name.trim() === '') popup("nameEmptyAlert", 3000)
    else if (password.trim() === '') popup("passwordEmptyAlert", 3000)
    // PLAYER NAME EXISTS
    else if (props.myPlayers.getPlayers().filter((item) => item.name.toLowerCase() === player.value.name.toLowerCase()).length > 0) popup("existsAlert", 3000)
    else camp(characterId, password)
}

</script>
<template>
    <label for="passwordModal">
        <div class="px-2 py-[3.25rem] space-y-2 items-center justify-center flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer bg-center bg-contain bg-no-repeat"
            :style="`background-image: url('${characters[charId].bg}')`">
            <h2 class="m04b text-l character-name text-white">{{ characters[charId].character }}</h2>
            <img :src="characters[charId].icon" alt="" class="w-2/3 bg-black bg-opacity-60">
            <div class="flex flex-col items-center m04b">
                <table class="shadow-table text-left text-white text-sm">
                    <tr>
                        <td>HP :</td>
                        <td>{{ characters[charId].health }}</td>
                    </tr>
                    <tr>
                        <td>CRIT :</td>
                        <td>{{ characters[charId].crit }}</td>
                    </tr>
                    <tr>
                        <td>LUCK :</td>
                        <td>{{ characters[charId].luck }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </label>
    <PasswordModal @create="enterCamp(charId, $event.password)" />
</template>
<style scoped>
.character-name {
    filter: drop-shadow(4px 0 0 black) drop-shadow(0 4px 0 black) drop-shadow(-4px 0 0 black) drop-shadow(0 -4px 0 black);
}
</style>