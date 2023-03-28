const API_HOST = "http://localhost:5000"
const API_PLAYERS = `${API_HOST}/players`
const API_ITEMS = `${API_HOST}/items`
const API_SKILLS = `${API_HOST}/skills`

async function getItemById(itemId) {
    try {
        const res = await fetch(`${API_ITEMS}/${itemId}`)
        if (res.ok) return res.json()
        else throw new Error('Error, data is error!')
    } catch (error) {
        console.log(error)
    }
}

async function getItems() {
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

async function getSkillById(skillId) {
    try {
        const res = await fetch(`${API_SKILLS}/${skillId}`)
        if (res.ok) return res.json()
        else throw new Error('Error, data is error!')
    } catch (error) {
        console.log(error)
    }
}

async function getSkill() {
    try {
        const res = await fetch(`${API_SKILLS}`)
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
        if (res.status === 201) {
            console.log("Add Successfully")
        } else throw new Error('cannot add!')
    } catch (err) {
        console.log("test")
        console.log(err)
    }
}

export { getItemById, getItems, getSkillById, getSkill, getPlayer, createPlayer }