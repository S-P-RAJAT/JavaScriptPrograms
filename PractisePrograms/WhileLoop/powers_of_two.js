const args = process.argv.slice(2);
let n = parseInt(args[0]);
let i = 1;
while (2 ** i <= 2 ** n && 2 ** i <= 256) {
    console.log(2 ** i);
    i++;
}