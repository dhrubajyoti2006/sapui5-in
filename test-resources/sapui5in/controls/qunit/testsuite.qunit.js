"use strict";

sap.ui.define([], function () {
  "use strict";

  var __exports = {
    name: "QUnit TestSuite for sapui5in.controls",
    defaults: {
      ui5: {
        libs: ["sap.ui.core", "sapui5in.controls"],
        theme: "sap_horizon"
      },
      qunit: {
        version: 2,
        reorder: false
      },
      sinon: {
        version: 4,
        qunitBridge: true,
        useFakeTimers: false
      }
    },
    tests: {
      // test file for the Example control
      Example: {
        title: "QUnit Test for Example",
        _alternativeTitle: "QUnit tests: sapui5in.controls.Example"
      }
    }
  };
  return __exports;
});
//# sourceMappingURL=testsuite.qunit.js.map