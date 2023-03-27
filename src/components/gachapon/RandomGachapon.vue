<script setup>
import { ref, onMounted } from "vue";
import { player } from "../../assets/game/gameplay.js"
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
    if (player.value.coin.hasCoin(100)) {
        player.value.coin.substract(100)
    //     console.log(player.value.inventory.length);
    //     console.log(player.value.coin.hasCoin(100))
    //    console.log(player.value.inventory[0].type);
        if (props.randomItem) {
            const randomIndex = Math.floor(Math.random() * itemsArr.value.length)
            const items = itemsArr.value[randomIndex]
            console.log(items.type);
            if (items.type === "potion") {
                player.value.potions.push(items)
            } else {
                player.value.inventory.push(items)
            }
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
        <h1 class="text-center text-2xl text-emerald-500">{{ randomSkill ? "SKILLS" : "ITEMS" }}</h1>
        <img class="scale-75" :src="iconPath" />
        <label v-show="player.coin.hasCoin(100) && !player.isMaxInventory()" :for="modalId" class="btn text-white bg-emerald-500 hover:bg-teal-600" @click="$emit('random', random())">100 COIN</label>
        <label v-show="!player.coin.hasCoin(100) || player.isMaxInventory()"  class="btn bg-red-600 text-white">100 COIN</label>
    </div>
</template>
<style scoped></style>