const args = process.argv.slice(2);
let low = parseInt(args[0]);
let high = parseInt(args[1]);

for (let j = low; j <= high; j++) {
    let count = 0;
    for (let i = 2; i <= Math.sqrt(j); i++) {
        if (j % i == 0)
            count++;
    }

    if (count == 0 && j != 1)
        console.log(j);
}