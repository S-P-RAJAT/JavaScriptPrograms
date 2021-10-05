const args = process.argv.slice(2);
let n = parseInt(args[0]);

let count = 0;

for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0)
        count++;
}

if (count >= 1 || n == 1)
    console.log("The number " + n + " is not prime");
else
    console.log("The number " + n + " is prime");