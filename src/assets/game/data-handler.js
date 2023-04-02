const API_HOST = "http://localhost:5000"
const API_PLAYERS = `${API_HOST}/players`
const API_ITEMS = `${API_HOST}/items`
const API_POTIONS = `${API_HOST}/potions`

async function getPotion() {
    try {
        const res = await fetch(`${API_POTIONS}`)
        if (res.ok) {
            const items = res.json()
            return items
        }
        else throw new Error('Error, data is error!')
    } catch (error) {
        console.log(error)
    }
}
async function getItem() {
    try {
        const res = await fetch(`${API_ITEMS}`)
        if (res.ok) {
            const items = res.json()
            return items
        }
        else throw new Error('Error, data is error!')
    } catch (error) {
        console.log(error)
    }
}

async function getPlayer() {
    try {
        const res = await fetch(`${API_PLAYERS}`)
        if (res.ok) {
            const players = res.json()
            return players
        } else throw new Error('Error, data is error!')
    } catch (error) {
        console.log(error)
    }
}

async function createPlayer(newPlayer)  {
    try {
        const res = await fetch(`${API_PLAYERS}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPlayer)
        })
        if (res.status === 201) return res.json()
        else throw new Error('cannot add!')
    } catch (err) {
        console.log(err)
    }
}
async function putPlayer(playerData)  {
    try {
        const res = await fetch(`${API_PLAYERS}/${playerData.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(playerData)
        })
        if (res.ok) {}
        // console.log("Update Successfully")
        else throw new Error('cannot add!')
    } catch (err) {
        console.log(err)
    }
}

async function deletePlayer(currentPlayer) {
    try {
        const res = await fetch(`${API_PLAYERS}/${currentPlayer}`, {
            method: 'DELETE'
        })
        if (res.ok) {
            // console.log("Delete Successfully")
        } else throw new Error('cannot delete!')
    } catch (err) {
        console.log(err)
    }

}



export { getItem, getPotion, getPlayer, createPlayer, deletePlayer,putPlayer }