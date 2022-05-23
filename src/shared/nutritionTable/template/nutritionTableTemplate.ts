import fs from 'fs';
import { ResNutritionTableData } from '../NutritionTable';

export const replaceVariables = (template: string, variables: object) => {
    // Object.entries(variables).forEach(([key,value]) => {
    //     template.replace()
    // })
};

export const nutritionTableTemplate = (resNutritionTableData: ResNutritionTableData): string => {
    const html = fs.readFileSync(__dirname + '/nutritionTableTemplate.html','utf8');
    // replaceVariable(resNutritionTableData.labels.amountPerLabel, resNutritionTableData.labels.amountPerLabel);

    return html;
};