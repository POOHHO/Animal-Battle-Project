<script setup>
const props = defineProps({
    output: {type: Object, require: true},
    modalId: {type: String,require: true}
})
</script>
<template>
    <input type="checkbox" :id="modalId" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box w-1/4">
            <h1 class="text-center text-3xl text-cyan-200 textarea-bordered"> {{ output.name }}</h1>
            <img :src="output.imgPath">
            <div class="modal-action">
                <label :for="modalId" class="btn">Yay!</label>
            </div>
        </div>
    </div>
</template>