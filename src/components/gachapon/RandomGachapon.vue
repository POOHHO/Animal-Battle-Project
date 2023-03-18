<script setup>
import { randomGachaItem, randomGachaSkill } from "../../main.js"
const props = defineProps({
    randomSkill: { type: Boolean, default: false },
    randomItem: { type: Boolean, default: false },
    iconPath: { type: String },
    modalId: {type: String,require: true}
})
const random = () => {
    if (props.randomSkill) return randomGachaSkill()
    else if (props.randomItem) return randomGachaItem()
}
</script>
<template>
    <div class="flex flex-col items-center ">
        <h1 class="text-center text-2xl text-cyan-200">{{ randomSkill ? "SKILLS" : "ITEMS" }}</h1>
        <img class="scale-75" :src="iconPath" />
        <label :for="modalId" class="btn" @click="$emit('random',random())">100 COIN</label>
    </div>
</template>