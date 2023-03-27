<script setup>
const props = defineProps({
    item: { type: Object,required: true },
    right: { type: Boolean, default: true }
})
defineEmits(["action"])
</script>
<template>
    <button class="text-xs rounded-sm w-3/4 text-white group relative"
        @click="$emit('action',{ item: item })">
        <slot></slot>
        <div class="hidden screen group-hover:block absolute z-[1000] px-1 bg-slate-600 text-white rounded text-xs"
            :class="right ? 'right-0' : 'left-0' ">
            <p class="text-sm text-emerald-500">{{ item.name }}</p>
            <span v-show="item.crit > 0">+CRIT {{ item.crit }}</span>
            <span v-show="item.luck > 0">+LUCK {{ item.luck }}</span>
            <span v-show="item.health > 0">+HP {{ item.health }}</span>
        </div>
    </button>
</template>
<style scoped></style>