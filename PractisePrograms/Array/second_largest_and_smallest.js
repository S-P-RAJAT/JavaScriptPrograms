let array = new Array();
let arraySize = 10;
for (let index = 0; index < arraySize; index++) {
    let digit = Math.floor(Math.random() * 1000);
    array.push(digit);
}
console.log("Array before sorting: ", array);

array.sort();

console.log("Array after sorting: ", array);
console.log("Second largest = ", array[1]);
console.log("Second smallest = ", array[arraySize - 2]);
