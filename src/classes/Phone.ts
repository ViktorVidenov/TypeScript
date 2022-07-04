import { BateryModel, DisplayModel, PhoneAction, PhoneModel } from "../models/models";
import { Call } from "./Call";

export class Phone implements PhoneModel {
    public callHistory: string[] = [];
    private _model: string;
    private _manufacturer: string;
    private _price?: number;
    private _owner?: string;
    private _batery?: BateryModel;
    private _display?: DisplayModel;

    get model(): string {
        return this._model;
    }

    get manufacturer(): string {
        return this._manufacturer;
    }

    get price(): number {
        return this._price;
    }

    get owner(): string {
        return this._owner
    }

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
    ) {
        this._model = model;
        this._manufacturer = manufacturer;
        this._price = price;
        this._owner = owner;
        this._batery = batery;
        this._display = display;
    }

    public phoneInfo(): string {
        let message = `Model: ${this._model}\nManufacturer: ${this._manufacturer}`;
        
        if (this._price) {
            message += `\nPrice: ${this._price}`;
        }
        if (this._owner) {
            message += `\nOwner: ${this._owner}`; 
        }
        if (this._batery) {
            message += `\nBattery:\n Model: ${this._batery.model}\n hoursIde: ${this._batery.hoursIdle}\n hoursTalk: ${this._batery.hours}`;
        }
        if (this._display) {
            message += `\nDisplay: \n colors: ${this._display.colors}\n size: ${this.display.size}`;
        }

        return message;
    }

    public phoneCallAction(currentAction: string): void {
        const call: Call = new Call();
        if (PhoneAction.Add === currentAction) {
            this.callHistory.push(call.getCurrentCall())
        } else if (PhoneAction.Delete === currentAction) {
            this.callHistory.pop()
        } else if (PhoneAction.Clear === currentAction) {
            this.callHistory = []
        }
    }

    public calculatePriceFromCalls(): number {
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


