
   describe("Calculate bill function" , function(){
    it("should return 5.50 if 2 calls were made",function(){
        var calculateBills =  CalculateBill();
        calculateBills.setcalcBill("call,call");

        assert.equal(5.50,calculateBills.getcalcBill())
    });

    it("should return R3.00 if 4 sms's were made",function(){
        var calculateBills = CalculateBill();
        calculateBills.setcalcBill("sms,sms,sms,sms");

        assert.equal(3.00 ,calculateBills.getcalcBill())
    });

    it("should return R3.50 if one call and one sms is made",function(){
        var calculateBills = CalculateBill();
        calculateBills.setcalcBill("call,sms");
        assert.equal(3.50, calculateBills.getcalcBill() );
    });

    it("if the total is R22.25 it should return warning",function(){
        var calculateBills = CalculateBill()
        calculateBills.setcalcBill("call,call,sms,call,sms,call,call,sms,call,sms,call,")
        assert.equal(22.25, calculateBills.getcalcBill() )
        assert.equal("warning", calculateBills.warningLevel() )

    });
    it("if the total is R36.25 it should return critcal",function(){
        var calculateBills = CalculateBill();
        calculateBills.setcalcBill("call,call,sms,call,sms,call,call,sms,call,sms,call,call,sms,call,sms,call,sms,call,sms,")
        assert.equal(36.25, calculateBills.getcalcBill() )
        assert.equal("danger", calculateBills.criticalLevel() )

    });


})

