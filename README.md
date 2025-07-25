# Severest Automation

Severest Automation is a project containing end-to-end (E2E) tests for the **Serverest** API and frontend application. The tests are written in **Cypress**, covering both API and UI interactions.

##  🧩 Features
- E2E testing with **Cypress**.
- API tests for user registration and more.
- HTML and JSON reports with **Mochawesome**.

##  🛠️ Technologies
- **Cypress**: End-to-end testing framework.
- **Mochawesome**: Reporter for generating readable test reports.
- **JavaScript**: Language used for writing tests.

## 🚀 Getting Started

Follow these steps to set up the project and run the tests:

### Prerequisites
Make sure you have **Node.js** installed. You can download it from [here](https://nodejs.org/).

### Installation

1. Clone the repository:
 
```bash
   git clone https://github.com/assiriamenezes/severest-automation.git
   cd severest-automation
```
2. Install the dependencies:
   
```bash
  npm install
```
3. Install Cypress (if not included in package.json):

```bash
   npm install cypress --save-dev
```
4. Check if Cypress was installed correctly:

```bash
   npx cypress --version
```

5. Open Cypress for the first time (to generate the initial folder structure):

```bash
  npx cypress open
```
6. Install Mochawesome to generate reports:

```bash
  npm install --save-dev mochawesome
```

### Project Structure

After installation, the project structure will look like this:

![image](https://github.com/user-attachments/assets/17ccc8df-179f-4a02-8c22-add6885e16cf)

## 🧪 Running the tests

- Interactive Mode:
  
To run the tests in interactive mode (with a graphical interface), use the command:

```bash
cd project
npx cypress open
```

- Headless Mode:

To run the tests in headless mode (without a graphical interface), use the command:

```bash
cd project
npx cypress run
```
The test results will be displayed on the terminal.

## 📊 Test Report

Test reports are automatically generated using the Mochawesome plugin. They are saved in the cypress/reports folder.

- HTML report: cypress/reports/mochawesome.html

- JSON report: cypress/reports/mochawesome.json

To view the HTML report, open the mochawesome.html file in your browser.

## 🧩 Test Scenarios
- Frontend Testing (E2E):
  
**Login (login.cy.js)**: Checks the login flow with valid and invalid credentials.

**Register (register.cy.js)**: Checks the registration flow of new users.


- API Tests:
  
**POST /login (login.cy.js)**: Tests the login endpoint with different scenarios.

**POST /usuarios (register.cy.js)**: Tests the user registration endpoint.


*For more details, see the test files in the cypress/tests/e2e and cypress/tests/api folder.*

## 📧 Contact
If you have questions or suggestions, please contact:

Assíria Menezes

- GitHub: @assiriamenezes

- Email: assiriasmenezes@gmail.com
