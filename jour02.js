// 01 Number
let integer = 102;
let float = 13.9;
console.log(integer,float);

// 02 Convert
let basic = 34;
let stringfield = basic;

console.log(stringfield);

// 03 Round 
let num = 1.5;
let rounded = Math.round(num);

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
let limit = 89;
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
let limite = 89;
let scores = 87;
let passworde = "azerty";

if (passworde.length < scores){
    console.log("Everything is good");
} if (passworde.length <= scores){
    console.log("Something is good");
} if (passworde.length === scores){
    console.log("Nothing is good");
}
