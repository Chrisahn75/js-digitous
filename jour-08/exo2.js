const axios = require ("axios");

function getFact(){
    axios.get("https://api.chucknorris.io/jokes/random").then((res) => {
    console.log(res.data);
    });
}
getFact();