import UIComponent from "sap/ui/core/UIComponent";
import BaseController from "./BaseController";

/**
 * @namespace sapui5in.ui.controller
 */
export default class Main extends BaseController {

	public toControls(): void {
		const oRouter = UIComponent.getRouterFor(this);

		// Navigate to the "controls" route
		oRouter.navTo("controls");
	}
}
