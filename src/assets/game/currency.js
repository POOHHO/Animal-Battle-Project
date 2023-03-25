import { ref } from 'vue'

const coin = ref(50000)

class Currency {

    add(amount) {
        coin.value += amount
    }
    substract(amount) {
        coin.value -= amount
    }

    getCoin() {
        return coin.value
    }

    hasCoin(amount) {
        return coin.value >= amount
    }
    
}
export default Currency