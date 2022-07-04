import { Call } from "./src/classes/Call";
import { Phone } from "./src/classes/Phone";
import { BateryType } from "./src/models/models";

function main() {
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
    
    console.log(phone.phoneInfo());
    console.log(phone.phoneCallAction('Add'));
    console.log(phone.phoneCallAction('Add'));
    console.log(phone.callHistory);
}

main()



