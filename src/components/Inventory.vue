<script setup>

import { useItem,imgitem,itemname } from "../main.js"
const props = defineProps({
    player: { type: Object }
})


</script>
 
<template>
    <!-- The button to open modal -->
    <label for="my-modal-6" class="btn">Inventory</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <div class="modal w-screen ">
        <div class="modal-box w-11/12 relative max-w-7xl ">
            <div class="flex-cols ">
                <h3 class="font-bold text-6xl flex justify-center mb-8 ">Inventory</h3>
                <div class="flex justify-center space-x-4">
                    <div class="flex-cols border border-black rounded-xl justify-center px-2 w-1/3 h-auto">
                        <div class="flex justify-center">
                            <h1 class="text-4xl font-bold">{{ props.player.name }}</h1>
                        </div>
                        <img class="scale-75" :src="props.player.getImage()" alt="">
                        <div class="grid grid-cols-3 gap-1 w-full space-x-2 px-2 text-center">
                            <div class="border rounded-xl py-10 " >
                                <img :src="imgitem" >
                                <span >Weapon</span>
                            </div>
                            <div class="border rounded-xl py-10">
                                <span>Armor</span>
                            </div>
                            <div class="border rounded-xl py-10">
                                <span>Accessories</span>
                            </div>
                        </div>
                    </div>
                    <div class=" w-1/2 h-screen border border-black rounded-xl overflow-y-scroll grid grid-cols-3">
                        <div v-for="item in props.player.inventory" class="border w-ful   rounded-xl text-center m-3 ">
                            <!-- <p>{{ item.name }}</p> -->
                            <img :src="item.imgPath" :alt="item.name" class="scale-50">
                            <button class="btn btn-success mb-3 w-1/2" @click="useItem(item)">Use Item</button>
                        </div>
                    </div>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">back</label>
                    </div>
                </div>
            </div>





           
        </div>
    </div>
</template>
 
<style scoped></style>