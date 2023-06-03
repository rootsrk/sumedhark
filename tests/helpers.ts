import type { APIResponse, Page } from "@playwright/test";
import { test as base } from "@playwright/test";

import { HttpStatusCodes } from "../app/types/HttpStatusCodes";

/** mocks a server response, sends a 200 response code when no status is code is passed in  */
export async function mockResponse({
  page,
  endpoint,
  data,
  status = HttpStatusCodes.Ok,
}: {
  page: Page;
  endpoint: string;
  data?: Record<string, unknown>;
  status?: number;
}) {
  let response:
    | {
        body?: string | Buffer | undefined;
        contentType?: string | undefined;
        headers?: { [key: string]: string } | undefined;
        json?: any;
        path?: string | undefined;
        /** mocks a server response, sends a 200 response code when no status is code is passed in  */
        /** mocks a server response, sends a 200 response code when no status is code is passed in  */
        response?: APIResponse | undefined;
        status?: number | undefined;
      }
    | undefined;
  if (data) {
    response = { status, body: JSON.stringify(data) };
  } else {
    response = { status };
  }
  await page.route(`**${endpoint}`, async (route) => route.fulfill(response));
}

export const onboardingTest = base.extend<{}>({});
