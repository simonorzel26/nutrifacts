import { calcDailyValuePercent, calTokJ, roundNumber } from './conversions';

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

describe('calcDailyValuePercent', () => {
  it('should calculate the daily value properly with base 10s', () => {
    const dailyRecommendedValue = {
      value: 100,
      unit: 'g',
    };

    const nutritionalIngredient = {
      value: 10,
      unit: 'g',
    };
    expect(
      calcDailyValuePercent(dailyRecommendedValue, nutritionalIngredient),
    ).toBe(10);
  });

  it('should calculate the daily value properly with random numbers', () => {
    const dailyRecommendedValue = {
      value: 275,
      unit: 'g',
    };

    const nutritionalIngredient = {
      value: 22,
      unit: 'g',
    };
    expect(
      calcDailyValuePercent(dailyRecommendedValue, nutritionalIngredient),
    ).toBe(8);
  });

  it('should calculate the daily value properly with different units', () => {
    const dailyRecommendedValue = {
      value: 300,
      unit: 'mg',
    };

    const nutritionalIngredient = {
      value: 0.2,
      unit: 'g',
    };
    expect(
      calcDailyValuePercent(dailyRecommendedValue, nutritionalIngredient),
    ).toBe(67);
  });

  it('should calculate the daily value properly with over values', () => {
    const dailyRecommendedValue = {
      value: 500,
      unit: 'mg',
    };

    const nutritionalIngredient = {
      value: 50,
      unit: 'g',
    };
    expect(
      calcDailyValuePercent(dailyRecommendedValue, nutritionalIngredient),
    ).toBe(10000);
  });

  it('should calculate the daily value properly with 0s', () => {
    const dailyRecommendedValue = {
      value: 0,
      unit: 'mg',
    };

    const nutritionalIngredient = {
      value: 0.2,
      unit: 'g',
    };
    expect(
      calcDailyValuePercent(dailyRecommendedValue, nutritionalIngredient),
    ).toBe(0);

    const dailyRecommendedValue2 = {
      value: 0.2,
      unit: 'mg',
    };

    const nutritionalIngredient2 = {
      value: 0,
      unit: 'g',
    };
    expect(
      calcDailyValuePercent(dailyRecommendedValue2, nutritionalIngredient2),
    ).toBe(0);

    const dailyRecommendedValue3 = {
      value: 0,
      unit: 'mg',
    };

    const nutritionalIngredient3 = {
      value: 0,
      unit: 'g',
    };
    expect(
      calcDailyValuePercent(dailyRecommendedValue3, nutritionalIngredient3),
    ).toBe(0);
  });
});
