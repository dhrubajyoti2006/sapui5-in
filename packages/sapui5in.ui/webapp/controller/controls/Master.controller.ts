import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "./../BaseController";
import formatter from "sapui5in/ui/model/formatter";
import UIComponent from "sap/ui/core/UIComponent";
import StandardListItem from "sap/m/StandardListItem";
import {ListBase$ItemPressEvent, ListBase$SelectionChangeEvent} from "sap/m/ListBase";
import {Route$PatternMatchedEvent} from "sap/ui/core/routing/Route";

/**
 * @namespace sapui5in.ui.controller
 */
export default class Master extends BaseController {

	public onInit(): void {
		// apply content density mode to root view
		this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());

		this.setModel(new JSONModel(), "data");

		const oRouter = UIComponent.getRouterFor(this);

		// Attach handlers for the "controls" and "controls/{id}" routes
		oRouter.getRoute("controls").attachPatternMatched(this._onControlsMatched.bind(this));
		oRouter.getRoute("controlsDetails").attachPatternMatched(this._onControlsDetailsMatched.bind(this));
	}

	public _onControlsMatched(): void {
		(this.getModel("data") as JSONModel).setProperty("/selectedKey", "");
		(this.getModel("data") as JSONModel).setProperty("/controls", formatter.getControls());
	}

	public _onControlsDetailsMatched(oEvent: Route$PatternMatchedEvent): void {
		(this.getModel("data") as JSONModel).setProperty("/selectedKey", "");
		(this.getModel("data") as JSONModel).setProperty("/controls", formatter.getControls());

		const args = oEvent.getParameter("arguments");

		if (args.id) {
			(this.getModel("data") as JSONModel).setProperty("/selectedKey", args.id);

			const controls = (this.getModel("data") as JSONModel).getProperty("/controls");

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
	}

	public onItemSelectionChange(oEvent: ListBase$SelectionChangeEvent): void {
		const oItem = (oEvent.getParameter("listItem") as StandardListItem).getBindingContext("data").getObject();

		const oRouter = UIComponent.getRouterFor(this);

		// Navigate to the "controlsDetails" route
		oRouter.navTo("controlsDetails", {
			"id": oItem.id
		});
	}
}
