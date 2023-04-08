<script setup>
import ErrorAlert from "./ErrorAlert.vue";
const props = defineProps({
    show: { type: Object,required: true },
    player: { type: Object,required: true },
    paddingNameX: { type: Number, default: 0 },
    paddingNameY: { type: Number, default: 0 }
})
const paddingRemX = `${props.paddingNameX / 4}rem`
const paddingRemY = `${props.paddingNameY / 4}rem`
const errorText = () => {
    if (props.show.nameEmptyAlert) return "Enter Your Name"
    else if (props.show.passwordEmptyAlert) return "Enter Your Password"
    else if (props.show.existsAlert) return "Account Exists"
    else return undefined
}
</script>
<template>
    <div class="flex flex-col items-center space-y-4">      
        <ErrorAlert v-show="errorText()" :error-text="errorText()"/>
        <h1 class="justify-center flex text-center m04b choose-character text-black" :class="`text-4xl`">
            Choose Character
        </h1>
        <label class="text-white shadow-table m04b" for="YOURNAME" :class="`text-2xl`">Your Name</label>
        <input v-model="player.name"
            class="`bg-white border-4 border-slate-600 text-slate-900 bg-white text-center m04b paddingX paddingY`" type="text"
            placeholder="ENTER YOUR NAME" maxlength="18">
    </div>
</template>
<style scoped>
.paddingX {
    padding-left: v-bind(paddingRemX);
    padding-right: v-bind(paddingRemX);
}

.paddingY {
    padding-top: v-bind(padingRemY);
    padding-bottom: v-bind(paddingRemY);
}

.choose-character {
    filter: drop-shadow(1px 0 0 black) drop-shadow(0 1px 0 black) drop-shadow(-1px 0 0 black) drop-shadow(0 -1px 0 black);
}</style>d