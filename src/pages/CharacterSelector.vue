<script setup>
import { ref } from "vue"
import { show, backtoMain, characters, mainGame, emptyName } from "../main.js"
import path from "../assets/path_data.json"
import { player } from "../assets/game/gameplay.js"
import Name from "../components/Name.vue"
const charCard = ref(0)

const enterMainGame = () => player.value.name.trim() === '' ? emptyName() : mainGame(item.id)

function nextChar() {
  charCard.value >= characters.length-1 ? charCard.value = 0 : charCard.value++
}

function previousChar() {
  charCard.value <= 0 ? charCard.value = characters.length-1 : charCard.value--
}
</script>
<template>
    <div class="flex flex-col items-center w-screen h-screen justify-center max-lg:hidden">
        <Name :padding-name-x="20" :padding-name-y="1"/>
        <div class="w-full flex justify-center overflow-x-scroll items-center space-x-4 p-5">
            <div v-for="(item, index) in characters" :key="index">
                <div @click="enterMainGame"
                    class="px-12 py-[3.25rem] rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 bg-center bg-cover cursor-pointer"
                    :style="`background-image: url('${item.bg}')`">
                    <div class="space-y-3">
                        <h2 class="flex text-3xl text-black m04b">
                            <span class="character-name text-white">{{ item.character }}</span>
                        </h2>
                        <img :src="item.icon" alt="" class="w-full h-full bg-white bg-opacity-60">
                        <div class="flex flex-col items-center m04b">
                            <table class="shadow-table text-right text-white m04b">
                                <tr>
                                    <td class="text-left">HP :</td>
                                    <td>{{ item.health }}</td>
                                </tr>
                                <tr>
                                    <td>CRIT :</td>
                                    <td>{{ item.crit }}</td>
                                </tr>
                                <tr>
                                    <td>LUCK :</td>
                                    <td>{{ item.luck }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[10%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer m-4"
            @click="backtoMain()">
            <img :src="path.back" alt="" class="w-full h-full">
        </div>

    </div>
    <!-- RESPONSIVE -->
    <div class="w-screen h-screen lg:hidden flex flex-col justify-center items-center space-y-4">
        <Name text-header-size="2xl" text-label-size="md"/>
        <div class="w-auto flex flex-row justify-center">
            <div class="flex flex-row justify-center w-full h-full">
                <button @click="previousChar" class="pr-2 text-4xl text-white"><span
                        class="pb-1 px-1 bg-black rounded-full bg-opacity-50 font-bold">&#60</span></button>
                <div @click="enterMainGame"
                    class="px-2 py-[3.25rem] space-y-2 items-center justify-center flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer bg-center bg-contain bg-no-repeat"
                    :style="`background-image: url('${characters[charCard].bg}')`">
                    <h2 class="m04b text-l character-name text-white">{{ characters[charCard].character }}</h2>
                    <img :src="characters[charCard].icon" alt="" class="w-2/3 bg-black bg-opacity-60">
                    <div class="flex flex-col items-center m04b">
                        <table class="shadow-table text-left text-white text-sm">
                            <tr>
                                <td>HP :</td>
                                <td>{{ characters[charCard].health }}</td>
                            </tr>
                            <tr>
                                <td>CRIT :</td>
                                <td>{{ characters[charCard].crit }}</td>
                            </tr>
                            <tr>
                                <td>LUCK :</td>
                                <td>{{ characters[charCard].luck }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <button @click="nextChar" class="pl-2 text-4xl text-white"><span
                        class="pb-1 px-1 bg-black rounded-full bg-opacity-50 font-bold">&#62</span></button>
            </div>
        </div>
        <div class="w-full h-[13%] flex justify-center">
            <img :src="path.back" alt="" class=" h-[50%]">
        </div>
    </div>
</template>
<style scoped></style>