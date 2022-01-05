// 2 

function multiply (n){
    for(let i = 1; i <= 10; ++i){
        let res = n * i;
       //console.log(res);
       console.log(`${i} * ${n} = ${res}`);

    }
}
multiply(parseInt(process.argv[2]));