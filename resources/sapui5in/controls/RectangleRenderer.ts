import RenderManager from "sap/ui/core/RenderManager";
import Rectangle from "sapui5in/controls/Rectangle";

/**
 * Example renderer.
 * @namespace
 */
export default {
	apiVersion: 2, // usage of DOM Patcher

	/**
	 * Renders the HTML for the given control, using the provided {@link RenderManager}.
	 *
	 * @param oRM
	 * @param oControl
	 */
	render: function (oRM: RenderManager, oControl: Rectangle) {
		oRM.openStart("div", oControl); // Start a <div> tag
		oRM.style("width", oControl.getWidth());
		oRM.style("height", oControl.getHeight());
		oRM.style("background-color", oControl.getColor());
		oRM.openEnd(); // Close the opening <div> tag
		oRM.close("div"); // End the <div> tag
	}
};
