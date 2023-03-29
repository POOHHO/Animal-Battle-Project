import { defineStore, acceptHMRUpdate } from 'pinia'
import { getItem } from "../game/data-handler.js"
import { ref } from 'vue'

export const useItems = defineStore("items",() => {
    const items = ref([])
    const fetchItems = async () => {
        items.value = await getItem()
    }
    const getItems = () => items.value
    const getItemById = (id) => items.value.find((item) => item.id === id)
    
    return { items,fetchItems,getItems,getItemById }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useItems,import.meta.hot))
}