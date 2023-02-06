import React from 'react';
import {
  Labels,
  NutritionalIngredient,
} from 'src/shared/nutritionTable/NutritionTable.entity';

type Props = {
  nutritionTableData: {[key: string]:NutritionalIngredient};
  labels: Labels;
};

export function NutritionTable({ labels, nutritionTableData }: Props) {
  return (
    <section className="performance-facts">
      <header className="performance-facts__header">
        <h1 className="performance-facts__title">
          {labels.nutritionFactsLabel}
        </h1>
        <p>
          {nutritionTableData.servingPerContainer.label}{' '}
          {nutritionTableData.servingPerContainer.value}
        </p>
        <p>
          {nutritionTableData.servingSize.label}{' '}
          {nutritionTableData.servingSize.value}
          {nutritionTableData.servingSize.unit}
        </p>
      </header>
      <table className="performance-facts__table">
        <thead>
          <tr>
            <th colSpan={2}>
              <b>{labels.amountPerServingLabel}</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan={2}>
              <b>{nutritionTableData.calories.label}</b>{' '}
              {nutritionTableData.calories.value}
              {nutritionTableData.servingSize.unit}
            </th>
            <td></td>
          </tr>
          <tr className="thick-row">
            <td colSpan={3} className="small-info">
              <b>% {labels.dailyValueLabel}*</b>
            </td>
          </tr>
          <tr>
            <th colSpan={2}>
              <b>{nutritionTableData.fatContent.label}</b>{' '}
              {nutritionTableData.fatContent.value}
              {nutritionTableData.fatContent.unit}
            </th>
            <td>
              <b>{nutritionTableData.fatContent.dailyValuePercent}%</b>
            </td>
          </tr>
          <tr>
            <td className="blank-cell"></td>
            <th>
              {nutritionTableData.saturatedFatContent.label}{' '}
              {nutritionTableData.saturatedFatContent.value}
              {nutritionTableData.saturatedFatContent.unit}
            </th>
            <td>
              <b>{nutritionTableData.saturatedFatContent.dailyValuePercent}%</b>
            </td>
          </tr>
          <tr>
            <td className="blank-cell"></td>
            <th>
              {nutritionTableData.transFatContent.label}{' '}
              {nutritionTableData.transFatContent.value}
              {nutritionTableData.transFatContent.unit}
            </th>
            <td></td>
          </tr>
          <tr>
            <th colSpan={2}>
              <b>{nutritionTableData.cholesterolContent.label}</b>{' '}
              {nutritionTableData.cholesterolContent.value}
              {nutritionTableData.cholesterolContent.unit}
            </th>
            <td>
              <b>{nutritionTableData.cholesterolContent.dailyValuePercent}%</b>
            </td>
          </tr>
          <tr>
            <th colSpan={2}>
              <b>{nutritionTableData.sodiumContent.label}</b>{' '}
              {nutritionTableData.sodiumContent.value}
              {nutritionTableData.sodiumContent.unit}
            </th>
            <td>
              <b>{nutritionTableData.sodiumContent.dailyValuePercent}%</b>
            </td>
          </tr>
          <tr>
            <th colSpan={2}>
              <b>{nutritionTableData.carbohydrateContent.label}</b>{' '}
              {nutritionTableData.carbohydrateContent.value}
              {nutritionTableData.carbohydrateContent.unit}
            </th>
            <td>
              <b>{nutritionTableData.carbohydrateContent.dailyValuePercent}%</b>
            </td>
          </tr>
          <tr>
            <td className="blank-cell"></td>
            <th>
              {nutritionTableData.fiberContent.label}{' '}
              {nutritionTableData.fiberContent.value}
              {nutritionTableData.fiberContent.unit}
            </th>
            <td>
              <b>{nutritionTableData.fiberContent.dailyValuePercent}%</b>
            </td>
          </tr>
          <tr>
            <td className="blank-cell"></td>
            <th>
              {nutritionTableData.sugarContent.label}{' '}
              {nutritionTableData.sugarContent.value}
              {nutritionTableData.sugarContent.unit}
            </th>
            <td></td>
          </tr>
          <tr className="thick-end">
            <th colSpan={2}>
              <b>{nutritionTableData.proteinContent.label}</b>{' '}
              {nutritionTableData.proteinContent.value}
              {nutritionTableData.proteinContent.unit}
            </th>
            <td></td>
          </tr>
        </tbody>
      </table>
      <table className="performance-facts__table">
        <tbody>
          <tr>
            <th colSpan={2}>
              <b>{nutritionTableData.vitaminD.label}</b>{' '}
              {nutritionTableData.vitaminD.value}
              {nutritionTableData.vitaminD.unit}
            </th>
            <td></td>
          </tr>
          <tr>
            <th colSpan={2}>
              <b>{nutritionTableData.vitaminC.label}</b>{' '}
              {nutritionTableData.vitaminC.value}
              {nutritionTableData.vitaminC.unit}
            </th>
            <td></td>
          </tr>
          <tr>
            <th colSpan={2}>
              <b>{nutritionTableData.vitaminB6.label}</b>{' '}
              {nutritionTableData.vitaminB6.value}
              {nutritionTableData.vitaminB6.unit}
            </th>
            <td></td>
          </tr>
          <tr>
            <th colSpan={2}>
              <b>{nutritionTableData.magnesium.label}</b>{' '}
              {nutritionTableData.magnesium.value}
              {nutritionTableData.magnesium.unit}
            </th>
            <td></td>
          </tr>
          <tr>
            <th colSpan={2}>
              <b>{nutritionTableData.iron.label}</b>{' '}
              {nutritionTableData.iron.value}
              {nutritionTableData.iron.unit}
            </th>
            <td></td>
          </tr>
          <tr>
            <th colSpan={2}>
              <b>{nutritionTableData.calcium.label}</b>{' '}
              {nutritionTableData.calcium.value}
              {nutritionTableData.calcium.unit}
            </th>
            <td></td>
          </tr>
          <tr>
            <th colSpan={2}>
              <b>{nutritionTableData.potassium.label}</b>{' '}
              {nutritionTableData.potassium.value}
              {nutritionTableData.potassium.unit}
            </th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
