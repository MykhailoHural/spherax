// src/tests/iam.api.spec.ts
import { test, expect, type APIResponse } from '@playwright/test';

const API_URL = process.env.SPHERAX_API_URL;

test.describe('IAM Service API: Health Check', () => {

  test('GET /iam/health should return a successful health status', async ({ request }) => {

    let response: APIResponse;

    await test.step('send GET request to the health check endpoint', async () => {
      response = await request.get(`${API_URL}/iam/health`, {
        headers: {
          'x-api-version': '1',
        }
      });
    });

    await test.step('serify the response status and headers', async () => {
      expect(response.status()).toBe(200);
      expect(response.headers()['content-type']).toContain('application/json');
    });

    await test.step('verify the structure and content of the response body', async () => {
      const body = await response.json();

      expect(body.success).toBe(true);
      expect(body).toHaveProperty('meta');
      expect(body).toHaveProperty('data');

      expect(body.data.length).toBeGreaterThanOrEqual(1);

      const healthData = body.data[0];
      expect(healthData).toHaveProperty('service');
      expect(healthData).toHaveProperty('version', '1');
      expect(healthData).toHaveProperty('uptime');
      expect(typeof healthData.uptime).toBe('number');
    });
  });
});