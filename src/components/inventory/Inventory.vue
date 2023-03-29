<script setup>
import InventorySlot from "./InventorySlot.vue";
import BinVue from "../icon/Bin.vue";
import ItemAction from "../button/ItemAction.vue";
import { player } from "../../assets/game/gameplay";
import { useItems } from "../../assets/game/items"
import { computed } from "vue";
const myItems = useItems()

const itemById = (id) => myItems.getItemById(id)
const props = defineProps({
    player: { type: Object }
})

const getInventory = (itemIndex) => player.value.getInventory(itemIndex-1)
const getInventoryById = (itemIndex) => {
    const itemId = getInventory(itemIndex)
    if (itemId) return itemById(itemId)
    else return undefined
}
const getEquipment = (type) => player.value.getEquipment(type)
const getEquipmentById = (type) => {
    const equipmentId = getEquipment(type)
    if (equipmentId) return itemById(equipmentId)
    else return undefined
}

const itemTypes = ["weapon","armor","accessory"]

const hasEquipment = (item) => player.value[item.type]

const useItem = (item,index) => {
    player.value.useItem(itemById(item))
    player.value.removeItemFromIndex(index)
}
const removeItem = (item) => player.value.removeItem(itemById(item))
</script>
 
<template>
    <!-- The button to open modal -->
    <label for="my-modal-6" class="btn">Inventory</label>
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box p-3 bg-neutral-focus overflow-x-hidden">
            <p class="font-bold text-3xl text-center pb-3 text-white">Inventory</p>
            <div class="flex gap-x-2">
                <div class="flex flex-col items-center justify-evenly rounded-md w-1/3">
                    <div class="flex justify-center ">
                        <h1 class="text-3xl font-bold break-all">{{ player.name }}</h1>
                    </div>
                    <img class="w-2/3" :src="player.getImage()" alt="PLAYER">
                    <div class="flex flex-wrap justify-evenly w-full gap-y-2 ">
                        <InventorySlot v-for="itemType in itemTypes"  :key="itemType" :width="16" :height="16">
                            <template v-if="getEquipmentById(itemType)">
                                <img :src="getEquipmentById(itemType).imgPath"
                                    class=" w-1/2" alt="W">
                                <ItemAction :disabled="player.isMaxInventory()" :item-id="getEquipment(itemType)" :right="false" @action="removeItem($event.item)" class="bg-red-500 disabled:bg-slate-500">
                                    REMOVE
                                </ItemAction>
                            </template>
                        </InventorySlot>
                    </div>
                </div>
                <div class="grid grid-cols-4 place-items-center gap-1 py-1 border border-white rounded-md w-2/3 " >
                    <InventorySlot v-for="itemIndex of 24" :key="itemIndex" :width="18" :height="18" class="relative">
                        <template v-if="getInventoryById(itemIndex)">
                            <BinVue class="absolute right-1 top-1 w-4 h-4 cursor-pointer text-white hover:text-red-500" @click = "player.removeItemFromIndex(index)" />
                            <img :src="getInventoryById(itemIndex).imgPath" class="w-1/2" :alt="itemIndex">
                            <ItemAction :disabled="hasEquipment(getInventoryById(itemIndex))" :item-id="getInventory(itemIndex)" @action="useItem($event.item,itemIndex)" class="bg-emerald-400 disabled:bg-slate-500">
                                EQUIP
                            </ItemAction>
                        </template>

                    </InventorySlot>
                </div>
             
            </div>
            <div class="modal-action mt-3 space-x-6 text-white">
                <p>HP {{ player.maxHealth }}</p>
                <p>CRIT {{ player.crit }}</p>
                <p>LUCK {{ player.luck }}</p>
                <label for="my-modal-6" class="btn hover:bg-red-500">BACK</label>
            </div>
        </div>
    </div>
</template>
 
<style scoped></style>