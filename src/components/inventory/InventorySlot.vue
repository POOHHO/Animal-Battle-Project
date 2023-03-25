<script setup>
const props = defineProps({
    width: { type: Number, default: 12 },
    height: { type: Number, default: 12 }
})
const widthRem = `${props.width / 4}rem`
const heightRem = `${props.height / 4}rem`
</script>
<template>
    <div class="border rounded-md text-sm flex flex-col items-center justify-center mobileSize boxSize">
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