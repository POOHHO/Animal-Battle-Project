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
    <div v-show="show.cardAttack || show.summaryAttack"
        class="flex absolute inset-0 items-center justify-center bg-zinc-700 bg-opacity-20 space-x-3 z-20">
        <div class="flex flex-col space-y-3">
            <div class="flex text-2xl shadow-xl bg-zinc-900 items-center justify-center h-20">

                <div v-show="show.summaryAttack" class="flex flex-col justify-center items-center">
                    <span :class="computedWin">{{ wins[win] }}</span>
                    <span v-show="win !== 2">&nbsp;WIN</span>
                </div>

                <div v-show="!show.summaryAttack" class="flex flex-col justify-center items-center">
                    <span :class="computedTurn">{{ turns[turn] }}</span>
                    <span>&nbsp;CARD</span>
                </div>
            </div>
            <div class="flex justify-between bg-gray shadow-xl text-3xl bg-white text-zinc-700">
                <img class="w-48 h-65" :src="getCardSource(getCard())" :alt="getCard()">
            </div>
            <button
                class="h-14 text-white spacing bg-emerald-600 shadow-lg text-2xl hover:-translate-y-1 hover:bg-teal-400 duration-300"
                @click="nextTurn()">NEXT TURN</button>
        </div>

        <div class="flex flex-col space-y-3 w-24" v-show="show.summaryAttack && win !== 2">
            <div class="flex flex-col text-sm shadow-xl bg-zinc-900 items-center justify-center h-16">
                <span :class="computedLoser">{{ getLoser() }}</span>&nbsp;LOSE
            </div>
            <div class="flex justify-between bg-white shadow-xl text-md text-zinc-700">
                <img class="w-24 h-36" :src="getCardSource(getLoserCard())" :alt="getLoserCard()">
            </div>
        </div>
    </div>
</template>
<style scoped></style>