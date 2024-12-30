/*!
 * ${copyright}
 */
"use strict";

sap.ui.define(["sap/ui/core/Lib", "./library"], function (Lib, ___library) {
  "use strict";

  const ExampleColor = ___library["ExampleColor"];
  /**
   * Example renderer.
   * @namespace
   */
  var __exports = {
    apiVersion: 2,
    // usage of DOM Patcher

    /**
     * Renders the HTML for the given control, using the provided {@link RenderManager}.
     *
     * @param rm The reference to the <code>sap.ui.core.RenderManager</code>
     * @param control The control instance to be rendered
     */
    render: function (rm, control) {
      const i18n = Lib.getResourceBundleFor("sapui5in.controls");
      rm.openStart("div", control);
      if (control.getColor() === ExampleColor.Highlight) {
        rm.class("myLibPrefixExampleHighlight");
      } else {
        rm.class("myLibPrefixExample");
      }
      rm.openEnd();
      rm.text(`${i18n.getText("ANY_TEXT")}: ${control.getText()}`);
      rm.close("div");
    }
  };
  return __exports;
});
//# sourceMappingURL=ExampleRenderer-dbg.js.map
