<script setup>
import { show } from "../main.js"
import path from "../assets/path_data.json"
import { computed } from "vue";
import { turn, turns, win, wins, getCard, nextTurn, getLoser, getLoserCard } from "../assets/game/gameplay.js"

const getCardSource = (card) => path.card.replace("%card%", card)
const computedWin = computed(() => {
    if (win.value === 0) return 'text-emerald-500'
    else if (win.value === 1) return 'text-red-500'
    else return 'text-emerald-500'
})
const computedLoser = computed(() => {
    if (win.value === 0) return 'text-red-500'
    else if (win.value === 1) return 'text-emerald-500'
    else return 'text-red-500'
})
const computedTurn = computed(() => turn.value === 0 ? 'text-emerald-500' : 'text-red-500')
</script>
<template>
    <div v-show="show.cardAttack || show.summaryAttack" class="flex absolute inset-0 items-center justify-center bg-zinc-700 bg-opacity-20 space-x-3 z-20">
        <div class="flex flex-col space-y-3">
            <div class="flex text-2xl shadow-xl bg-zinc-900 p-5 items-center justify-center">
                <!-- SUMMARY WIN -->
                <div v-show="show.summaryAttack">
                    <span :class="computedWin">{{ wins[win] }}</span><span v-show="win !== 2">&nbsp;WIN</span>
                </div>
                <!-- TURN -->
                <div v-show="!show.summaryAttack">
                    <span :class="computedTurn">{{ turns[turn] }}</span>&nbsp;CARD
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
                <span :class="computedLoser">{{ getLoser() }}</span>&nbsp;LOSE
            </div>
            <div class="flex justify-between max-w-2xl w-24 bg-white shadow-xl text-md text-zinc-700">
                <img class="w-full h-full" :src="getCardSource(getLoserCard())" :alt="getLoserCard()">
            </div>
        </div>
    </div>
</template>
<style scoped></style>