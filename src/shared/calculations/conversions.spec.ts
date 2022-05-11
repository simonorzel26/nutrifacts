import { calTokJ, roundNumber } from './conversions'

describe('calTokJ', () => {
  it('should return proper calculation of kJ', () => {
    expect(calTokJ(0.5)).toBeCloseTo(2.092, 2);
    expect(calTokJ(200)).toBeCloseTo(836.8, 2);
    expect(calTokJ(100356)).toBeCloseTo(419889.504, 2);
  });
});

describe('roundNumber', () => {
  it('should return proper rounded number to default decimal', () => {
    expect(roundNumber(1.1234567)).toBe(1.12);
  });
  it('should return proper rounded number to set decimal', () => {
    expect(roundNumber(1.1234567, 5)).toBe(1.12346);
  });
  it('should return proper rounded negative number to set decimal', () => {
    expect(roundNumber(-1.1234567, 5)).toBe(-1.12346);
  });
});