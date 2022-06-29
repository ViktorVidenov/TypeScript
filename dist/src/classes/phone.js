"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
var Call_1 = require("./Call");
/*Private routation*/
var Phone = /** @class */ (function (_super) {
    __extends(Phone, _super);
    function Phone(model, manufacturer, price, owner, batery, display, dialedNumber, duration) {
        var _this = _super.call(this, dialedNumber, duration) || this;
        _this.callHistory = [];
        //Here assign value from constructor
        _this._model = model;
        _this._manufacturer = manufacturer;
        _this._price = price;
        _this._owner = owner;
        _this._batery = batery;
        _this._display = display;
        _this.callHistory.push(_this.pushEveryCall());
        return _this;
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
            if (!this.price) {
                return 0;
            }
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "owner", {
        get: function () {
            if (!this.owner) {
                return 'Dont kwow the Owner';
            }
            return this._owner;
        },
        //Here we can set the value on owner variable if its private
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "batery", {
        get: function () {
            return this._batery;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "display", {
        get: function () {
            return this._display;
        },
        enumerable: false,
        configurable: true
    });
    Phone.prototype.pushEveryCall = function () {
        var dialedNumber = this.dialedNumber;
        var duration = this.duration;
        var currentCall = new Call_1.Call(dialedNumber, duration);
        return currentCall.getCurrentCall();
    };
    Phone.prototype.phoneInfo = function () {
        var outputWhitoutBatteryAndDisplay = " Modele: ".concat(this._model, " \n Manufacturer: ").concat(this._manufacturer, " \n Price: ").concat(this._price, " \n Owner: ").concat(this._owner);
        var bateryOutput = "Battery Model: ".concat(this._batery.model, " \n Hours Idle: ").concat(this._batery.hoursIdle, " \n Hours Talk: ").concat(this._batery.hours);
        var displayOutput = "Size: ".concat(this._display.size, " \n Colors: ").concat(this._display.colors);
        if (!this.batery && !this._display) {
            return outputWhitoutBatteryAndDisplay;
        }
        else if (!this._batery) {
            return "".concat(outputWhitoutBatteryAndDisplay, " \n ").concat(displayOutput);
        }
        else if (!this._display) {
            return "".concat(outputWhitoutBatteryAndDisplay, " \n ").concat(bateryOutput);
        }
        else {
            return "".concat(outputWhitoutBatteryAndDisplay, " \n ").concat(bateryOutput, " \n ").concat(displayOutput, " \n ").concat(this.callHistory, "}");
        }
    };
    Phone.prototype.addOrDeleteOrEditPhoneCall = function (currentAction) {
        var Add = 'Add';
        var Delete = 'Delete';
        var Clear = 'Clear';
        if (Add === currentAction) {
            this.callHistory.push(this.pushEveryCall());
        }
        else if (Delete === currentAction) {
            this.callHistory.pop();
        }
        else if (Clear === currentAction) {
            this.callHistory = [];
        }
        return this.callHistory;
    };
    Phone.prototype.CalculatePriceFromCalls = function () {
        var sum = 0;
        var pricePerMinute = 2.00;
        var allPriceForCallsInMinutes = 0;
        for (var index = 0; index < this.callHistory.length; index++) {
            sum += Number(this.callHistory[index].split(' ').pop());
        }
        allPriceForCallsInMinutes = (sum / 60) * pricePerMinute;
        return allPriceForCallsInMinutes;
    };
    return Phone;
}(Call_1.Call));
exports.Phone = Phone;
//public, private, protected, readonly
//public property always can assing, if we dont whant to assign property we make it private
