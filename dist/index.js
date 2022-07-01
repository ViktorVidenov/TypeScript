"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phone_1 = require("./src/classes/Phone");
var models_1 = require("./src/models/models");
function main() {
    // const date = new Date()
    var phone = new Phone_1.Phone('3310', 'Nokia', 100, 'Viktor', {
        hoursIdle: 100,
        hours: 200,
        model: models_1.BateryType.LiIon
    }, {
        size: 3,
        colors: 20,
    });
    // const call: Call = new Call(new Date(), 222, 111)
    console.log(phone.phoneInfo());
    phone.phoneCallAction('Add')
    // phone.phoneCallAction('Add')
    // phone.phoneCallAction('Add')
    console.log(phone.callHistory);
    // phone.phoneCallAction('Clear')
    // console.log(phone.callHistory);
    // console.log(phone.calculatePriceFromCalls());
}
main();
