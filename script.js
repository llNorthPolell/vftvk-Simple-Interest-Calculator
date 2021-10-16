// Author : Marco Ng

// validates principal field and updates results display at bottom of page
function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;

    endYear = new Date().getFullYear() + parseInt(t);

    result = document.getElementById("result");

    principalIsNaN = isNaN(p) || p <= 0;

    output= Math.round(p*(r/100)*t);

    if (principalIsNaN)
        alert("Enter a positive number");
    else 
        result.innerHTML = "If you deposit "+p+", <br/> at an interest rate of "+r+"%. <br/> You will receive an amount of "+output+", <br/> in the year "+endYear
    ;

}
        
// updates rate value next to rate slider
function displayRate(){
    rate = document.getElementById("rate").value;
    ratePercent = document.getElementById("ratePercent");
    ratePercent.innerText = rate + "%";
}
