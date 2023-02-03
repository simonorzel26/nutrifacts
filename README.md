## Description 😫

A microservice to calculate regional nutritional daily values, localize units and translate nutrition table key names.

Currently supports languages:
- en
- de

![image](https://user-images.githubusercontent.com/60504110/216325344-cbdcbe26-6c0d-43be-9a6c-bc1914c12b56.png)


Demo:
https://nutrifacts-site.vercel.app/

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Endpoints POST
/nutritionTable

example req
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
        "value": 0,
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
