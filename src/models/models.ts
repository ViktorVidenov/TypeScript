export interface PhoneModel {
    model: string;
    manufacturer: string;
    price: number;
    owner: string;
    batery: BateryModel;
    display: DisplayModel;
    callHistory: string[];
    phoneInfo(): string;
    phoneCallAction(currentAction: string): void;
    calculatePriceFromCalls(): number;
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

export interface CallModel {
    dialedNumber: number;
    duration: number;
    currentDate: Date;
}

export enum PhoneAction {
    Add = 'Add',
    Delete = 'Delete',
    Clear = 'Clear',
}
