<script setup>
const props = defineProps({
    backgroundImage: { type: String , default:''},
    center: { type: Boolean, default: false}
})
</script>
<template>
    <div class="w-screen h-screen bg-cover" :style="`background-image: url('${backgroundImage}');`">
        <div :class="center ? 'flex flex-col items-center w-full h-full justify-center' : ''">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped></style>