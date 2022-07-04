"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phonee_1 = require("./src/classes/Phonee");
var models_1 = require("./src/models/models");
function main() {
    // const date = new Date()
    var phone = new Phonee_1.Phone('3310', 'Nokia', 100, 'Viktor', {
        hoursIdle: 100,
        hours: 200,
        model: models_1.BateryType.LiIon
    }, {
        size: 3,
        colors: 20,
    });
    console.log(phone.phoneInfo());
}
main();
