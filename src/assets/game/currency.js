import { ref } from 'vue'

const coin = ref(0)

class Currency {

    add(amount) {
        coin.value += amount
    }
    substract(amount) {
        coin.value -= amount
    }

    getCoin() {
        return coin
    }
}
export default Currency