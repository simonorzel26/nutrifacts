
# NutriFacts Microservice 🍏

## Overview 🌟

NutriFacts is a dynamic microservice designed to compute regional nutritional daily values, localize measurement units, and translate key names of nutrition tables into multiple languages. It leverages the robustness of NestJS to offer a scalable and efficient solution for nutrition data management.

### Features 🚀
- **Multi-Language Support**: Currently supports English (en) and German (de), with plans to expand to more languages.
- **Unit Localization**: Converts nutritional units based on regional preferences (e.g., metric to imperial).
- **Dynamic Translation**: Translates nutrition table key names for global accessibility.
- **Customizable Responses**: Configurable endpoints to tailor nutrition data based on specific requirements.

### Live Demo 🖥
Check out the live demo here: [NutriFacts Demo](https://nutrifacts-site.vercel.app/)

![NutriFacts Interface](https://user-images.githubusercontent.com/60504110/216325344-cbdcbe26-6c0d-43be-9a6c-bc1914c12b56.png)

## Getting Started 🛠

### Installation

To set up the project locally, run:

```bash
$ yarn install
```

### Running the Application

```bash
# For development
$ yarn start

# For live reload
$ yarn start:dev

# For production
$ yarn start:prod
```

### Testing

```bash
# Unit tests
$ yarn test

# End-to-end tests
$ yarn test:e2e

# Test coverage
$ yarn test:cov
```

## API Endpoints 📡

### POST `/nutritionTable`

#### Request Example

<details>
<summary>Click to expand!</summary>

```json
{
  "config": {
    "inputUnitType": "metric"
  },
  "nutritionTableData": {
    "calories": {"value": 140, "unit": "Kcal"},
    // Additional nutrition data...
  }
}
```
</details>

#### Response Example

<details>
<summary>Click to expand!</summary>

```json
{
  "nutritionTableData": {
    "calories": {"value": 140, "unit": "Kcal", "label": "Calories"},
    // Translated and calculated nutrition data...
  },
  "labels": {
    // Customizable labels for UI...
  }
}
```
</details>

## Contributing ✨

We welcome contributions! Here are some ways you can help:
- Ensure translations are accurate and up-to-date.
- Help add support for additional languages.
- Contribute to our front-end by adding features like screenshot capturing of the rendered nutrition table using Puppeteer.
- Work on separating the front-end nutrition table into an npm component for easier reuse.

## Planned Features 🌈
- **API Authentication**: Implement API keys for secure access.
- **Interactive Documentation**: Utilize tools like Swagger for live API testing.
- **Enhanced Localization**: Extend unit localization to cover all globally recognized units.
- **Front-End Library**: Develop a React/Vue component library for easy integration of nutrition tables into web applications.

## License 📄

MIT

## Meet the Author 👤

- [simonorzel26](https://github.com/simonorzel26) - Creator and Maintainer

