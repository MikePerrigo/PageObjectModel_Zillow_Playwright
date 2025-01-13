import { expect, type Locator, type Page } from '@playwright/test';

export class MortgageCalculator {
    page: Page;
    homePrice: Locator;
    downPayment: Locator;
    downPaymentPercent: Locator;
    interestRate: Locator;
    homePriceSection: Locator;
    downPaymentSection: Locator;
    interestRateSection: Locator;

    constructor(page: Page) {
        this.page = page;
        // Identify all of the broad sections
        this.homePriceSection = page.locator('label#label_1', {hasText: "Home price"}).locator('..');
        this.downPaymentSection = page.locator('label#label_2', {hasText: "Down payment"}).locator('..');
        this.interestRateSection = page.locator('input#rate').locator('../..');

        // Identify input fields within the broad sections
        this.homePrice = this.homePriceSection.locator('input#homePrice');
        this.downPayment = this.downPaymentSection.locator('input#form-1_downPayment');
        this.downPaymentPercent = this.downPaymentSection.locator('input#form-1_downPaymentPercent');
        this.interestRate = this.interestRateSection.locator('input#rate');
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

    async editInterestRate(rate) {
        await this.interestRate.clear();
        await this.interestRate.fill(rate)
        await this.downPayment.click()
    }

    async homePriceError(error) {
        await expect(this.homePriceSection.locator('p', { hasText: error})).toBeVisible()
    }

    async downPaymentError(error) {
        await expect(this.downPaymentSection.locator('p', { hasText: error})).toBeVisible()
    }

    async interestRateError(error) {
        await expect(this.interestRateSection.locator('p', { hasText: error })).toBeVisible()
    }
}