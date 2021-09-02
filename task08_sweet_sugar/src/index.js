const Car = require("../modules/mashines/car");
const Track = require("../modules/mashines/truck");
const Person = require("../modules/person/person.js");

const car1 = new Car("mersedes", "black", 2.0, 1650, 4);
const person1 = new Person("Ivan");


const car2 = new Track('Reno', 'red', 4.8, 5200, 3, 8000, 18)
const person2 = new Person('Oleg');



person1.setOwns(car1);
person2.setOwns(car2);

console.log('Person 1 =', person1.getName(), person1.getOwns());
console.log('Person 2 =', person2.getName(), person2.getOwns());