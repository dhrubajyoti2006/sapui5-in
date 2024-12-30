"use strict";

sap.ui.define(["sap/ui/core/UIComponent", "./../BaseController", "sap/ui/model/json/JSONModel"], function (UIComponent, __BaseController, JSONModel) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace sapui5in.ui.controller
   */
  const Master = BaseController.extend("sapui5in.ui.controller.Master", {
    onInit: function _onInit() {
      // apply content density mode to root view
      this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
      const oRouter = UIComponent.getRouterFor(this);
      oRouter.getRoute("controls").attachPatternMatched(this._onControlsMatched.bind(this));
      oRouter.getRoute("controlsDetails").attachPatternMatched(this._onControlsDetailsMatched.bind(this));
      const bus = sap.ui.getCore().getEventBus();
      bus.subscribe("controlsChannel", "onControlSelection", this._onControlSelection.bind(this), this);
      this.setModel(new JSONModel(), "data");
    },
    _onControlSelection: function _onControlSelection(channel, eventId, args) {
      this.getModel("data").setProperty("/selectedItem", args.selectedControl);
    },
    _onControlsDetailsMatched: async function _onControlsDetailsMatched(oEvent) {
      const args = oEvent.getParameter("arguments");
      console.log(args.id);
      const oControl = await this.createControlInstance(args.id.replaceAll(".", "/"));
      this.byId("idContent").removeAllItems();
      this.byId("idContent").addItem(oControl);
    },
    _onControlsMatched: function _onControlsMatched() {
      this.getModel("data").setProperty("/selectedItem", {});
    },
    createControlInstance: function _createControlInstance(sModulePath) {
      return new Promise((resolve, reject) => {
        sap.ui.require([sModulePath], ControlClass => {
          if (ControlClass) {
            try {
              const oInstance = new ControlClass();
              resolve(oInstance);
            } catch (error) {
              reject(new Error(`Failed to create an instance of ${sModulePath}: ${error.message}`));
            }
          } else {
            reject(new Error(`Module ${sModulePath} could not be loaded.`));
          }
        }, error => {
          reject(new Error(`Error requiring module ${sModulePath}: ${error.message}`));
        });
      });
    }
  });
  return Master;
});
//# sourceMappingURL=Details-dbg.controller.js.map
