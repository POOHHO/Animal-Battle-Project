import { defineStore, acceptHMRUpdate } from 'pinia'
import { getItem,getPotion } from "../game/data-handler.js"
import { ref } from 'vue'

export const useItems = defineStore("items",() => {
    const items = ref([])
    const potions = ref([])
    const fetchItems = async () => {
        items.value = await getItem()
        potions.value = await getPotion()
    }
    const getItems = () => items.value
    const getPotions = () => potions.value
    const getItemById = (id) => items.value.find((item) => item.id === id)
    const getPotionById = (id) => potions.value.find((potion) => potion.id === id)

    return { items,fetchItems,getItems,getItemById,getPotions,getPotionById }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useItems,import.meta.hot))
}