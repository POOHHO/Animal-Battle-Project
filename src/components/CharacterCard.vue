<script setup>
import { characters, mainGame, emptyName , campGame  } from "../main.js"
import { player } from "../assets/game/gameplay.js"
const props = defineProps({ charId: Number })

const enterCamp = (id) => player.value.name.trim() === '' ? emptyName() : campGame(id)

</script>
<template>
    <div @click="enterCamp(charId)"
        class="px-2 py-[3.25rem] space-y-2 items-center justify-center flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer bg-center bg-contain bg-no-repeat"
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
</template>
<style scoped>
.character-name {
  filter: drop-shadow(4px 0 0 black) drop-shadow(0 4px 0 black) drop-shadow(-4px 0 0 black) drop-shadow(0 -4px 0 black);
}
</style>