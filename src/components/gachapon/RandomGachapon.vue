<script setup>
import { ref, onMounted } from "vue";
import { player, coin } from "../../assets/game/gameplay.js"
import { getItems, getSkill } from "../../assets/game/data-handler.js"
const props = defineProps({
    randomSkill: { type: Boolean, default: false },
    randomItem: { type: Boolean, default: false },
    iconPath: { type: String },
    modalId: { type: String, require: true }
})

defineEmits(['random'])

const itemsArr = ref([])
const skillArr = ref([])

onMounted(async () => {
    itemsArr.value = await getItems()
    skillArr.value = await getSkill()
})


const random = () => {
    if (coin.value.hasCoin(100)) {
        coin.value.substract(100)
        console.log(coin.value.hasCoin(100))
        if (props.randomItem) {
            const randomIndex = Math.floor(Math.random() * itemsArr.value.length)
            const items = itemsArr.value[randomIndex]
            player.value.inventory.push(items)
            return items
        } else if (props.randomSkill) {
            const randomIndex = Math.floor(Math.random() * skillArr.value.length)
            return skillArr.value[randomIndex]
        }
    } 
}

</script>
<template>
    <div class="flex flex-col items-center ">
        <h1 class="text-center text-2xl text-cyan-200">{{ randomSkill ? "SKILLS" : "ITEMS" }}</h1>
        <img class="scale-75" :src="iconPath" />
        <label v-show="coin.hasCoin(100)" :for="modalId" class="btn" @click="$emit('random', random())">100 COIN</label>
        <label v-show="!coin.hasCoin(100)" class="btn bg-red-600">100 COIN</label>
    </div>
</template>
<style scoped></style>