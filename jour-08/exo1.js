const axios = require("axios");

let countriesNames = [];

function getCountries(){
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
        countriesNames = res.data.map(function(pays){
             return pays.name.common;
        
         });
         console.log(countriesNames.join(" - "));

    });
}
getCountries();

