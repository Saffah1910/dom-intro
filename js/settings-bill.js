// get a reference to the sms or call radio buttons

let billItemSettingsElem = document.querySelector('.billItemTypeWithSettings');
let callTotalSettingsElem = document.querySelector('.callTotalSettings');
let smsTotalSettingsElem = document.querySelector('.smsTotalSettings');
let totalSettingsElem = document.querySelector('.totalSettings');

//get a reference to the add button
let buttonPrimaryElem = document.querySelector('.addBtnSettings');

// get refences to all the settings fields
let callCostElem = document.querySelector('.callCostSetting');
let smsCostElem = document.querySelector('.smsCostSetting');
let warningLevelElem = document.querySelector('.warningLevelSetting');
let criticalLevelElem = document.querySelector('.criticalLevelSetting');

//get a reference to the 'Update settings' button
let updateBtnElem = document.querySelector('.updateSettings');

// create a variables that will keep track of all the settings
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;

// create a variables that will keep track of all three totals.
var total_call = 0;
var total_sms = 0;
var total_cost = 0;

//add an event listener for when the 'Update settings' button is pressed
updateBtnElem.addEventListener("click", function () {

    // * add nothing for invalid values that is not 'call' or 'sms'.

    callCost = parseFloat(callCostElem.value);
    smsCost = parseFloat(smsCostElem.value);
    warningLevel = parseFloat(warningLevelElem.value);
    criticalLevel = parseFloat(criticalLevelElem.value);
    addClass()
});


//add an event listener for when the add button is pressed
function phoneTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        //in the event listener get the value from the billItemTypeRadio radio buttons
        var billItemType = checkedRadioBtn.value
        if (total_cost < criticalLevel) {
            // * add the appropriate value to the call / sms total
            if (billItemType === "call") {
                total_call += callCost;
            }
            else if (billItemType === "sms") {
                total_sms += smsCost;
            }
        }
    }

    callTotalSettingsElem.innerHTML = total_call.toFixed(2);
    smsTotalSettingsElem.innerHTML = total_sms.toFixed(2);
    // * add the appropriate value to the overall total
    total_cost = total_call + total_sms;
    // * display the latest total on the screen.
    totalSettingsElem.innerHTML = total_cost.toFixed(2);
    addClass()
}
function addClass() {
    totalSettingsElem.classList.remove("danger");
    totalSettingsElem.classList.remove("warning");
    // * check the value thresholds and display the total value in the right color.
    if (warningLevel > 0 && criticalLevel > 0) {
        if (total_cost >= warningLevel) {
            totalSettingsElem.classList.remove("danger");
            totalSettingsElem.classList.add("warning");
        }
        if (total_cost >= criticalLevel) {
            totalSettingsElem.classList.remove("warning");
            totalSettingsElem.classList.add("danger");
        }
    }
}

buttonPrimaryElem.addEventListener('click', phoneTotal);









