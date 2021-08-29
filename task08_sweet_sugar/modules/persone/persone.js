class Persone {
    constructor(name) {
        this.name = name;
        this.owns = null;
    }

    getName = () => this.name;
    getOwns = () => this.owns;

    setOwns = (obj) => this.owns = obj;
}

module.exports = Persone;