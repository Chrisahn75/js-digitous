// Bonus 1

function generatePassword() {
    let length = 26,
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
       retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
 }

 generatePassword();