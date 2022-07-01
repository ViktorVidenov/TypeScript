"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
var models_1 = require("../models/models");
var Call_1 = require("./Call");
/*Private routation*/
var Phone = /** @class */ (function () {
    function Phone(model, manufacturer, price, owner, batery, display) {
        this.callHistory = [];
        //Here assign value from constructor
        this._model = model;
        this._manufacturer = manufacturer;
        this._price = price;
        this._owner = owner;
        this._batery = batery;
        this._display = display;
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
    Phone.prototype.phoneInfo = function () {
        var message = "Model: ".concat(this._model, "\nManufacturer: ").concat(this._manufacturer);
        if (this._price) {
            message += "\nPrice: ".concat(this._price);
        }
        if (this._owner) {
            message += "\nOwner: ".concat(this._owner);
        }
        if (this._batery) {
            message += "\nBattery:\n Model: ".concat(this._batery.model, "\n hoursIde: ").concat(this._batery.hoursIdle, "\n hoursTalk: ").concat(this._batery.hours);
        }
        if (this._display) {
            message += "\nDisplay: \n colors: ".concat(this._display.colors, "\n size: ").concat(this.display.size);
        }
        return message;
    };
    Phone.prototype.phoneCallAction = function (currentAction) {
        var call = new Call_1.Call();
        if (models_1.PhoneAction.Add === currentAction) {
            this.callHistory.push(call.getCurrentCall());
        }
        else if (models_1.PhoneAction.Delete === currentAction) {
            this.callHistory.pop();
        }
        else if (models_1.PhoneAction.Clear === currentAction) {
            this.callHistory = [];
        }
        return this.callHistory;
    };
    Phone.prototype.calculatePriceFromCalls = function () {
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
}());
exports.Phone = Phone;
