import UIComponent from "sap/ui/core/UIComponent";
import BaseController from "./../BaseController";

/**
 * @namespace sapui5in.ui.controller
 */
export default class Controls extends BaseController {

	public onInit(): void {
		const oRouter = UIComponent.getRouterFor(this);

		oRouter.getRoute("controls").attachPatternMatched(this._onControlsMatched.bind(this));
	}

	public _onControlsMatched(): void {
		console.log("onControlsMatched");
	}
}
