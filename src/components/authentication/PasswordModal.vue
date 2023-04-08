<script setup>
import { ref } from 'vue';
defineEmits(["login", "create"])
const props = defineProps({
    player: { required: false },
    modalId: { default: "passwordModal" }
})

const password = ref('')
const validation = () => {
    if (password.value === props.player.password) return props.player
    else return undefined
}
const clearPassword = () => password.value = ''

const inputClass = "w-full text-2xl bg-white border-4 text-slate-900 border-slate-800 text-center"
const btnClass = "btn border-0 w-full bg-emerald-500 hover:bg-teal-600 text-white"
</script>
<template>
    <input type="checkbox" :id="modalId" class="modal-toggle">
    <div class="modal screen bg-opacity-0 ">
        <div class="modal-box bg-slate-700">
            <p class="text-3xl font-bold mb-4 text-white">Enter Password</p>
            <input :class="inputClass"
                placeholder="PASSWORD" type="password" v-model="password">
            <div v-if="player != null" class="modal-action w-full">
                <label :for="modalId" @click="$emit('login', validation()), clearPassword()" :class="btnClass">ENTER</label>
            </div>
            <div v-else class="modal-action w-full">
                <label :for="modalId" @click="$emit('create', { password: password }), clearPassword()" :class="btnClass">CREATE</label>
            </div>
            <label :for="modalId" class="btn btn-sm border-0 absolute right-2 top-2 bg-neutral hover:bg-red-500"
                @click="clearPassword()">✕</label>
        </div>
    </div>
</template>