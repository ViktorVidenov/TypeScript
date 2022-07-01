import { Call } from "./src/classes/Call";
import { Phone } from "./src/classes/Phone";
import { BateryType } from "./src/models/models";

function main() {
    // const date = new Date()
    const phone: Phone = new Phone(
        '3310',
        'Nokia',
        100,
        'Viktor', {
        hoursIdle: 100,
        hours: 200,
        model: BateryType.LiIon
    }, {
        size: 3,
        colors: 20,
    });

    // const call: Call = new Call(new Date(), 222, 111)
    
    console.log(phone.phoneInfo());
    // phone.phoneCallAction('Add')
    // phone.phoneCallAction('Add')
    // phone.phoneCallAction('Add')
    // console.log(phone.callHistory);
    
    // phone.phoneCallAction('Clear')
    // console.log(phone.callHistory);

    // console.log(phone.calculatePriceFromCalls());




}

main()



