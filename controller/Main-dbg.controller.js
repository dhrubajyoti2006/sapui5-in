"use strict";

sap.ui.define(["sap/ui/core/UIComponent", "./BaseController"], function (UIComponent, __BaseController) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace sapui5in.ui.controller
   */
  const Main = BaseController.extend("sapui5in.ui.controller.Main", {
    toControls: function _toControls() {
      const oRouter = UIComponent.getRouterFor(this);

      // Navigate to the "controls" route
      oRouter.navTo("controls");
    }
  });
  return Main;
});
//# sourceMappingURL=Main-dbg.controller.js.map
