"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Call = void 0;
var Call = /** @class */ (function () {
    function Call(dialedNumber, duration) {
        this.currentDate = new Date();
        this.dialedNumber = dialedNumber;
        this.duration = duration;
    }
    Call.prototype.getDurationInSeconds = function (duration) {
        duration = (this.duration * 60);
        return duration;
    };
    Call.prototype.getCurrentCall = function () {
        return "Date: ".concat(this.currentDate.toDateString(), " Time: ").concat(this.currentDate.getHours() + ':' + (this.currentDate.getMinutes() < 10 ? '0' : '') + this.currentDate.getMinutes(), " Number: ").concat(this.dialedNumber, " Duration in seconds: ").concat(this.getDurationInSeconds(this.duration));
    };
    return Call;
}());
exports.Call = Call;
