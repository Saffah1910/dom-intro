
describe("Calculate bill function" , function(){
    it("should return 5.50 if 2 calls were made",function(){
     
        var calculateBills =  CalculateBill("call,CALL");
        assert.equal(5.50,calculateBills.calcBill())
    });

    it("should return R3.00 if 4 sms's were made",function(){
        var calculateBills = CalculateBill("sms,SMS,sms,sms")
        assert.equal(3.00 ,calculateBills.calcBill())
    });
    it("should return R3.50 if one call and one sms is made",function(){
        var calculateBills = CalculateBill("call,sms")
        assert.equal(3.50, calculateBills.calcBill() )
    });
    it("if the total is R22.25 it should return warning",function(){
        var calculateBills = CalculateBill("call,call,sms,call,sms,call,call,sms,call,sms,call,")
        assert.equal(22.25, calculateBills.calcBill() )
        assert.equal("warning", calculateBills.warningLevel() )

    });
    it("if the total is R36.25 it should return critcal",function(){
        var calculateBills = CalculateBill("call,call,sms,call,sms,call,call,sms,call,sms,call,call,sms,call,sms,call,sms,call,sms,")
        assert.equal(36.25, calculateBills.calcBill() )
        assert.equal("critical", calculateBills.criticalLevel() )

    });


})

