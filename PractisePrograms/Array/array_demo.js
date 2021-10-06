let origDogs = ["BullDog", "Beagle", "Labrador"]
let cats = new Array("American curl", "Bengal")
let birds = new Array("Falcons", "Ducks", "Flamingoes")

let slicedDogs = origDogs.slice(1, 2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//stack functions
let pushDogs = dogs.push("Golder Retriever")
let popDog = dogs.pop();
dogs[dogs.length] = "Poodle";

//Add and remove from first
let addFirst = dogs.unshift("Golder Retriever");
let shiftDog = dogs.shift();

dogs.splice(2, 1, "Pug", "Boxer");

//Array functon-concat slice and sort
let animals = dogs.concat(cats, birds);
let newAnimal = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first, second]) {
    console.log("Scan: " + first + " " + second)
}
scanArray(animals)
let joinanimals = animals.join(" ");
let allAnimals = "";
for (let animal of animals) {
    allAnimals += animal + " "
}
console.log("Animals :" + allAnimals)