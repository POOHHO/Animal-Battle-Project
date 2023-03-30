<script setup>
import { ref } from "vue";
import { player } from "../../assets/game/gameplay.js"
import { useItems } from "../../assets/game/items"
import { usePlayers } from "../../assets/game/players";
const props = defineProps({
    randomSkill: { type: Boolean, default: false },
    randomItem: { type: Boolean, default: false },
    iconPath: { type: String },
    modalId: { type: String, require: true }
})

defineEmits(['random'])
const myItems = useItems()
const myPlayers = usePlayers()
const skillArr = ref([])


const random = () => {
    const currency = player.value.coin
    if (currency.hasCoin(100)) {
        const items = myItems.getItems()
        currency.substract(100)
        if (props.randomItem) {
            const randomIndex = Math.floor(Math.random() * items.length)
            const item = items[randomIndex]
            if (item.type === "potion") player.value.potions.push(item.id)
            else player.value.inventory.push(item.id)
            myPlayers.updatePlayer(player.value)
            return item
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