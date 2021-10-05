const args = process.argv.slice(2);
let n = parseInt(args[0]);

let factorial = 1;

for (let i = n; i >= 1; i--) {
    factorial *= i;
}

console.log(n + "! = " + factorial);