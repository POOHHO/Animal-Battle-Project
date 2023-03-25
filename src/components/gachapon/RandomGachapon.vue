<script setup>
import db from "../../../data/db.json"
import { player } from "../../assets/game/gameplay.js"
const props = defineProps({
    randomSkill: { type: Boolean, default: false },
    randomItem: { type: Boolean, default: false },
    iconPath: { type: String },
    modalId: {type: String,require: true}
})


defineEmits(['random'])

const random = () => {
    if (props.randomItem) {
        const randomIndex = Math.floor(Math.random() * db.items.length);
        const items = db.items[randomIndex]
        player.value.inventory.push(items.id)
        return items
    } else if (props.randomSkill) {
        const randomIndex = Math.floor(Math.random() * db.skills.length);
        return db.skills[randomIndex]
    }
}
</script>
<template>
    <div class="flex flex-col items-center ">
        <h1 class="text-center text-2xl text-cyan-200">{{ randomSkill ? "SKILLS" : "ITEMS" }}</h1>
        <img class="scale-75" :src="iconPath" />
        <label :for="modalId" class="btn" @click="$emit('random',random())">100 COIN</label>
    </div>
</template>