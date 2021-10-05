const args = process.argv.slice(2);
let day = parseInt(args[0]);
let month = parseInt(args[1]);

let given_date = Date.parse("" + month + "/" + day);

const lower_bound = Date.parse("03/20");
const upper_bound = Date.parse("06/20");

if (given_date >= lower_bound && given_date <= upper_bound)
    console.log(true)
else
    console.log(false)