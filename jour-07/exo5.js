// 5
let numbers = [1,2,3,4,5,6,7,8];

let even = numbers.filter(function(num){
    if (num % 2 === 0 || num === 0) {
        return num;
    }
});

console.log(even);