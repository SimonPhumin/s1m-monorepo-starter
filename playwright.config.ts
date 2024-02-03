import { devices, PlaywrightTestConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import { nxE2EPreset } from '@nx/playwright/preset';

// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env['BASE_URL'] || 'http://localhost:4200';

const testDir = defineBddConfig({
  paths: ['./src/features/*.feature'],
  require: ['./src/steps/*.ts'],
});

const baseConfig: PlaywrightTestConfig = {
	...nxE2EPreset(__filename, { testDir }),
	use: {
		screenshot: 'only-on-failure',
		ignoreHTTPSErrors: true,
		baseURL,
		headless: true,
		testIdAttribute: 'data-test-id'
	},
	projects: [
		{ name: 'desktop-chrome', use: { ...devices['Desktop Chrome'] } },
		{
			name: 'desktop-webkit',
			use: { ...devices['Desktop Safari'], deviceScaleFactor: 1 }
		},
		{
			name: 'iphone-11-chrome',
			use: {
				...devices['iPhone 11'],
				browserName: 'chromium',
				defaultBrowserType: 'chromium'
			}
		},
		{
			name: 'iphone-11-webkit',
			use: { ...devices['iPhone 11'] }
		}
	],
	outputDir: 'test-reports/visual-regression',
	workers: 3,
	testMatch: /.*vr-spec.ts/
};
export default baseConfig;
