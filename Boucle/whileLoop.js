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
let res = "";

while (dice > count){
    if (dice -= 6){
        count = Math.random();
    } else {
        count = res + 1;
    }
}

console.log(res);




