// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
let billItemTypeRadioElem = document.querySelector('.billItemTypeRadio');
let radioBillAddBtnElem = document.querySelector('.radioBillAddBtn');
let callTotalTwoElem = document.querySelector('.callTotalTwo');
let smsTotalTwoElem = document.querySelector('.smsTotalTwo');
let totalTwoElem = document.querySelector('.totalTwo');


var callsTotal = 0;
var smsTotal = 0;

function textBillTotal() {

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value

        if (billItemType === "call") {
            callsTotal += 2.75
        }
        else if (billItemType === "sms") {
            smsTotal += 0.75;
        }
    }

    console.log(callsTotal, smsTotal)
    callTotalTwoElem.innerHTML = callsTotal.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalTwoElem.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50) {

        totalTwoElem.classList.add("danger");
    }
    else if (totalCost >= 30) {
        totalTwoElem.classList.add("warning");
    }
}
radioBillAddBtnElem.addEventListener('click', textBillTotal);