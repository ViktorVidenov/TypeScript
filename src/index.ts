import { Call } from "./classes/Call";
import { Phone } from "./classes/Phone";
import { BateryType } from "./models/models";

function main() {
    const phone: Phone = new Phone(
        '3310',
        'Nokia',
        100,
        'Viktor', {
        hoursIdle: 100,
        hours: 200,
        model: BateryType.LiIon
    }, { colors: 20, size: 30 });

    console.log(phone.phoneInfo());
    console.log(phone.phoneCallAction('Add'));
    console.log(phone.phoneCallAction('Add'));
    console.log(phone.callHistory);
}

main()



