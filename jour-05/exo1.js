// 1 

function calculate (n1,operator,n2){
    if (operator === "+"){
        return console.log(n1 + n2);
    } else if (operator === "-"){
        return console.log(n1 - n2);
    } else if (operator === "*"){
        return console.log(n1 * n2);
    } else if (operator === "/"){
        return console.log(n1 / n2);
    } else if (operator === "%"){
        return console.log(n1 % n2);
    }
}
console.log(calculate (process.argv[2],process.argv[3],process.argv[4]))