# WebDriverIO_Practise
Built an end-to-end automation framework using WebdriverIO with Mocha, Chai, and Allure reporting. Features include Page Object Model, cross-browser testing, CI/CD integration, and screenshot capture on failures. Ensures UI test reliability, maintainability, and fast feedback.

📌 WebdriverIO Automation Testing Project
This project demonstrates a robust end-to-end (E2E) test automation framework using WebdriverIO, a powerful Node.js-based testing utility for modern web applications. Designed with scalability, maintainability, and team collaboration in mind, this framework enables automated testing across multiple browsers and devices, ensuring consistent application quality and faster release cycles.

🔧 Key Features
WebdriverIO (v7+) for seamless browser automation using the WebDriver protocol.

Mocha test framework for organizing tests into suites and providing detailed reports.

Chai assertion library for readable, expressive validation.

Allure Reports for rich test reporting with screenshots, logs, and test step metadata.

Page Object Model (POM) design pattern to improve code reusability and maintainability.

Cross-browser testing support (Chrome, Firefox, Edge) for compatibility checks.

CI/CD Integration ready — supports execution in Jenkins, GitHub Actions, and other CI tools.

🧪 Testing Capabilities
Functional UI test coverage: login, form validation, navigation, search, and more.

Regression testing across app versions to catch UI or behavior discrepancies.

Headless browser testing for faster execution in CI environments.

Screenshot capturing on test failure to simplify debugging.

🚀 Technologies Used
JavaScript (ES6+)

WebdriverIO

Mocha + Chai

Allure Reporter

Node.js

Git/GitHub

Docker (optional)

Selenium Grid or cloud-based services (like BrowserStack or Sauce Labs)

🎯 Project Goals
Provide a reusable and extensible WebdriverIO test framework.

Ensure high test coverage with minimal flakiness.

Support easy onboarding for new QA or dev team members.

Enable early bug detection and faster feedback cycles during development.

This project reflects industry best practices for automation frameworks and is ideal for teams aiming to adopt test automation or scale existing efforts. Whether you're testing a responsive web app or integrating with CI pipelines, this WebdriverIO setup provides a solid foundation for quality assurance.
  
---

## 🏃 How to Run Tests

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run all tests:**
   ```sh
   npx wdio run ./wdio.conf.ts
   ```

3. **Run a specific test file:**
   ```sh
   npx wdio run ./wdio.conf.ts --spec ./test/specs/your-test-file.e2e.ts
   ```

4. **View Allure report (if enabled):**
   ```sh
   npx allure generate allure-results --clean && npx allure open
   ```

