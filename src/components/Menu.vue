<script setup>

const props = defineProps({ gameOverIcon: { type: String,required: true },show: { type: Object, required: true } })
const emits = defineEmits(["campOrResume","campOrMain"])
const action = (actionId) => emits(actionId,(props.show.playerDead ? 'playerDead' : 'pause'))
</script>
<template>
    //PLAYER DEAD OR PAUSE
    <div class="flex flex-col justify-center items-center absolute inset-0 bg-zinc-700 bg-opacity-90 w-screen h-screen" v-show="show.playerDead || show.pause">
        <img v-if="show.playerDead" :src="gameOverIcon" alt="game-over-icon" class="w-56">
        <div class="flex justify-center" :class="show.playerDead ? 'items-center gap-5 mt-5 flex-wrap' : 'flex-col gap-y-5'">
            <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4 text-xl" @click="action('campOrResume')">
                {{ show.playerDead ? 'BACK TO CAMP' : 'RESUME' }}
            </button>
            <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4 text-xl" @click="action('campOrMain')">
                {{ show.playerDead ? 'BACK TO MAIN' : 'BACK TO CAMP' }}
            </button>
        </div>
    </div>
</template>
<style scoped></style>