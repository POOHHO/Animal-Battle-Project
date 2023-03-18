async function getItemById(itemId) {
    try {
        const res = await fetch(`http://localhost:5000/items/${itemId}`)
        if (res.ok) return res.json()        
        else throw new Error('Error, data is error!')
    } catch (error) {
        console.log(error)
    }
}
async function getItems() {
    try {
        const res = await fetch(`http://localhost:5000/items`)
        if (res.ok) {
            const items = res.json()
            return items
        }        
        else throw new Error('Error, data is error!')
    } catch (error) {
        console.log(error)
    }
}
export { getItemById,getItems }