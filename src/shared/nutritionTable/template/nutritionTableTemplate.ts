import fs from 'fs';
import { ResNutritionTableData } from '../NutritionTable';

export const nutritionTableTemplate = (resNutritionTableData: ResNutritionTableData): string => {
    const html = fs.readFileSync(__dirname + '/nutritionTableTemplate.html','utf8');

    return html;
};