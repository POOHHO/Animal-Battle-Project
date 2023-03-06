<script setup>
import { show,backtoMain, backtogame, pause, tryagain } from "../main.js"
import path from "../assets/path_data.json"
import {
  player, monster, level, turn, turns, win, wins,
  playerTurn, getCard, nextTurn, getLoser, getLoserCard
} from "../assets/game/gameplay.js"

function getCardSource(card) {
  return path.card.replace("%card%", card)
}
</script>
<template>
    <!-- HEADER TAB -->
    <div class="flex-none flex justify-between text-2xl px-8 bg-zinc-900 shadow-md z-10 items-center">
        <div class="flex flex-col">
            <p>LEVEL: {{ level }}</p>
            <p>TURN: {{ turns[turn] }}</p>
        </div>
        <!-- pause -->
        <button :disabled="show.playerDead"
            class="h-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer disabled:invisible"
            @click="pause()">
            <img class="h-full" :src="path.pause" alt="pause-btn">
        </button>
    </div>
    <!-- BODY GAME -->
    <div class="flex-1 flex justify-between items-center bg-contain bg-repeat-x bg-center bg-[#18181b] max-lg:-my-32"
        :style="`background-image: url('${path.mainGameBg}')`">
        <img class="h-1/2 ml-14 -scale-x-100 max-lg:h-1/4"
            :class="show.monsterAttack ? 'on-damage' : (turn === 0 ? 'character-turn' : '')" :src="player.getImage()"
            alt="player-idle">
        <img class="h-1/3 mr-14 max-lg:h-1/5"
            :class="show.playerAttack ? 'on-damage' : (turn === 1 ? 'character-turn' : '')" :src="monster.getImage()"
            :alt="monster.getImage()">
    </div>
    <!-- ACTION BAR -->
    <div class="flex flex-wrap items-center justify-center p-5 bg-zinc-900 max-lg:flex-col text-2xl">
        <!-- ATTACK BTN -->
        <button :disabled="!show.attackButton" @click="playerTurn()"
            class="flex-1 py-8 mr-5 w-full bg-emerald-500 text-white shadow-md spacing disabled:bg-zinc-600 hover:bg-teal-600"
            disabled>ATTACK</button>
        <!-- PLAYER -->
        <div class="flex flex-1 w-full py-3">
            <div class="shadow-md w-32 h-32 bg-zinc-800">
                <img class="opacity-85" :src="player.getIcon()" alt="player-icon">
            </div>
            <div class="flex-1 grid space-y-1 items-center ml-5">
                <p class="flex flex-col">
                    <span class="font-bold text-emerald-500 drop-shadow-lg" v-text="player.name"></span>
                <div>
                    <span>{{ `HP: ${player.health}` }}</span>
                    <span v-show="show.monsterAttack" class="text-red-600">{{ `-${monster.damage}` }}</span>
                    <span>{{ `/${player.maxHealth} (${player.character.character})` }} </span>
                </div>
                </p>
                <!-- HEALTH BAR -->
                <div class="bg-zinc-800 h-7 shadow-md mr-3">
                    <div class="bg-emerald-400 h-7 mr-3" :style="`width: ${player.getPercentHealth()}%`"></div>
                </div>
            </div>
        </div>
        <!-- VS -->
        <p>VS</p>
        <!-- MONSTER -->
        <div class="flex flex-1 py-3 w-full md:ml-5">
            <div class="shadow-md w-32 h-32  bg-zinc-800 flex justify-center items-end">
                <img class="opacity-85 w-32 h-20" :src="path.rapterIcon" alt="monster-icon">
            </div>
            <div class="flex-1 grid space-y-1 items-center ml-5">
                <p class="flex flex-col">
                    <span class="font-bold text-red-500 drop-shadow-lg" v-text="monster.name"></span>
                <div>
                    <span>{{ `HP: ${monster.health}` }}</span>
                    <span v-show="show.playerAttack" class="text-red-600">{{ `-${player.damage}` }}</span>
                    <span>{{ `/${monster.maxHealth}` }} </span>
                </div>
                </p>
                <!-- HEALTH BAR -->
                <div class=" bg-zinc-800 h-7 shadow-md mr-3">
                    <div class="bg-red-500 h-7 mr-3" :style="`width: ${monster.getPercentHealth()}%`"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- CARD -->
    <div class="flex">
        <div v-show="show.cardAttack || show.summaryAttack"
            class="absolute inset-0 flex items-center justify-center bg-zinc-700 bg-opacity-20 space-x-3 z-20">
            <div class="flex flex-col space-y-3">
                <div class="flex text-2xl shadow-xl bg-zinc-900 p-5 items-center justify-center">
                    <!-- SUMMARY WIN -->
                    <div v-show="show.summaryAttack">
                        <span :class="win === 0 ? 'text-emerald-500' : (win === 2 ? 'text-emerald-500' : 'text-red-500')">{{
                            wins[win] }}</span><span v-show="win !== 2">&nbsp;WIN</span>
                    </div>
                    <!-- TURN -->
                    <div v-show="!show.summaryAttack">
                        <!-- turns[0] -->
                        <span :class="turn === 0 ? 'text-emerald-500' : 'text-red-500'">{{ turns[turn] }}</span>&nbsp;CARD
                    </div>
                </div>
                <div class="flex justify-between w-53 max-w-2xl bg-gray shadow-xl text-3xl bg-white text-zinc-700">
                    <img class="w-full h-full" :src="getCardSource(getCard())" :alt="getCard()">
                </div>
                <button
                    class="p-2 text-white spacing bg-emerald-600 shadow-lg text-2xl hover:-translate-y-1 hover:bg-teal-400 duration-300"
                    @click="nextTurn()">NEXT TURN</button>
            </div>
            <!-- SUMMARY LOSE -->
            <div class="flex flex-col space-y-3" v-show="show.summaryAttack && win !== 2">
                <div class="flex text-sm shadow-xl bg-zinc-900 p-5 items-center justify-center ">
                    <span :class="win === 0 ? 'text-red-500' : 'text-emerald-500'">{{ getLoser() }}</span>&nbsp;LOSE
                </div>
                <div class="flex justify-between max-w-2xl w-24 bg-white shadow-xl text-md text-zinc-700">
                    <img class="w-full h-full" :src="getCardSource(getLoserCard())" :alt="getLoserCard()">
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center absolute inset-0 bg-zinc-700 bg-opacity-90 w-screen h-screen"
            v-show="show.playerDead">
            <div>
                <img :src="path.gameOver" alt="" class="w-96">
            </div>
            <div class="flex justify-center m-8 space-x-5">
                <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4 text-xl"
                    @click="tryagain()">TRY
                    AGAIN</button>
                <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4 text-xl"
                    @click="backtoMain()">BACK TO MAIN</button>
            </div>
        </div>
        <div class="flex  justify-center items-center absolute inset-0 bg-zinc-700 bg-opacity-90 w-screen h-screen"
            v-show="show.pause">
            <div class="justify-center space-y-5 flex flex-col items-center w-96">
                <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4  text-xl w-1/2"
                    @click="backtogame()">RESUME</button>
                <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4 text-xl w-1/2"
                    @click="backtoMain()">BACK TO MAIN</button>
            </div>
        </div>
    </div>
</template>
<style scoped></style>