// 01 Hello World !
console.log("Hello World !");

// 02 String

var test = "My name is Chris";

console.log(test);

// 03 Concatenation 

var name = "Chris";

console.log("Nice to meet you " + name);

// 04 String Length 

var testLength = "I'm very young";

console.log(testLength.length);

// 05 Replace 

var food =  "croissant is meh";

food = food.replace("meh", "so good");

console.log (food);

// 06 Up and Down

var basic = "This is cool"

var basicUp = "This is cool";
var basicDown = "This is cool";

console.log(basic,basicUp.toUpperCase(),basicDown.toLowerCase());

// 07 Split

var war = "banana";
var letters = war.split ("");

console.log(letters);

// 08 Template

var age = "21";
const template = `I'm ${age} years old`;

console.log(template);

// Bonus

var changed = "Bonjour";
changed = changed.replaceAll("o","a",);
console.log(changed);
