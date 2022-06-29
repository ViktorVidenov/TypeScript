"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
/*Private routation*/
var Phone = /** @class */ (function () {
    function Phone(model, manufacturer, price, owner) {
        this._model = model;
        this._manufacturer = manufacturer;
        this._price = price;
        this._owner = owner;
    }
    Object.defineProperty(Phone.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "manufacturer", {
        get: function () {
            return this._manufacturer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    return Phone;
}());
exports.Phone = Phone;
// export class Phone implements PhoneModel {
//     public model: string;
//     public manufacturer: string;
//     public price: number;
//     public owner: string;
//     public batery: BateryModel;
//     public display: DisplayModel;
//     constructor(
//         model: string,
//         manufacturer: string,
//         price: number,
//         owner: string,
//         batery: BateryModel,
//         display: DisplayModel,
//     ) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.price = price;
//         this.owner = owner;
//         this.batery = batery;
//         this.display = display;
//     }
// }
