<script setup>

import { useItem } from "../main.js"
const props = defineProps({
    player: { type: Object }
})


</script>
 
<template>
    <!-- The button to open modal -->
    <label for="my-modal-5" class="btn">Inventory</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-5" class="modal-toggle" />
    <div class="modal w-screen h-screen">
        <div class="modal-box w-11/12 relative max-w-5xl ">
            <div class="flex-cols space-y-5">
                <h3 class="font-bold text-4xl flex justify-center">Inventory</h3>
                <div class="flex justify-center space-x-5 ">
                    <div class="flex-cols border border-black rounded-xl justify-center px-2 w-1/3 h-auto">
                        <div class="flex justify-center">
                            <h1 class="text-4xl font-bold">{{ props.player.name }}</h1>
                        </div>
                        <img class="scale-75" :src="props.player.getImage()" alt="">
                        <div class="grid grid-cols-3 gap-1 w-full space-x-2 px-2 text-center">
                            <div class="border rounded-xl py-10">
                                <!-- <img :src="props.player.weapon.imgPath" > -->
                                <span>Weapon</span>
                            </div>
                            <div class="border rounded-xl py-10">
                                <span>Armor</span>
                            </div>
                            <div class="border rounded-xl py-10">
                                <span>Accessories</span>
                            </div>
                        </div>
                    </div>
                    <div class="h-auto p-10 border border-black rounded-xl overflow-y-scroll w-1/2 grid grid-rows-3">
                        <div v-for="item in props.player.inventory" class="border rounded-xl text-center w-1/3">
                            <!-- <p>{{ item.name }}</p> -->
                            <img :src="item.imgPath" :alt="item.name" class="">
                            <button class="btn btn-success" @click="useItem(item)">Use Item</button>
                        </div>
                    </div>
                </div>
            </div>





            <div class="modal-action">
                <label for="my-modal-5" class="btn">back</label>
            </div>
        </div>
    </div>
</template>
 
<style scoped></style>