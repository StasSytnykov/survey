# Project Setup and Configuration

This README provides instructions for installing dependencies, running the project, and adding question configurations.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/StasSytnykov/survey.git
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

### Development Mode
To start the development server:
```bash
npm run dev
```
The project will be available at `http://localhost:3000` by default.

### Production Mode
To build and start the project in production mode:
```bash
npm run build
npm start
```

### Linting
To run the linter and check for coding standard violations:
```bash
npm run lint
```

## Adding Question Configurations

You can add or modify question configurations in the project by following this example:

```json
[
  {
    "id": "q1",
    "question": "Select your gender:",
    "statement": "",
    "screenType": "singleChoice",
    "options": [
      { "label": "Female", "next": "q2" },
      { "label": "Male", "next": "q2" }
    ]
  },
  {
    "id": "q2",
    "question": "So we can get to know you better, tell us about your relationship status.",
    "statement": "",
    "screenType": "singleChoice",
    "options": [
      { "label": "Single", "next": "q4" },
      {
        "label": "In a relationship",
        "next": "q3"
      }
    ]
  }
]
```

### Key Fields
- `id`: A unique identifier for the question.
- `question`: The main question to display.
- `statement`: Additional context or information to display (optional).
- `screenType`: Defines the type of input. For example, `singleChoice` or `info` for information screens.
- `options`: An array of possible answers. Each option contains:
  - `label`: The answer text.
  - `next`: The ID of the next question or `null` if it is the last question.

### File Location
Save the configuration in a JSON file in this location `/src/config/survey.json`.