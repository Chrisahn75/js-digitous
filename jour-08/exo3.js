const axios = require("axios");

function catchPokemon (n){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${n}`).then((res) => {
        console.log(`id: ${n}`);
        console.log(`name : ${res.data.name}`);
        })
        .catch((err) => {
        console.log(err);
        });
}
catchPokemon(709);