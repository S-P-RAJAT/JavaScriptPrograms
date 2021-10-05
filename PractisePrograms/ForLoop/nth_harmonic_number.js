const args = process.argv.slice(2);
let n = parseInt(args[0]);

let H = 0;

for (let i = 1; i <= n; i++) {
    H += 1 / i;
}

console.log("The nth Harmonic number = " + H);