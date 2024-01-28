const numInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const romanNumeralData = [
    ["", "I","II","III","IV","V","VI","VII","VIII","IX"],
    ["", "X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
    ["", "C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
    ["", "M","MM","MMM"],
];

const backgroundSuccess = "var(--light-blue)";
const highlightSuccess = "var(--main-white)";
const backgroundError = "var(--light-red)";
const highlightError = "var(--dark-red)";

function arabicToRoman(num) {
    if (!isValidNum(num)) {
        handleError(num);

        return;
    }
    
    const inputArr = numToDigits(num);
 
    let numRoman = "";
    inputArr.forEach((digit, index) => {
         numRoman += romanNumeralData[inputArr.length - 1 - index][digit];
     });

    updateView(numRoman, backgroundSuccess, highlightSuccess);
 }


function numToDigits(num) {
    const arr = Array.from(String(num), Number);

    return arr;
}

function isValidNum(num) {
    if (num > 0 && num < 4000) {

        return true;
    }

    return false;
}

function updateView(resultMessage, backgroundColor, highlightColor) {
    result.classList.remove("hidden");
    result.style.backgroundColor = backgroundColor;
    result.style.border = `1px solid ${highlightColor}`;
    result.style.color = highlightColor;
    result.innerHTML = resultMessage;
}



function handleError(num) {
    let errorMessage = "Undefined error occured.";

    if (!num) {
        errorMessage = "Please enter a valid number.";
    }
    
    if (num >= 4000) {
        errorMessage = "Please enter a number less than or equal to 3999.";
    }
    
    if (num === 0 || num < 0) {
        errorMessage = "Please enter a number greater than or equal to 1."
    }

    updateView(errorMessage, backgroundError, highlightError);
}


convertBtn.addEventListener("click", (e) => {
e.preventDefault();
arabicToRoman(numInput.value);
});