// 01 Number
const integer = 102;
const float = 13.9;
console.log(integer,float);

// 02 Convert
const basic = 34;
const stringfield = basic.toString();

console.log(stringfield);

// 03 Round 
const num = 1.5;
const rounded = Math.round(num);

console.log(rounded);

// 04 Aritmétique 
let test = 12;
let bis = 5;

console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis);
console.log(test % bis);

// 05 Comparaison
var teste = 143;
var biss = 219;

console.log(teste > biss);
console.log(teste < biss);
console.log(teste >= biss);
console.log(teste <= biss);
console.log(teste !== biss);
console.log(teste === biss);

// 06 Condition
let limit = 50;
let score = 64;

if (score >= limit){
    console.log("Ok good !");
} else {
    console.log("Oh nooo ...");
}

// 07 Condition ||
let password = "azerty";

if (password.length > 5){
    console.log("The password is secure");
}

// 08 Condition |||
if (limit >= score && password.length > 5){
    console.log("Everything is good");
} else if (limit >= score || password.length > 5){
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}


// Bonus 
let random = 1 + Math.floor(6 * Math.random());

if (random === 6){
    console.log("Yes ! I win !");
} else{
    console.log("So close ...");
}

// Bonus ||
const month = "January";

switch (month) {
    case "Janurary":
        console.log("Winter");
        break;
    case "February":
            console.log("Winter");
        break;
    case "March":
        console.log("Spring");
        break;
    case "April":
            console.log("Spring");
        break;
    case "May":
        console.log("Spring");
        break;
    case "June":
            console.log("Summer");
        break;
            
    case "July":
        console.log("Summer");
        break;
    case "August":
            console.log("Summer");
        break;
    case "September":
        console.log("Summer");
        break;
    case "October":
            console.log("Fall");
        break;
                
    case "November":
        console.log("Fall");
        break;
    case "December":
            console.log("Winter");
        break;
}

// Bonus 3 

const roundedNumber = 3.6;

if (roundedNumber - Math.floor(roundedNumber) >= 0.5) {
    console.log(Math.ceil(roundedNumber));
} else {
    console.log(Math.floor(roundedNumber));
}


