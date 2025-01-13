# PageObjectModel_Zillow_Playwright
Page Object Model of the Zillow Mortgage Calculator in Playwright

# Page Object Model format
Illustrating a different approach from the Cypress repository testing the same functionality. Page Object Model is great for large applications that have a lot of redundancy in testing. Constructing a page in terms of locators and functions makes both identification and action more reusable. 

# Installation
After cloning the repository, to install all dependencies:
```
  npm install
```

# Running Playwright
From the base level of the repository:

To run all tests:
```
npx playwright test
```

To open the test runner
```
npx playwright test --ui
```
