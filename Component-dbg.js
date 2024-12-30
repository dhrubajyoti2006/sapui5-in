"use strict";

sap.ui.define(["sap/ui/core/UIComponent", "./model/models"], function (UIComponent, __models) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const models = _interopRequireDefault(__models);
  /**
   * @namespace sapui5in.ui
   */
  const Component = UIComponent.extend("sapui5in.ui.Component", {
    metadata: {
      manifest: "json"
    },
    init: function _init() {
      // call the base component's init function
      UIComponent.prototype.init.call(this);

      // create the device model
      this.setModel(models.createDeviceModel(), "device");

      // create the views based on the url/hash
      this.getRouter().initialize();
    },
    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     * @public
     * @returns css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
     */
    getContentDensityClass: function _getContentDensityClass() {
      this.contentDensityClass = "sapUiSizeCompact";
      return this.contentDensityClass;
    }
  });
  return Component;
});
//# sourceMappingURL=Component-dbg.js.map
