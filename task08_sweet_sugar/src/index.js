const Car = require("../modules/mashines/car");
const Track = require("../modules/mashines/truck");
const Persone = require("../modules/persone/persone")

const car1 = new Car("mersedes", "black", 2.0, 1650, 4);
const persone1 = new Persone("Ivan");


const car2 = new Track('Reno', 'red', 4.8, 5200, 3, 8000, 18)
const persone2 = new Persone('Oleg');



persone1.setOwns(car1);
persone2.setOwns(car2);

console.log('Persone 1 =', persone1.getName(), persone1.getOwns());
console.log('Persone 2 =', persone2.getName(), persone2.getOwns());