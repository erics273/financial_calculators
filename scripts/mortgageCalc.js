"use strict"
console.log("it is working!");

window.onload = init;

function init() {

    //get the buttons from the page so we can work with them in JS
    const mortgageCalcForm = document.querySelector("#mortgageCalc");
    const resetButton = document.querySelector("#resetButton");


    //wire up the functions to the click of the buttons and submit of the form
    mortgageCalcForm.addEventListener("submit", calcMortgage);
    resetButton.addEventListener("click", resetForm);

}

//create an add function that gets num1 and num2 of the page and sums them
function calcMortgage(e) {
    e.preventDefault();
    
    //get the data we need from the user about their loan
    const principalAmountField = document.querySelector("#principalAmount");
    const interestRateField = document.querySelector("#interestRate");
    const loanLengthField = document.querySelector("#loanLength");

    //calculate the monthly interest rate and the total number if payments
    const monthlyRate = Number(interestRateField.value) / 100 / 12;
    const numOfPayments = Number(loanLengthField.value) * 12;
    const denominator = Math.pow(1 + monthlyRate, numOfPayments);

    //calculate monthly payment and total loan amount
    const monthlyPayment =  Number(principalAmountField.value) * (monthlyRate * denominator) / (denominator - 1);

    //monthly payment calced without the denominator separated out
    // const monthlyPayment =  Number(principalAmountField.value) * monthlyRate * (Math.pow(1 + monthlyRate, numOfPayments )) / (Math.pow(1 + monthlyRate, numOfPayments ) -1);
    
    const totalPayment = monthlyPayment * numOfPayments;
    const totalInterest = totalPayment - Number(principalAmountField.value)

    const message = `
        Your expected month payment will be: <span class="fw-bold">$${monthlyPayment.toFixed(2)}</span> 
        with a total interest amount of <span class="fw-bold">$${totalInterest.toFixed(2)}</span> 
        paid at the end of the <span class="fw-bold">${loanLengthField.value} years</span>. Your total loan amount 
        is <span class="fw-bold">$${totalPayment.toFixed(2)}</span>
    `;

    document.querySelector("#results").innerHTML = message;

}

function resetForm(){

    const principalAmountField = document.querySelector("#principalAmount");
    principalAmountField.value = "";
    document.querySelector("#interestRate").value = "";
    document.querySelector("#loanLength").value = "";
    document.querySelector("#results").innerHTML = "";
    principalAmountField.focus();
    
}