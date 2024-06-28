import { test, expect } from '@playwright/test';
import { Page } from 'playwright';

export class Methods {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.google.com.br/');
  }
  async searchFacebookPage(typeSearch: string) {
    const selectField = '[id=APjFqb]';

    try {
      await this.page.click(selectField);
      await this.page.fill(selectField, typeSearch);
      await this.page.press(selectField, 'Enter');
    } catch (error) {
      console.error(`Error filling the search field: ${error.message}`);
      throw error;
    }
  }

  async validateMetaDescription(expectedDescription: string) {
    const descriptionSelector = 'div[data-attrid="description"] span';

    try {
      const description = await this.page.textContent(descriptionSelector);
      expect(description).toContain(expectedDescription);
    } catch (error) {
      console.error(`Error validating the meta description: ${error.message}`);
      throw error;
    }
  }
}
