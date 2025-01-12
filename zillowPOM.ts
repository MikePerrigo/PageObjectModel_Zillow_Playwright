import { expect, type Locator, type Page } from '@playwright/test';

export class MortgageCalculator {
    page: Page;
    homePrice: Locator;
    downPayment: Locator;
    downPaymentPercent: Locator;
    interestRate: Locator;
    homePriceError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homePrice = page.locator('input#homePrice');
        this.downPayment = page.locator('input#form-1_downPayment');
        this.downPaymentPercent = page.locator('input#form-1_downPaymentPercent');
        this.interestRate = page.locator('input#rate');
    }

    async goto() {
        await this.page.goto('/mortgage-calculator/')
    }

    async editHomePrice(homePrice) {
        await this.homePrice.fill(homePrice)
    }

    async editDownPayment(downPayment) {
        await this.downPayment.clear()
        await this.downPayment.fill(downPayment)
        await this.page.keyboard.press('Enter')
    }

    async evaluateError(error) {
        await expect(this.page.locator('p', { hasText: error})).toBeVisible()
    }
}