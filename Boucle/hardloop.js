// 1
let numbers = [];

for (let i = 50, l = 100; i < l; i++) {
    numbers.push(Math.round(Math.random() * l))
}
console.log(numbers);


// 4
const tab = ["hello", "goodbye", "yes", "no", "stop", "go go go"];

function splitWordsAddInTab(words) {
	if (!Array.isArray(words)) {
		console.log("We need an array of strings here!");
		return null;
	}
	let word = "";
	let numberO = 0;

	for (let i = 0; i < words.length; i++) {
		if (!(typeof words[i] === "string")) {
			console.log("The array should contain only strings!");
			return null;
		}

		word = words[i].split("");

		for (let j = 0; j < word.length; j++) {
			if (word[j] === "o") {
				numberO += 1;
			}
		}
	}

	return numberO;
}

console.log(splitWordsAddInTab(tab));

