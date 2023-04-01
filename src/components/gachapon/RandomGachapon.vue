<script setup>
import { player } from "../../assets/game/gameplay.js"
import { useItems } from "../../assets/game/items"
import { usePlayers } from "../../assets/game/players";
const props = defineProps({
    randomPotion: { type: Boolean, default: false },
    randomItem: { type: Boolean, default: false },
    iconPath: { type: String },
    modalId: { type: String, require: true }
})

defineEmits(['random'])
const myItems = useItems()
const myPlayers = usePlayers()

const POTION_PRICE = 50
const ITEM_PRICE = 100

const random = () => {
    if (props.randomItem) {
        const item = randomItem(myItems.getItems(),ITEM_PRICE)
        player.value.inventory.push(item.id)
        myPlayers.updatePlayer(player.value)
        return item
    } else if (props.randomPotion) {
        const potion = randomItem(myItems.getPotions(),POTION_PRICE)
        console.log(potion);
        player.value.potions.push(potion.id)
        myPlayers.updatePlayer(player.value)
        return potion
    }
}
const randomItem = (items,price) => {
    const currency = player.value.coin
    if (!currency.hasCoin(price)) return undefined
    currency.substract(price)
    const randomIndex = Math.floor(Math.random() * items.length)
    const item = items[randomIndex]
    return item
}
const price = props.randomPotion ? POTION_PRICE : ITEM_PRICE
</script>
<template>
    <div class="flex flex-col items-center ">
        <h1 class="text-center text-2xl text-emerald-500">{{ randomPotion ? "POTIONS" : "ITEMS" }}</h1>
        <img class="scale-75" :src="iconPath"/>
        <label v-show="player.coin.hasCoin(price) && !player.isMaxInventory()" :for="modalId"
            class="btn text-white bg-emerald-500 hover:bg-teal-600" @click="$emit('random', random())">
            {{ price }} COIN
        </label>
        <label v-show="!player.coin.hasCoin(price) || player.isMaxInventory()" class="btn bg-red-600 text-white">
            {{ price }} COIN
        </label>
    </div>
</template>
<style scoped></style>