import { test, expect } from '@playwright/test';
import { MortgageCalculator } from '../zillowPOM';
import { tests } from '../testdata.json';

tests.homeprice.forEach(({ title, value, error }) => {
  test(`Testing ${title}`, async ({ page }) => {
    const mtgclc = new MortgageCalculator(page);
    await mtgclc.goto();
    await mtgclc.editHomePrice(value)
    await mtgclc.editDownPayment('80000')

    // If there is an expected error present in the dataset, validate the error message.
    if(error != "None"){
      await mtgclc.homePriceError(error)
    }
  });
});
tests.down_payment.forEach(({ title, value, error }) => {
    test(`Testing ${title}`, async ({ page }) => {
        const mtgclc = new MortgageCalculator(page);
        await mtgclc.goto();
        await mtgclc.editDownPayment(value)
        await mtgclc.editHomePrice('300000')

        if(error != "None"){
            await mtgclc.downPaymentError(error)
          }
    });
});
tests.interest_rate.forEach(({ title, value, error }) => {
    test(`Testing ${title}`, async ({ page }) => {
        const mtgclc = new MortgageCalculator(page);
        await mtgclc.goto();
        await mtgclc.editInterestRate(value)

        if(error != "None"){
            await mtgclc.interestRateError(error)
          }
        else if(error = "None"){
            expect(mtgclc.interestRate).toHaveValue(value)
        }
    })
});