/*!
 * ${copyright}
 */
"use strict";

sap.ui.define(["sap/ui/core/Lib", "sap/ui/core/library"], function (Lib, sap_ui_core_library) {
  "use strict";

  /**
   * Initialization Code and shared classes of library sapui5in.controls.
   */

  // delegate further initialization of this library to the Core
  const thisLib = Lib.init({
    name: "sapui5in.controls",
    version: "1.0.0",
    dependencies: [
    // keep in sync with the ui5.yaml and .library files
    "sap.ui.core"],
    types: ["sapui5in.controls.ExampleColor"],
    interfaces: [],
    controls: ["sapui5in.controls.Example", "sapui5in.controls.Rectangle"],
    elements: [],
    noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
  });

  /**
   * Semantic Colors of the com.myorg.myUI5Library.Example control.
   *
   * @enum {string}
   * @public
   */
  var ExampleColor = /*#__PURE__*/function (ExampleColor) {
    ExampleColor["Default"] = "Default";
    ExampleColor["Highlight"] = "Highlight";
    return ExampleColor;
  }(ExampleColor || {}); // FIXME: this line is planned to become obsolete and may need to be removed later
  thisLib.ExampleColor = ExampleColor; // add the enum to the library; this is important because UI5 otherwise cannot identify the type and will skip type checking for properties of this type

  // export the library namespace
  return thisLib;
});
//# sourceMappingURL=library-dbg.js.map
