const args = process.argv.slice(2);
let n = parseInt(args[0]);

for (let i = 0; i <= n; i++) {
    console.log(2 ** i);
}
