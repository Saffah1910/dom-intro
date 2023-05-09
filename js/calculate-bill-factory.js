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


    function getcalcBill() {
        return total.toFixed(2);
    }


    function criticalLevel() {
        if (getcalcBill() > 30) {
            return "danger"
        }

    }

    function warningLevel() {
        if (getcalcBill() > 20) {

            return "warning"
        }

    }



    function removeTheColors1() {

        if (getcalcBill() < 30) {
            return "danger";
        }
    }
    function removeTheColors2() {

        if (getcalcBill() < 20) {
            return "warning";
        }
    }



    return {
        setcalcBill,
        getcalcBill,
        warningLevel,
        criticalLevel,
        removeTheColors1,
        removeTheColors2

    }
}

