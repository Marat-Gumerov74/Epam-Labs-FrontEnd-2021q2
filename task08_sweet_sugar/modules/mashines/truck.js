const Transport = require("./transport");

class Truck extends Transport{
    constructor(model, color, engine, weight, seats, maxCapacity, volume) {
        super(model, color, engine, weight, seats);
        this.capacity = [ maxCapacity, volume];
    }

    getCapacity = () => this.capacity;
}

module.exports = Truck;