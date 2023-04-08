<script setup>
const props = defineProps({
    itemById: { type: Object,required: true },
    right: { type: Boolean, default: true }
})

defineEmits(["action"])
</script>
<template>
    <button class="text-xs rounded-sm w-3/4 text-white group relative"
        @click="$emit('action',{ item: itemById })">
        <slot></slot>
        <div class="hidden screen group-hover:block absolute z-[1000] px-1 bg-slate-600 text-white rounded text-xs"
            :class="right ? 'right-0' : 'left-0' ">
            <p class="text-sm text-emerald-500">{{ itemById.name }}</p>
            <p v-show="itemById.damage > 0">+DAMAGE {{ itemById.damage }}</p>
            <p v-show="itemById.crit > 0">+CRIT {{ itemById.crit }}</p>
            <p v-show="itemById.luck > 0">+LUCK {{ itemById.luck }}</p>
            <p v-show="itemById.health > 0">+HP {{ itemById.health }}</p>
        </div>
    </button>
</template>
<style scoped></style>