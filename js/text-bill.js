// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

let textTotalAddBtn = document.querySelector('.addToBillBtn');
let billTypeEntered = document.querySelector('.billTypeText')
let callsTotalElem = document.querySelector(".callTotalOne");
let smsTotalElem = document.querySelector(".smsTotalOne");
let totalCostElem = document.querySelector('.totalOne');

var callsTotal = 0;
var smsTotal = 0;

function textBillTotal(){
  // let bill = billTypeEntered.value; 

    let bill = billTypeEntered.value.toLowerCase();
//   var bill = billTypeEntered.value.trim();
   
    if (bill.trim() === "call"){
        callsTotal += 2.75
    }
    else if (bill.trim() === "sms"){
        smsTotal += 0.75;
    }
    
    console.log(callsTotal)
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
  
     if (totalCost >= 50){
      
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElem.classList.add("warning");
    }
}
  


textTotalAddBtn.addEventListener('click', textBillTotal);