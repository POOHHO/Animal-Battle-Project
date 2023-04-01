class Currency {

    constructor(coin=100) {
        this.coin = coin
    }

    add(amount) {
        this.coin += amount
    }
    substract(amount) {
        this.coin -= amount
    }

    getCoin() {
        return this.coin
    }

    hasCoin(amount) {
        return this.coin >= amount
    }
    
}
export default Currency