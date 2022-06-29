
import { add } from "lodash";
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
    }, 2222, 1111,
    );

    // console.log(phone.phoneInfo());
    phone.addOrDeleteOrEditPhoneCall('Add')
    phone.addOrDeleteOrEditPhoneCall('Add')
    console.log(phone.callHistory);

    console.log(phone.CalculatePriceFromCalls());
    



}

main()



