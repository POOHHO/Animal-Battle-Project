<script setup>

import InventorySlot from "./InventorySlot.vue";
import { player } from "../../assets/game/gameplay";
const props = defineProps({
    player: { type: Object }
})

const getInventory = (itemIndex) => player.value.getInventory(itemIndex-1)
const hasItem = (itemIndex) => itemIndex <= props.player.inventory.length
const itemTypes = ["weapon","armor","accessory"]
</script>
 
<template>
    <!-- The button to open modal -->
    <label for="my-modal-6" class="btn">Inventory</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box p-3 bg-base-100 overflow-x-hidden">
            <p class="font-bold text-3xl text-center pb-3 text-white">Inventory</p>
            <div class="flex gap-x-2">
                <div class="flex flex-col items-center justify-evenly rounded-md w-1/3">
                    <div class="flex justify-center ">
                        <h1 class="text-3xl font-bold break-all">{{ player.name }}</h1>
                    </div>
                    <img class="w-2/3" :src="player.getImage()" alt="PLAYER">
                    <div class="flex flex-wrap justify-evenly w-full gap-y-2 ">
                        <InventorySlot v-for="itemType of itemTypes" :key="itemType" :width="16" :height="16">
                            <template v-if="player[itemType]">
                                <img :src="player[itemType].imgPath"
                                    class="w-1/2" alt="W">
                                <button class="text-xs rounded-sm w-3/4 bg-red-400 text-white">REMOVE</button>
    
                            </template>
                        </InventorySlot>
                    </div>
                </div>
                <div class="grid grid-cols-4 place-items-center gap-1 py-1 border border-white rounded-md w-2/3 " >
                    <InventorySlot v-for="itemIndex of 24" :key="itemIndex" :width="18" :height="18" class="group relative">
                        <template v-if="hasItem(itemIndex)">
                            <img :src="getInventory(itemIndex).imgPath"
                                    class="w-1/2" :alt="itemIndex">

                            <button class="text-xs rounded-sm w-3/4 bg-emerald-400 text-white "
                                    @click="player.useItem(getInventory(itemIndex))">EQUIP</button>    
                            <div class="hidden group-hover:block absolute z-[1000] top-2/3 p-1 bg-slate-700 text-white rounded text-xs">
                                    {{ getInventory(itemIndex).name }}
                            </div>
                        </template>
                    </InventorySlot>
                </div>
            </div>
            <div class="modal-action mt-3 space-x-6 text-white">
                <p>HP {{ player.maxHealth }}</p>
                <p>CRIT {{ player.crit }}</p>
                <p>LUCK {{ player.luck }}</p>
                <label for="my-modal-6" class="btn">BACK</label>
            </div>
        </div>
    </div>
</template>
 
<style scoped></style>