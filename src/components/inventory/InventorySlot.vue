<script setup>


const props = defineProps({
    width: { type: Number, default: 12 },
    height: { type: Number, default: 12 }
})
// const getInventory = (itemIndex) => player.value.getInventory(itemIndex-1)
// const getInventoryById = (itemIndex) => {
//     const itemId = getInventory(itemIndex)
//     if (itemId) return itemById(itemId)
//     else return undefined
// }
// const getEquipment = (type) => player.value.getEquipment(type)
// const getEquipmentByType = (type) => {
//     const equipmentId = getEquipment(type)
//     if (equipmentId) return itemById(equipmentId)
//     else return undefined
// }

// const hasEquipment = (item) => player.value[item.type]
// const useItem = (item,index) => {
//     player.value.useItem(itemById(item))
//     player.value.removeItemFromIndex(index)
//     myPlayers.updatePlayer(player.value)
// }
// const removeItem = (item) => {
//     player.value.removeItem(itemById(item))
//     myPlayers.updatePlayer(player.value)
// }

// const isDisabled = () => {
//     return props.isEquipment ? player.value.isMaxInventory() : hasEquipment(getInventoryById(itemIndex))
// }
// const getItem = () => {
//     return props.isEquipment ? getEquipmentByType(props.findItem) : getInventoryById(props.findItem)
// }
// const getItemId = () => {
//     return props.isEquipment ? getEquipment(props.findItem) : getInventory(props.findItem)
// }
// const getAction = (item,index) => {
//     return props.isEquipment ? removeItem(item) : useItem(item,index)
// }
// const actionColor = () => props.isEquipment ? 'bg-red-500' :'bg-emerald-400'
const widthRem = `${props.width / 4}rem`
const heightRem = `${props.height / 4}rem`
/* <InventorySlot v-for="itemType in itemTypes"  :key="itemType" :width="16" :height="16">
                            <template v-if="getEquipmentById(itemType)">
                                <img :src="getEquipmentById(itemType).imgPath"
                                    class=" w-1/2" alt="W">
                                <ItemAction :disabled="player.isMaxInventory()" :item-id="getEquipment(itemType)" :right="false" @action="removeItem($event.item)" class="bg-red-500 disabled:bg-slate-500">
                                    REMOVE
                                </ItemAction>
                            </template>
                        </InventorySlot> */
                    //     <InventorySlot v-for="itemIndex of 24" :key="itemIndex" :width="18" :height="18" class="relative">
                    //     <template v-if="getInventoryById(itemIndex)">
                    //         <BinVue class="absolute right-1 top-1 w-4 h-4 cursor-pointer text-white hover:text-red-500" @click = "player.removeItemFromIndex(index)" />
                    //         <img :src="getInventoryById(itemIndex).imgPath" class="w-1/2" :alt="itemIndex">
                    //         <ItemAction :disabled="hasEquipment(getInventoryById(itemIndex))" :item-id="getInventory(itemIndex)" @action="useItem($event.item,itemIndex)" class="bg-emerald-400 disabled:bg-slate-500">
                    //             EQUIP
                    //         </ItemAction>
                    //     </template>

                    // </InventorySlot>
</script>
<template>
    <div class="border rounded-md text-sm flex flex-col items-center justify-center mobileSize boxSize">
        <!-- <div v-if="getItem()" class="flex flex-col items-center justify-center">
            <slot name="header"></slot>
            <img :src="getItem().imgPath" class="w-1/2" alt="ITEM">
            <ItemAction :disabled="isDisabled()" 
                        :item-id="getItemId()" 
                        :right="!isEquipment" 
                        @action="getAction($event.item,findItem)" 
                        :class="actionColor()" class="disabled:bg-slate-500">
                <slot></slot>
            </ItemAction>
        </div> -->
        <slot></slot>
    </div>
</template>
<style scoped>
.mobileSize {
    width: 3.25rem;
    height: 3.25rem;
}

@media (min-width: 640px) {
    .boxSize {
        width: v-bind(widthRem);
        height: v-bind(heightRem);
    }
}
</style>