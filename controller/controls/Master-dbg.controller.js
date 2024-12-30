"use strict";

sap.ui.define(["sap/ui/model/json/JSONModel", "./../BaseController", "sapui5in/ui/model/formatter", "sap/ui/core/UIComponent"], function (JSONModel, __BaseController, __formatter, UIComponent) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  const formatter = _interopRequireDefault(__formatter);
  /**
   * @namespace sapui5in.ui.controller
   */
  const Master = BaseController.extend("sapui5in.ui.controller.Master", {
    onInit: function _onInit() {
      // apply content density mode to root view
      this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
      this.setModel(new JSONModel(), "data");
      const oRouter = UIComponent.getRouterFor(this);

      // Attach handlers for the "controls" and "controls/{id}" routes
      oRouter.getRoute("controls").attachPatternMatched(this._onControlsMatched.bind(this));
      oRouter.getRoute("controlsDetails").attachPatternMatched(this._onControlsDetailsMatched.bind(this));
    },
    _onControlsMatched: function _onControlsMatched() {
      this.getModel("data").setProperty("/selectedKey", "");
      this.getModel("data").setProperty("/controls", formatter.getControls());
    },
    _onControlsDetailsMatched: function _onControlsDetailsMatched(oEvent) {
      this.getModel("data").setProperty("/selectedKey", "");
      this.getModel("data").setProperty("/controls", formatter.getControls());
      const args = oEvent.getParameter("arguments");
      if (args.id) {
        this.getModel("data").setProperty("/selectedKey", args.id);
        const controls = this.getModel("data").getProperty("/controls");
        controls.forEach(control => {
          if (control.id === args.id) {
            const oEventBus = sap.ui.getCore().getEventBus();
            // Publish an event
            oEventBus.publish("controlsChannel", "onControlSelection", {
              selectedControl: control
            });
          }
        });
      }
    },
    onItemSelectionChange: function _onItemSelectionChange(oEvent) {
      const oItem = oEvent.getParameter("listItem").getBindingContext("data").getObject();
      const oRouter = UIComponent.getRouterFor(this);

      // Navigate to the "controlsDetails" route
      oRouter.navTo("controlsDetails", {
        "id": oItem.id
      });
    }
  });
  return Master;
});
//# sourceMappingURL=Master-dbg.controller.js.map
