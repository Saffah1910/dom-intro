//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
let calcBtn = document.querySelector('.calculateBtn');

let billTotal = document.querySelector(".billTotal");

let billString = document.querySelector(".billString");




function totalPhoneBill() {
    
    var calcTotal = CalculateBill();

    
    //var bill = bill1.value.trim();0

    // var phoneBill = bill.split(",");

    // var total = 0;
    // for (var i = 0; i < phoneBill.length; i++) {
        //     if (phoneBill[i].trim() === "call") {
            //         total += 2.75;
    //     }
    //     else if (phoneBill[i].trim() === "sms") {
    //         total += 0.75;
    //     }
    //     billTotal.classList.remove("danger")
    //     billTotal.classList.remove("warning");


    
    //     if (total >= 20 && total < 30) {
        //         billTotal.classList.remove("danger")
    //         billTotal.classList.add("warning");

    
    //     }
    
    //     if (total >= 30) {
    //         billTotal.classList.remove("warning")
    //         billTotal.classList.add("danger");

    //     }

    let bill = billString.value;
    calcTotal.setcalcBill(bill);
    
    billTotal.classList.add(calcTotal.criticalLevel());
    billTotal.classList.add(calcTotal.warningLevel());
    
    billTotal.classList.remove(calcTotal.removeTheColors1());
    billTotal.classList.remove(calcTotal.removeTheColors2());
    billTotal.innerHTML = calcTotal.getcalcBill();
 
}
calcBtn.addEventListener('click', totalPhoneBill);

