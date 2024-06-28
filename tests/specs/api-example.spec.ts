import { test, expect } from '@playwright/test';
import { baseURL } from '../fixture/api/environments';
import { petCreate, petUpdate } from '../fixture/api/data';
import { petResponse } from 'tests/fixture/api/response';

test.describe('Pet Scenarios', () => {
  test.describe.serial('e2e', () => {
    const { petSchema } = petResponse;

    test('POST - 200', async ({ request }) => {
      const data = { ...petCreate };
      const response = await request.post(`${baseURL}/pet`, {
        data,
      });

      const body = await response.json();

      expect(response.status()).toBe(200);

      expect(body.id).toBe(10);
      expect(body).toBeValidSchema(petSchema);
    });

    test('PUT - 200', async ({ request }) => {
      const data = { ...petUpdate };
      const response = await request.put(`${baseURL}/pet`, {
        data,
      });

      const body = await response.json();

      expect(response.status()).toBe(200);

      expect(body.id).toBe(10);
      expect(body).toBeValidSchema(petSchema);
    });

    test('GET - 200', async ({ request }) => {
      const data = { ...petUpdate };
      const response = await request.get(`${baseURL}/pet/10`);

      const body = await response.json();

      expect(response.status()).toBe(200);

      expect(body.id).toBe(10);
      expect(body).toBeValidSchema(petSchema);
    });

    test('DELETE - 200', async ({ request }) => {
      const data = { ...petUpdate };
      const response = await request.delete(`${baseURL}/pet/10`);

      const body = await response.text();

      expect(response.status()).toBe(200);

      expect(body).toBe('Pet deleted');
    });
  });
});
