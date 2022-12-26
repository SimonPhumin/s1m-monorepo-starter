import { CommonUiMaterialModule } from './common-ui-material.module';

describe('CommonUiMaterialModule', () => {
	it('should work', () => {
		expect(new CommonUiMaterialModule()).toEqual(
			'common-ui-material.module'
		);
	});
});
