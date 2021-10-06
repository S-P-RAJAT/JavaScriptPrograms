function findSecond(arr, arr_size, compare, value) {
    let i;
    let first = second = value;

    if (arr_size < 2) {
        return;
    }
    for (i = 0; i < arr_size; i++) {
        if (compare(arr[i], first)) {
            second = first;
            first = arr[i]
        } else if (arr[i] != first && compare(arr[i], second)) {
            second = arr[i];
        }
    }
    return second;
}

function max(a, b) {
    return (a > b);
}
function min(a, b) {
    return (a < b);
}

let array = new Array();
for (let index = 0; index < 10; index++) {
    let digit = Math.floor(Math.random() * 1000);
    array.push(digit);
}
console.log("Array: ",array);
let n = array.length;
secondLargest = findSecond(array, n, max, Number.MIN_VALUE);
if (secondLargest == null) {
    console.log("Invalid Input");
} else if (secondLargest == Number.MIN_VALUE) {
    console.log("Second largest element doesnot exist");
} else {
    console.log("Second largest element: ", secondLargest);
}

secondSmallest = findSecond(array, n, min, Number.MAX_VALUE);
if (secondSmallest == null) {
    console.log("Invalid Input");
} else if (secondSmallest == Number.MAX_VALUE) {
    console.log("Second smallest element doesnot exist");
} else {
    console.log("Second smallest element: ", secondSmallest);
}