const numInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const romanNumeralData = [
    ["", "I","II","III","IV","V","VI","VII","VIII","IX"],
    ["", "X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
    ["", "C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
    ["", "M","MM","MMM"],
]


function arabicToRoman(num) {
    if (!isValidNum(num)) {
        updateViewError(num);

        return;
    }
    
    const inputArr = numToDigits(num);
 
    let numRoman = "";
    inputArr.forEach((digit, index) => {
         numRoman += romanNumeralData[inputArr.length - 1 - index][digit];
     }); 
         updateViewResult(numRoman);
 }


function numToDigits(num) {
    const arr = Array.from(String(num), Number)

    return arr;
}

function isValidNum(num) {
    if (num > 0) {

        return true;
    }

    return false;
}

function updateView(input) {

}


function updateViewError(num) {
    result.classList.remove("hidden");
    result.style.backgroundColor = "var(--light-red)";
    result.style.border = "1px solid var(--dark-red)";
    result.style.color = "var(--dark-red)";
    
    if (!num) {
        result.innerHTML = "Please enter a valid number."

        return;
    } 
        result.innerHTML = "Please enter a number greater than or equal to 1."
}

function updateViewResult(numRoman) {
    result.classList.remove("hidden");
    result.style.backgroundColor = "var(--light-blue)";
    result.style.border = "1px solid var(--main-white)";
    result.style.color = "var(--main-white)";
    result.innerHTML = numRoman;
}


convertBtn.addEventListener("click", (e) => {
e.preventDefault();
arabicToRoman(numInput.value);
});