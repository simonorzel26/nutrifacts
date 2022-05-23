import { nutritionTableTemplate } from "./nutritionTableTemplate";
import resNutritionTableData from '../resNutritionTableData.json';

describe('nutritionTableTemplate template', () => {
  
  it('should return the base nutritionTable template', async () => {
    expect(nutritionTableTemplate(resNutritionTableData)).toBeDefined();
  });

  it('should return the nutritionTable with added data', async () => {
    expect(nutritionTableTemplate(resNutritionTableData)).toBeDefined();
  });
});

