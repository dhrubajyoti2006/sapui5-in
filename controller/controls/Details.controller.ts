import UIComponent from "sap/ui/core/UIComponent";
import BaseController from "./../BaseController";
import {Route$PatternMatchedEvent} from "sap/ui/core/routing/Route";
import JSONModel from "sap/ui/model/json/JSONModel";
import VBox from "sap/m/VBox";
import Control from "sap/ui/core/Control";

/**
 * @namespace sapui5in.ui.controller
 */
export default class Master extends BaseController {

	public onInit(): void {
		// apply content density mode to root view
		this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());

		const oRouter = UIComponent.getRouterFor(this);
		oRouter.getRoute("controls").attachPatternMatched(this._onControlsMatched.bind(this));
		oRouter.getRoute("controlsDetails").attachPatternMatched(this._onControlsDetailsMatched.bind(this));

		const bus = sap.ui.getCore().getEventBus();
		bus.subscribe("controlsChannel", "onControlSelection", this._onControlSelection.bind(this), this);

		this.setModel(new JSONModel(), "data");
	}

	public _onControlSelection(channel, eventId, args): void {
		(this.getModel("data") as JSONModel).setProperty("/selectedItem", args.selectedControl);
	}

	public async _onControlsDetailsMatched(oEvent: Route$PatternMatchedEvent) {
		const args = oEvent.getParameter("arguments");

		console.log(args.id);

		const oControl = (await this.createControlInstance(args.id.replaceAll(".", "/"))) as Control;

		(this.byId("idContent") as VBox).removeAllItems();
		(this.byId("idContent") as VBox).addItem(oControl);
	}

	public _onControlsMatched(): void {
		(this.getModel("data") as JSONModel).setProperty("/selectedItem", {});
	}

	public createControlInstance<T>(sModulePath: string): Promise<T> {
		return new Promise((resolve, reject) => {
			sap.ui.require([sModulePath], (ControlClass: { new(): T }) => {
				if (ControlClass) {
					try {
						const oInstance = new ControlClass();
						resolve(oInstance);
					} catch (error) {
						reject(new Error(`Failed to create an instance of ${sModulePath}: ${(error as Error).message}`));
					}
				} else {
					reject(new Error(`Module ${sModulePath} could not be loaded.`));
				}
			}, (error: Error) => {
				reject(new Error(`Error requiring module ${sModulePath}: ${error.message}`));
			});
		});
	}

}
