import { BateryModel, DisplayModel, PhoneModel } from "../models/models";
import { Call } from "./Call";

/*Private routation*/
export class Phone extends Call implements PhoneModel {
    //Properties on the class 
    private _model: string;
    private _manufacturer: string;
    private _price: number;
    private _owner: string;
    private _batery: BateryModel;
    private _display: DisplayModel;
    public callHistory: string[] = [];

    get model(): string {
        return this._model;
    }

    get manufacturer(): string {
        return this._manufacturer;
    }

    get price(): number {
        if (!this.price) {
            return 0;
        }
        return this._price;
    }

    get owner(): string {
        if (!this.owner) {
            return 'Dont kwow the Owner'
        }
        return this._owner
    }

    //Here we can set the value on owner variable if its private
    set owner(value: string) {
        this._owner = value;
    }

    get batery(): BateryModel {
        return this._batery
    }

    get display(): DisplayModel {
        return this._display
    }

    constructor(
        model: string,
        manufacturer: string,
        price?: number,
        owner?: string,
        batery?: BateryModel,
        display?: DisplayModel,
        dialedNumber?: number,
        duration?: number,
    ) {
        super(dialedNumber, duration)
        //Here assign value from constructor
        this._model = model;
        this._manufacturer = manufacturer;
        this._price = price;
        this._owner = owner;
        this._batery = batery;
        this._display = display;

        this.callHistory.push(this.pushEveryCall())
    }

    public pushEveryCall(): string {
        const dialedNumber = this.dialedNumber
        const duration = this.duration
        const currentCall: Call = new Call(dialedNumber, duration)
        return currentCall.getCurrentCall()
    }

    public phoneInfo(): string {
        const outputWhitoutBatteryAndDisplay = ` Modele: ${this._model} \n Manufacturer: ${this._manufacturer} \n Price: ${this._price} \n Owner: ${this._owner}`
        const bateryOutput = `Battery Model: ${this._batery.model} \n Hours Idle: ${this._batery.hoursIdle} \n Hours Talk: ${this._batery.hours}`
        const displayOutput = `Size: ${this._display.size} \n Colors: ${this._display.colors}`

        if (!this.batery && !this._display) {
            return outputWhitoutBatteryAndDisplay
        } else if (!this._batery) {
            return `${outputWhitoutBatteryAndDisplay} \n ${displayOutput}`
        } else if (!this._display) {
            return `${outputWhitoutBatteryAndDisplay} \n ${bateryOutput}`
        } else {
            return `${outputWhitoutBatteryAndDisplay} \n ${bateryOutput} \n ${displayOutput} \n ${this.callHistory}}`
        }
    }

    public addOrDeleteOrEditPhoneCall(currentAction: string): string[] {
        const Add = 'Add'
        const Delete = 'Delete'
        const Clear = 'Clear'

        if (Add === currentAction) {
            this.callHistory.push(this.pushEveryCall())
        } else if (Delete === currentAction) {
            this.callHistory.pop()
        } else if (Clear === currentAction) {
            this.callHistory = []
        }
        return this.callHistory
    }

    public CalculatePriceFromCalls(): number {
        let sum = 0;
        const pricePerMinute = 2.00;
        let allPriceForCallsInMinutes = 0;
        for (let index = 0; index < this.callHistory.length; index++) {
            sum += Number(this.callHistory[index].split(' ').pop());
        }
        allPriceForCallsInMinutes = (sum / 60) * pricePerMinute;
        return allPriceForCallsInMinutes
    }
}
//public, private, protected, readonly
//public property always can assing, if we dont whant to assign property we make it private

