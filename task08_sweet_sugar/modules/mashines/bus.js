const Transport = require("./transport");

class Bus extends Transport{
    constructor(model, color, engine, weight, seats, doubleDecker) {
        super(model, color, engine, weight, seats);
        this.doubleDecker = doubleDecker;
    }

    getDoubleDecker = () => this.doubleDecker;
}

module.exports = Bus;