import { test, expect } from '@playwright/test';
import { MortgageCalculator } from '../zillowPOM';
import { tests } from '../testdata.json';

tests.homeprice.forEach(({ title, value, error }) => {
  test(`Testing ${title}`, async ({ page }) => {
    const mtgclc = new MortgageCalculator(page);
    await mtgclc.goto();
    await mtgclc.editHomePrice(value)
    await mtgclc.editDownPayment('80000')
    if(error != "None"){
      await mtgclc.evaluateError(error)
    }
  });
})