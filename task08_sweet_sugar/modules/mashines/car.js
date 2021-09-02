const Transport = require("./transport");

class Car extends Transport{
    constructor(model, color, engine, weight, seats) {
        super(model, color, engine, weight, seats);
    }
}

module.exports = Car;