"use strict";

sap.ui.define([], function () {
  "use strict";

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
     * @param oRM
     * @param oControl
     */
    render: function (oRM, oControl) {
      oRM.openStart("div", oControl); // Start a <div> tag
      oRM.style("width", oControl.getWidth());
      oRM.style("height", oControl.getHeight());
      oRM.style("background-color", oControl.getColor());
      oRM.openEnd(); // Close the opening <div> tag
      oRM.close("div"); // End the <div> tag
    }
  };
  return __exports;
});
//# sourceMappingURL=RectangleRenderer-dbg.js.map
