import * as Joi from 'joi';
import 'dotenv/config';
import { defineConfig, devices, expect } from '@playwright/test';

/**
 * Playwright extensions.
 */
expect.extend({
  toBeValidSchema(data: any, schema: Joi.AnySchema) {
    const { error } = schema.validate(data);

    if (error) {
      return {
        message: () => `${error}`,  
        pass: false,               
      };
    }

    return {
      message: () => 'passed',
      pass: true,                
    };
  },
});

export default defineConfig({
  testDir: './tests',
  testMatch: '*spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    headless: true,
  },
  projects: [
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        headless: false,
      },
    },
  ],
  expect: {
    timeout: 5000,
  },
});