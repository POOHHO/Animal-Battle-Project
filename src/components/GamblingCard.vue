<script setup>
import { computed } from "vue";

const props = defineProps({ 
    player: Object,
    monster: Object,turn: Number,
    turns: { type:Array, default: () => []} ,
    wins: { type:Array, default: () => []} ,
    win: Number,
    cardPath: { type: String,required: true },
    show: { type: Object,required: true }
})
defineEmits(["nextTurn"])
const getCardSource = (card) => props.cardPath.replace("%card%", card)
const computedWin = computed(() => props.win === 1 ? 'text-red-500' : 'text-emerald-500')
const computedLoser = computed(() => props.win === 1 ? 'text-emerald-500' : 'text-red-500')
const computedTurn = computed(() => props.turn === 0 ? 'text-emerald-500' : 'text-red-500')

const getCard = () => {
    if (props.turn === 0) return props.player.getCardName() //PLAYER
    else if (props.turn === 1) return props.monster.getCardName() //MONSTER
    else return props.win === 0 ? props.player.getCardName() : props.monster.getCardName()
}
const getLoser = () => props.wins[props.win === 0 ? props.win+1 : props.win-1] // 0 PLAYER : 1 MONSTER
const getLoserCard = () => props.win === 0 ? props.monster.getCardName() : props.player.getCardName()

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
                @click="$emit('nextTurn',turn)">NEXT TURN</button>
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