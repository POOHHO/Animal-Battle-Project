<script setup>

const props = defineProps({
    randomPotion: { type: Boolean, default: false },
    randomItem: { type: Boolean, default: false },
    iconPath: { type: String },
    modalId: { type: String, required: true },
    player: { type: Object, required: true},
    myItems: { required: true},
    myPlayers: { required: true}
})

defineEmits(['random'])

const POTION_PRICE = 50
const ITEM_PRICE = 100

const random = () => {
    if (props.randomItem) {
        const item = randomItem(props.myItems.getItems(),ITEM_PRICE)
        props.player.inventory.push(item.id)
        props.myPlayers.updatePlayer(props.player)
        return item
    } else if (props.randomPotion) {
        const potion = randomItem(props.myItems.getPotions(),POTION_PRICE)
        props.player.potions.push(potion.id)
        props.myPlayers.updatePlayer(props.player)
        return potion
    }
}
const randomItem = (items,price) => {
    const currency = props.player.coin
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