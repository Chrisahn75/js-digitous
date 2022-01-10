// 4
let array = [1,"toto",34, "javascript",8];

let numbers = array.filter(function(num) {
    if (typeof num === 'number') {
        return true;
    }
});

console.log(numbers);