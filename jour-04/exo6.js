// Time

function format(num){
    let hrs = Math.floor(num/3600);
    let hrsRest= num - (hrs*3600);
    let min = Math.floor(hrsRest/60);
    let sec = hrsRest - (min * 60);
    console.log(`${hrs} : ${min} : ${sec}`);
    console.log(hrs + ":" + min + ":" + sec);
}
format(3700);

