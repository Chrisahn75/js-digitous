// 4
const array = [1,"toto",34, "javascript",8];

const numbers = array.filter(function(num) {
    if (typeof num === 'number') {
        return num;
    }
});

console.log(numbers);