class ShoppingCart {
    constructor (currency) {
        this.items = []
        this.currency = currency
    }

    getItemCount() {
        return this.items.length
    }
}

module.exports = { ShoppingCart } //OJO ESTAMOS EN MODO COMMONJS