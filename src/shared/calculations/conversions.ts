const calTokJMultiple: number = 4.184;

export const calTokJ = (cal: number): number => {
    const kJ = cal * calTokJMultiple;
    return roundNumber(kJ);
}

export const roundNumber = (number: number, decimalPoints?: number): number => {
    const factor = Math.pow(10, decimalPoints || 2);
    const roundedNumber = Math.round(number * factor) / factor;
    return roundedNumber;
}