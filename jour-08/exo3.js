const axios = require("axios");

function catchPokemon (n){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0").then((res) => {
      n = res.data.map(function(search){
            return search.id;
        });
    
        console.log(n);
    });
}
catchPokemon();