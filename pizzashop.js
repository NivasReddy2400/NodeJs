const Emitter = require("node:events")

class PizzaShop extends Emitter{
    constructor(){
        super()
        this.orderNumber = 0
    }

    order(size,topping){
        this.orderNumber++
        this.emit("order",size,topping)
    }

    display(){
        console.log(this.orderNumber)
    }
}

module.exports = PizzaShop