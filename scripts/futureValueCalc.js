"use strict"
console.log("code is running inside futureValueCalc.js");

//dont run stuff until the DOM is fully loaded
window.onload = function(){

    //look through the HTML document for something with the id of futureValueForm and store it in
    //a variable
    const futureValueForm = document.querySelector("#futureValueForm");
    const resetButton = document.querySelector("#resetForm");

    //bind some function to an event for the submission of the form
    futureValueForm.addEventListener("submit", calcFutureValue);
    resetButton.addEventListener("click", resetForm);

}

//functions that will do the heavy lifting based on events
function calcFutureValue(event){
    event.preventDefault();

    //pull the information out of the form for me to use
    const deposit = Number( document.querySelector("#deposit").value );
    const interestRate = Number( document.querySelector("#interestRate").value );
    const years = Number( document.querySelector("#years").value );

    //futureValue = deposit * (1 + interestRate) ** years;
    const futureValue = deposit * (1 + interestRate / 100) ** years;
    const interestEarned = futureValue - deposit;

    let resultsDiv = document.querySelector("#results");
    resultsDiv.innerHTML = `
        If you deposit <span class="fw-bold">$${deposit}</span> in a CD that earns ${interestRate}% interest 
        and matures in ${years} years, your CD's ending balance will be $${futureValue.toFixed(2)} and you would have 
        earned $${interestEarned.toFixed(2)} in interest
    `;
}

function resetForm(){
    alert("if I wasn't lazy this would have reset the form instead of just alerting these words")
}
