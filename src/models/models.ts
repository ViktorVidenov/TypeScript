export interface PhoneModel {
    model: string;
    manufacturer: string;
    price: number;
    owner: string;
    batery: BateryModel;
    display: DisplayModel;
    phoneInfo(): string;
    callHistory: string[];
    addOrDeleteOrEditPhoneCall(currentAction: string): string[];
    CalculatePriceFromCalls(): number;
}

export interface BateryModel {
    model: BateryType;
    hoursIdle: number;
    hours: number;
}

export interface DisplayModel {
    size: number;
    colors: number;
}

export enum BateryType {
    LiIon = 'Li_ION',
    NiMH = 'NiMH',
    NiCD = 'NiCD',
}

//Maybe i can change callModel with abstract class
export interface CallModel {
    dialedNumber: number;
    duration: number;
    currentDate: Date;
}

