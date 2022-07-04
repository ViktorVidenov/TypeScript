"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phone_1 = require("./classes/Phone");
var models_1 = require("./models/models");
function main() {
    var phone = new Phone_1.Phone('3310', 'Nokia', 100, 'Viktor', {
        hoursIdle: 100,
        hours: 200,
        model: models_1.BateryType.LiIon
    }, { colors: 20, size: 30 });
    console.log(phone.phoneInfo());
    console.log(phone.phoneCallAction('Add'));
    console.log(phone.phoneCallAction('Add'));
    console.log(phone.callHistory);
}
main();
