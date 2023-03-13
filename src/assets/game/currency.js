
const coin = ref(0)

class Currency {

    add(amount) {
        coin.value += amount
    }
    substract(amount) {
        coin.value -= amount
    }
}
export default Currency