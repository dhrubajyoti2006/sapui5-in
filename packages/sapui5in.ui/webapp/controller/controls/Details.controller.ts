import UIComponent from "sap/ui/core/UIComponent";
import BaseController from "./../BaseController";
import {Route$PatternMatchedEvent} from "sap/ui/core/routing/Route";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace sapui5in.ui.controller
 */
export default class Master extends BaseController {

	public onInit(): void {
		// apply content density mode to root view
		this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());

		const oRouter = UIComponent.getRouterFor(this);
		oRouter.getRoute("controlsDetails").attachPatternMatched(this._onControlsDetailsMatched.bind(this));

		const bus = sap.ui.getCore().getEventBus();
		bus.subscribe("controlsChannel", "onControlSelection", this._onControlSelection.bind(this), this);

		this.setModel(new JSONModel(), "data");
	}

	public _onControlSelection(channel, eventId, args): void {
		(this.getModel("data") as JSONModel).setProperty("/selectedItem", args.selectedControl);
	}

	public _onControlsDetailsMatched(oEvent: Route$PatternMatchedEvent): void {
		const args = oEvent.getParameter("arguments");

		console.log(args.id);
	}
}
