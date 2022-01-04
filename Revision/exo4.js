let message = "Hello World";
let newMessage = "";
let isLowerCaseLetter = (letter) => 'a' <= letter && letter <= 'z';
let isUpperCaseLetter = (letter) => 'A' <= letter && letter <= 'Z';

for (let i = 0; i < message.length; i++) {
  let character = message[i];
    
    if (isLowerCaseLetter(character)) {
    newMessage += character.toUpperCase();
    } else if (isUpperCaseLetter(character)) {
    newMessage += character.toLowerCase();
    } else newMessage += character;
}

console.log(newMessage);