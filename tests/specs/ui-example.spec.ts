import { test, expect } from '@playwright/test';
import { Methods } from 'tests/fixture/ui/methods';


test.describe('e2e', () => {
  test.describe.serial('Google Search', () => {

    test('Access Facebook sign-up screen', async ({ page }) => {
      const methods = new Methods(page);

      await methods.navigate();
      await expect(page).toHaveTitle('Google')

      await methods.searchFacebookPage("Facebook");

      // Translation of the validation text: Meta Platforms, Inc. is an American technology and social media conglomerate based in Menlo Park, California.
      await methods.validateMetaDescription("Meta Platforms, Inc. é um conglomerado estadunidense de tecnologia e mídia social com sede em Menlo Park, Califórnia.");
    });
  });
});