# Cypress Practice Repository

Welcome to the **Cypress Practice** repository! This project contains examples and exercises to help you learn and master Cypress, a modern JavaScript-based end-to-end testing framework.

## Repository Overview
This repository includes:
- Sample test scripts
- Configuration files
- Examples of API interception and stubbing
- Best practices for writing Cypress tests

## Prerequisites

Before running the tests, ensure you have the following installed on your system:

1. **Node.js** (LTS version recommended)
2. **npm** (comes with Node.js)

To check if these are installed:
```bash
node -v
npm -v
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/rahulsingh731/Cypress_practice.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Cypress_practice
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Open Cypress Test Runner:
   ```bash
   npx cypress open
   ```

## Project Structure

```
Cypress_practice/
├── cypress/
│   ├── fixtures/        # Mock data files
│   ├── integration/     # Test cases
│   ├── plugins/         # Custom plugin scripts
│   └── support/         # Reusable commands and configuration
├── node_modules/        # Dependencies (auto-generated)
├── cypress.json         # Cypress configuration file
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

## Writing Your First Test
To create your first test:
1. Navigate to the `cypress/integration` folder.
2. Create a new file, e.g., `first_test.spec.js`.
3. Add the following test:
   ```javascript
   describe('Example Test', () => {
       it('Visits the Cypress example site', () => {
           cy.visit('https://example.cypress.io');
           cy.contains('type').click();
           cy.url().should('include', '/commands/actions');
       });
   });
   ```
4. Run the test from the Cypress Test Runner.

## Running Tests

### Using Cypress Test Runner
1. Open Cypress:
   ```bash
   npx cypress open
   ```
2. Click on a test file in the Test Runner to execute it.

### Running Tests in Headless Mode
For CI/CD pipelines or faster execution, use:
```bash
npx cypress run
```

## Learn More
For detailed documentation and guides, visit the [Cypress Documentation](https://docs.cypress.io/).

## Contributing
Contributions are welcome! If you want to add more examples or improve the existing code:
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes and create a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

Happy Testing! 🚀
