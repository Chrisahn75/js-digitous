// 3 Palindrome

function checkPal(str) {
    let reversedStr = str.split("").reverse().join("");

    if (reversedStr === str){
        return "palindrome!";
    } else{
        return "Nope";
    }
}

console.log(checkPal("racecar"));
console.log(checkPal("laptop"));