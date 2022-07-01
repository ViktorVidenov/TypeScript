import { CallModel } from "../models/models";

export class Call implements CallModel {
    private _currentDate: Date = new Date()
    private _dialedNumber: number;
    private _duration: number;

    get currentDate(): Date {
        return this._currentDate
    }

    get dialedNumber(): number {
        return this._dialedNumber
    }

    get duration(): number {
        return this._duration
    }

    constructor(
        currentDate?: Date,
        dialedNumber?: number,
        duration?: number,
    ) {
        this._currentDate = currentDate
        this._dialedNumber = dialedNumber
        this._duration = duration
    }

    public getDurationInSeconds(duration: number): number {
        duration = (duration * 60)
        return duration
    }

    public getCurrentCall(): string {
        const currentDate = new Date()
        const dialedNumber = Math.floor(359880000000 + Math.random() * 900000);
        const duration = Math.floor(Math.random() * 1000);
        return `Date: ${currentDate.toDateString()} Time: ${currentDate.getHours() + ':' + (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes()} Number: ${dialedNumber} Duration in seconds: ${this.getDurationInSeconds(duration)}`
    }
}
