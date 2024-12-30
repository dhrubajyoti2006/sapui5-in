export default {
	name: "QUnit test suite for the UI5 Application: sapui5in.ui",
	defaults: {
		page: "ui5://test-resources/sapui5in/ui/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		sinon: {
			version: 1
		},
		ui5: {
			language: "EN",
			theme: "sap_horizon"
		},
		coverage: {
			only: "sapui5in/ui/",
			never: "test-resources/sapui5in/ui/"
		},
		loader: {
			paths: {
				"sapui5in/ui": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for sapui5in.ui"
		},
		"integration/opaTests": {
			title: "Integration tests for sapui5in.ui"
		}
	}
};
