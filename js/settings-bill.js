// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

let billItemSettingsElem = document.querySelector('.billItemTypeWithSettings');
let buttonPrimaryElem = document.querySelector('.button-primary');
let callTotalSettingsElem = document.querySelector('.callTotalSettings');
let smsTotalSettingsElem = document.querySelector('.smsTotalSettings');
let totalSettingsElem = document.querySelector('.totalSettings');
let callCostElem = document.querySelector('.callCostSetting');
let smsCostElem = document.querySelector('.smsCostSetting');
let warningLevelElem = document.querySelector('.warningLevelSetting');
let criticalLevelElem = document.querySelector('.criticalLevelSetting');
let updateBtnElem = document.querySelector('.updateSettings');





updateBtnElem.addEventListener("click", function(){
    alert("Hi!");
});


// radioBillAddBtnElem.addEventListener("click", function(){
//     alert("Hi!");
// });





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

    // if (totalCost >= 50) {

    //     totalTwoElem.classList.add("danger");
    // }
    // else if (totalCost >= 30) {
    //     totalTwoElem.classList.add("warning");
    // }
}
// console.log(radioBillAddBtnElem);
// radioBillAddBtnElem.addEventListener('click', textBillTotal);



