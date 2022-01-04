// 1
let n = 50; 
let max = 200;   
let result = ""; 
while( n < max){
  result = result + n + "-"
  n = n + 2;
}
result = result + n;
console.log(result);

// 2 

let dice = null;
let count = 0;

while (dice > count){
    if (dice <= 6){
        dice = Math.floor(Math.random()*6)+1;
    } else {
        count = count + 1;
    }
    return dice
}

console.log(dice);

// 3 

let usainBolt =  0;
let tysonGay = 0;
let res = "";

while (usainBolt && tysonGay <= 100){
    return Math.floor(Math.random() * (usainBolt - tysonGay + 1)) + tysonGay;
}

console.log(usainBolt);

