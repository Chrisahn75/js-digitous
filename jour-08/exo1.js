const axios = require("axios");

let countriesNames = [];

function getCountries(){
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
        countriesNames = res.data.map((country) => {
             return country;
        
         });
         console.log(countriesNames);

    });
}
getCountries();

