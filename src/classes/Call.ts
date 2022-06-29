import { CallModel } from "../models/models";

export class Call implements CallModel {
    public dialedNumber: number;
    public duration: number;
    public currentDate: Date = new Date()

    constructor(
        dialedNumber: number,
        duration: number,
    ) {
        this.dialedNumber = dialedNumber
        this.duration = duration
    }

    public getDurationInSeconds(duration: number): number {
        duration = (this.duration * 60)
        return duration
    }

    public getCurrentCall(): string {
        return `Date: ${this.currentDate.toDateString()} Time: ${this.currentDate.getHours() + ':' + (this.currentDate.getMinutes() < 10 ? '0' : '') + this.currentDate.getMinutes()} Number: ${this.dialedNumber} Duration in seconds: ${this.getDurationInSeconds(this.duration)}`
    }
}
