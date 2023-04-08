import { defineStore, acceptHMRUpdate } from 'pinia'
import { getPlayer,createPlayer,deletePlayer,putPlayer } from "../game/data-handler.js"
import { ref } from 'vue'
export const usePlayers = defineStore("players",() => {
    const players = ref([])
    const playerDTO = (player) => { return {
        name: player.name,
        character: player.character.id,
        coin: player.coin.coin,
        level: player.level,
        password: player.password,
        health: player.health,
        maxHealth: player.maxHealth,
        damage: player.damage,
        luck: player.luck,
        crit: player.crit,
        weapon: player.weapon,
        armor: player.armor,
        accessory: player.accessory,
        inventory: player.inventory,
        potions: player.potions
    }}
    const fetchPlayers = async () => {
        players.value = await getPlayer()
    }
    const getPlayers = () => players.value
    const addPlayer = (newPlayer) => {
        const player = playerDTO(newPlayer)
        players.value.push(player)
        return createPlayer(player)
    }
    const updatePlayer = (currentPlayer) => {
        // let existPlayer = players.value.find(player => player.id === currentPlayer.id);
        // existPlayer = currentPlayer
        const player = playerDTO(currentPlayer)
        player.id = currentPlayer.id
        putPlayer(player)
    }
    const removePlayer = (playerId) => {
        deletePlayer(playerId)
        players.value = players.value.filter((player) => player.id !== playerId)
    }
    return { players,fetchPlayers,getPlayers,addPlayer,removePlayer,updatePlayer }
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePlayers,import.meta.hot))
}