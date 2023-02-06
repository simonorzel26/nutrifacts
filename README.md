## Description 😫

A microservice to calculate regional nutritional daily values, localize units and translate nutrition table key names.

Currently supports languages:
- en
- de
- 
Demo:
https://nutrifacts-site.vercel.app/



![image](https://user-images.githubusercontent.com/60504110/216325344-cbdcbe26-6c0d-43be-9a6c-bc1914c12b56.png)



## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Endpoints POST
/nutritionTable

example req

<details>
```
{
  "config": {
    "inputUnitType": "metric"
  },
  "nutritionTableData": {
    "calories": {
      "value": 140,
      "unit": "Kcal"
    },
    "energy": {
      "value": 0,
      "unit": "g"
    },
    "servingPerContainer": {
      "value": 8,
      "unit": "g"
    },
    "servingSize": {
      "value": 131,
      "unit": "g"
    },
    "carbohydrateContent": {
      "value": 22,
      "unit": "g"
    },
    "fiberContent": {
      "value": 6.94,
      "unit": "g"
    },
    "sugarContent": {
      "value": 2,
      "unit": "g"
    },
    "cholesterolContent": {
      "value": 10,
      "unit": "mg"
    },
    "proteinContent": {
      "value": 6,
      "unit": "g"
    },
    "sodiumContent": {
      "value": 440,
      "unit": "mg"
    },
    "fatContent": {
      "value": 3.5,
      "unit": "g"
    },
    "saturatedFatContent": {
      "value": 0.2,
      "unit": "g"
    },
    "potassium": {
      "value": 520,
      "unit": "mg"
    },
    "calcium": {
      "value": 0,
      "unit": "mg"
    },
    "vitaminD": {
      "value": 0,
      "unit": "g"
    },
    "transFatContent": {
      "value": 0,
      "unit": "g"
    },
    "unsaturatedFatContent": {
      "value": 0,
      "unit": "g"
    },
    "monoUnsaturates": {
      "value": 0,
      "unit": "g"
    },
    "polyUnsaturates": {
      "value": 0,
      "unit": "g"
    },
    "polyols": {
      "value": 0,
      "unit": "g"
    },
    "starch": {
      "value": 0,
      "unit": "g"
    },
    "vitaminC": {
      "value": 0,
      "unit": "g"
    },
    "iron": {
      "value": 0,
      "unit": "g"
    },
    "vitaminB6": {
      "value": 0,
      "unit": "g"
    },
    "cobalamin": {
      "value": 0,
      "unit": "g"
    },
    "magnesium": {
      "value": 0,
      "unit": "g"
    }
  }
}
```
</details>

Response

<details>
```
{
  "config": {
    "inputUnitType": "metric"
  },
  "nutritionTableData": {
    "calories": {
      "value": 140,
      "unit": "Kcal",
      "label": "Calories"
    },
    "energy": {
      "value": 585.76,
      "unit": "kJ",
      "label": "Energy"
    },
    "servingPerContainer": {
      "value": 8,
      "unit": "g"
    }, 
    "servingSize": {
      "value": 131,
      "unit": "g",
      "label": "Serving Size"
    },
    "carbohydrateContent": {
      "value": 22,
      "unit": "g",
      "label": "Carbohydrates"
    },
    "fiberContent": {
      "value": 6.94,
      "unit": "g",
      "label": "Fiber"
    },
    "sugarContent": {
      "value": 2,
      "unit": "g",
      "label": "Sugars"
    },
    "starch": {
      "value": 0,
      "unit": "mg",
      "label": "Starch"
    },
    "cholesterolContent": {
      "value": 0,
      "unit": "mg",
      "label": "Cholesterol"
    },
    "proteinContent": {
      "value": 6,
      "unit": "g",
      "label": "Protein"
    },
    "sodiumContent": {
      "value": 440,
      "unit": "mg",
      "label": "Sodium"
    },
    "fatContent": {
      "value": 3.5,
      "unit": "g",
      "label": "Fat"
    },
    "saturatedFatContent": {
      "value": 200,
      "unit": "mg",
      "label": "Saturated Fats"
    },
    "transFatContent": {
      "value": 0,
      "unit": "mg",
      "label": "Trans Fats"
    },
    "unsaturatedFatContent": {
      "value": 0,
      "unit": "mg",
      "label": "Unsaturated Fats"
    },
    "monoUnsaturates": {
      "value": 0,
      "unit": "mg",
      "label": "Mono Unsaturated Fats"
    },
    "polyUnsaturates": {
      "value": 0,
      "unit": "mg",
      "label": "Poly Unsaturated Fats"
    },
    "polyols": {
      "value": 0,
      "unit": "mg",
      "label": "Polyols"
    },
    "potassium": {
      "value": 520,
      "unit": "mg",
      "label": "Potassium"
    },
    "calcium": {
      "value": 0,
      "unit": "mg",
      "label": "Calcium"
    },
    "vitaminD": {
      "value": 0,
      "unit": "mg",
      "label": "Vitamin D"
    },
    "vitaminB6": {
      "label": "Vitamin B6",
      "unit": "mg",
      "value": 0
    },
    "vitaminC": {
      "label": "Vitamin C",
      "unit": "mg",
      "value": 0
    },
    "iron": {
      "label": "Iron",
      "unit": "mg",
      "value": 0
    },
    "magnesium": {
      "label": "Magnesium",
      "unit": "mg",
      "value": 0
    }
  },
  "labels": {
    "amountPerServingLabel": "Amount per Serving",
    "percentDailyValueLabel": "Percent Daily",
    "percentDailyValueSubtext": "Percent Daily subtext",
    "dailyValueLabel": "Daily Value",
    "nutritionFactsLabel": "Nutrition Facts"
  }
}
```
</details>

