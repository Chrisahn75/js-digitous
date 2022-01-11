const axios = require("axios");

const countriesNames = [""];

 function getCountries(){
    axios
	.get("https://restcountries.eu/rest/v3.1/all")
	.then((res) => {
    console.log(res.data);
        const country = res.filter(function (commun) {
            return commun.common;
        });
    });
};