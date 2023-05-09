function CalculateBill() {

    var total = 0;

    function setcalcBill(amount) {


        var phoneBill = amount.split(",");

        for (var i = 0; i < phoneBill.length; i++) {
            if (phoneBill[i].trim().toLowerCase() === "call") {
                total += 2.75;
            }
            else if (phoneBill[i].trim().toLowerCase() === "sms") {
                total += 0.75;
            }
        }
      
    }
    function getcalcBill(){
        return total;
    }

    function warningLevel() {
        if (total > 20 && total < 30) {
            return "warning"
        }
    }
    function criticalLevel() {
        if (total > 30) {
            return "danger"
        }
    }
    return {
        setcalcBill,
        getcalcBill,
        warningLevel,
        criticalLevel

    }
}

