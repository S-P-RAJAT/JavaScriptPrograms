const args = process.argv.slice(2);
let n = parseInt(args[0]);
console.log("Factors of ", n, "are: ");
while (n % 2 == 0) {
    process.stdout.write(2 + " ");
    n /= 2;
}
for (let i = 2; i * i <= n; i++) {
    while (n % i == 0) {
        if (n % i == 0) {
            process.stdout.write(i + " ");
            n /= i;
        }
    }
}
if (n > 2) {
    console.log(n);
}