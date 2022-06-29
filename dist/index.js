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
    }, 2222, 1111);
    // console.log(phone.phoneInfo());
    phone.addOrDeleteOrEditPhoneCall('Add');
    phone.addOrDeleteOrEditPhoneCall('Add');
    phone.addOrDeleteOrEditPhoneCall('Add');
    phone.addOrDeleteOrEditPhoneCall('Add');
    console.log(phone.callHistory);
    console.log(phone.CalculatePriceFromCalls());
}
main();
