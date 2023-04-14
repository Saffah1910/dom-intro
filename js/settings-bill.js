// get a reference to the sms or call radio buttons

let billItemSettingsElem = document.querySelector('.billItemTypeWithSettings');

let callTotalSettingsElem = document.querySelector('.callTotalSettings');
let smsTotalSettingsElem = document.querySelector('.smsTotalSettings');
let totalSettingsElem = document.querySelector('.totalSettings');

// get refences to all the settings fields
let callCostElem = document.querySelector('.callCostSetting');
let smsCostElem = document.querySelector('.smsCostSetting');
let warningLevelElem = document.querySelector('.warningLevelSetting');
let criticalLevelElem = document.querySelector('.criticalLevelSetting');



//get a reference to the add button
let buttonPrimaryElem = document.querySelector('.button-primary');

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

updateBtnElem.addEventListener("click", function(){
    alert("Hi!");
});


//add an event listener for when the add button is pressed


function textBillTotal() {

        var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        if (checkedRadioBtn) {
            var billItemType = checkedRadioBtn.value
    
            if (billItemType === "call") {
                total_call += 2.75
            }
            else if (billItemType === "sms") {
                total_sms += 0.75;
            }
        }
    
        console.log(total_call, total_sms)
        callCostElem.innerHTML = total_call.toFixed(2);
        smsCostElem.innerHTML = total_sms.toFixed(2);
        var totalCost = total_call + total_sms;
        totalTwoElem.innerHTML = totalCost.toFixed(2);
    
        if (totalCost >= 50) {
    
            totalTwoElem.classList.add("danger");
        }
        else if (totalCost >= 30) {
            totalTwoElem.classList.add("warning");
        }
    }
    buttonPrimaryElem.addEventListener('click', textBillTotal);
    console.log(buttonPrimaryElem);




// buttonPrimaryElem.addEventListener("click", function(){
//     alert("Hi!");
// });


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

