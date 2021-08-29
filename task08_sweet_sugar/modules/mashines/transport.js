class Transport {
    constructor(model, color, engine, weight, seats) {
        this.model = model;
        this.color = color;
        this.engine = engine;
        this.weight = weight;
        this.seats = seats;
    }

    getModel = () => this.model;
    getColor = () => this.color;
    getEngine = () => this.engine;
    getWeight = () => this.weight;
    getSeats = () => this.seats;
}

module.exports = Transport;