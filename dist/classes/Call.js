"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Call = void 0;
var Call = /** @class */ (function () {
    function Call(currentDate, dialedNumber, duration) {
        this._currentDate = new Date();
        this._currentDate = currentDate;
        this._dialedNumber = dialedNumber;
        this._duration = duration;
    }
    Object.defineProperty(Call.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Call.prototype, "dialedNumber", {
        get: function () {
            return this._dialedNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Call.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    Call.prototype.getDurationInSeconds = function (duration) {
        duration = (duration * 60);
        return duration;
    };
    Call.prototype.getCurrentCall = function () {
        var currentDate = new Date();
        var dialedNumber = Math.floor(359880000000 + Math.random() * 900000);
        var duration = Math.floor(Math.random() * 1000);
        return "Date: ".concat(currentDate.toDateString(), " Time: ").concat(currentDate.getHours() + ':' + (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes(), " Number: ").concat(dialedNumber, " Duration in seconds: ").concat(this.getDurationInSeconds(duration));
    };
    return Call;
}());
exports.Call = Call;
