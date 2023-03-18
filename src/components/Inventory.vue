<script setup>

import InventorySlot from "./inventory/InventorySlot.vue";
import { ref } from "vue"
import { getItems } from "../assets/game/data-handler"
const props = defineProps({
    player: { type: Object }
})
// const items = ref('')
// const loadItems = async () => {
//     items.value = await getItems()
// }
// loadItems()
const hasItem = (itemIndex) => itemIndex <= props.player.inventory.length
</script>
 
<template>
    <!-- The button to open modal -->
    <label for="my-modal-6" class="btn">Inventory</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box p-3">
            <p class="font-bold text-3xl text-center pb-3 text-white">Inventory</p>
            <div class="flex gap-x-2">
                <div class="flex flex-col items-center justify-evenly rounded-md w-1/3">
                    <div class="flex justify-center ">
                        <h1 class="text-3xl font-bold break-all">{{ player.name }}</h1>
                    </div>
                    <img class="w-2/3" :src="player.getImage()" alt="">
                    <div class="flex flex-wrap justify-evenly w-full gap-y-2 ">
                        <InventorySlot>W</InventorySlot>
                        <InventorySlot>AR</InventorySlot>
                        <InventorySlot>AC</InventorySlot>
                    </div>
                </div>
                <div class="grid grid-cols-4 place-items-center gap-1 py-1 border border-white rounded-md w-2/3 ">
                    <InventorySlot v-for="itemIndex of 24" :key="itemIndex" :width="18" :height="18">
                        <!-- <img v-if="hasItem(itemIndex)" :src="items.find((item) => item.id === player.getInventory(itemIndex-1)).imgPath" :alt="index"
                            class="w-1/2"> -->
                        <button class="screen text-xs rounded-sm w-3/4"
                            :class="hasItem(itemIndex) ? 'bg-emerald-400 text-white' : 'bg-slate-400 text-slate-300'"
                            :disabled="!hasItem(itemIndex)" @click="player.useItem(item)">USE</button>
                    </InventorySlot>
                </div>
            </div>
            <div class="modal-action mt-3">
                <label for="my-modal-6" class="btn">BACK</label>
            </div>
        </div>
    </div>
</template>
 
<style scoped></style>