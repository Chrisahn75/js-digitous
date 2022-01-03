// 1 Somme des carrés


// 2 
var result = userLength * basePrice;
if (result % patternLength) {
    var remainder =  result % patternLength;
    if (remainder >= patternLength / 2)
        result += patternLength - remainder;
    else
        result -= remainder;

}

result = Math.round(result * 100) / 100;