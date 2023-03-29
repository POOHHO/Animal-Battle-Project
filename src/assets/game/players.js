import { defineStore, acceptHMRUpdate } from 'pinia'
import { getPlayer,createPlayer,deletePlayer } from "../game/data-handler.js"
import { ref } from 'vue'
export const usePlayers = defineStore("players",() => {
    const players = ref([])
    const fetchPlayers = async () => {
        players.value = await getPlayer()
    }
    const getPlayers = () => players.value
    const addPlayer = (newPlayer) => {
        const playerDTO = {
            name: newPlayer.name,
            character: newPlayer.character.id,
            coin: newPlayer.coin.coin,
            level: newPlayer.level,
            password: newPlayer.password,

            health: newPlayer.health,
            damage: newPlayer.damage,
            luck: newPlayer.luck,
            crit: newPlayer.crit,

            weapon: newPlayer.weapon,
            armor: newPlayer.armor,
            accessory: newPlayer.accessory,

            inventory: newPlayer.inventory,
            potions: newPlayer.potions
        }
        players.value.push(playerDTO)
        createPlayer(playerDTO)
    }

    const removePlayer = async (playerId) => {
        await deletePlayer(playerId)
        players.value = players.value.filter((player) => player.id !== playerId)
    }
    return { players,fetchPlayers,getPlayers,addPlayer,removePlayer }
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePlayers,import.meta.hot))
}