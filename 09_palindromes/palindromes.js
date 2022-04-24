const palindromes = function (str) {

    str = str.toLowerCase();
    str = str.replace(",", "");
    str = str.replace(".", "");
    str = str.replace(":", "");
    str = str.replace(";", "");
    str = str.replace("-", "");
    str = str.replace(",", "");
    str = str.replace(" ", "");


    for (let i = 0; i <= (str.length / 2); i++) {
        if (str[i] != str[str.length - ( i + 1)]) return false 
    }
return true 

    

};
