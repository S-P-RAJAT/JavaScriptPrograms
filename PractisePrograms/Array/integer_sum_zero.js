let array = [0, -1, 2, -3, 1, -2];
let tripletWithZeroSumArray = new Array();

let zeroSumFound = false;
for (let index1 = 0; index1 < array.length - 2; index1++) {
    for (let index2 = index1 + 1; index2 < array.length - 1; index2++) {
        for (let index3 = index2 + 1; index3 < array.length; index3++) {
            if (array[index1] + array[index2] + array[index3] == 0) {
                zeroSumFound = true
                tripletWithZeroSumArray.push(array[index1] + "," + array[index2] + "," + array[index3])
            }
        }
    }
}
if (zeroSumFound) {
    console.log(tripletWithZeroSumArray)
}
else {
    console.log("no numbers whose sum is 0")
}