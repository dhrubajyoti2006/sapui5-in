"use strict";

sap.ui.define(["sap/ui/core/UIComponent", "./../BaseController"], function (UIComponent, __BaseController) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace sapui5in.ui.controller
   */
  const Controls = BaseController.extend("sapui5in.ui.controller.Controls", {
    onInit: function _onInit() {
      const oRouter = UIComponent.getRouterFor(this);
      oRouter.getRoute("controls").attachPatternMatched(this._onControlsMatched.bind(this));
    },
    _onControlsMatched: function _onControlsMatched() {
      console.log("onControlsMatched");
    }
  });
  return Controls;
});
//# sourceMappingURL=Controls-dbg.controller.js.map
