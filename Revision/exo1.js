// 1 Alphabet
//const sortLetters = "Konexio";
//let result = "";

//for (let i = sortLetters.length - 1; i >= 0; i--) {
//	result += sortLetters[i];
//}

//console.log(result);

function sortLetters(s) {
    let letters = "Konexio";
    let res = "";
    s += "<"; 
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "<") {
            res += letters[i];
        } else {
            let start = i;
            while (s[i] === ">") i++;
            for (let j = i; j >= start; j--) {
                res += letters[j];
            }
        }
    }
    return res;
}

console.log(letters);