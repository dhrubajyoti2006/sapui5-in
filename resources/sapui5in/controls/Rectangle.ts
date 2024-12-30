/*!
 * ${copyright}
 */
import Control from "sap/ui/core/Control";
import type {MetadataOptions} from "sap/ui/core/Element";
import RectangleRenderer from "sapui5in/controls/RectangleRenderer";

/**
 * Constructor for a new <code>sapui5in.controls.Example</code> control.
 *
 * Some class description goes here.
 * @extends Control
 *
 * @author Dhrubajyoti Rakshit
 * @version 1.0.0
 *
 * @constructor
 * @public
 * @name sapui5in.controls.Rectangle
 */
export default class Rectangle extends Control {
// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures

	constructor(idOrSettings?: string | $RectangleSettings);
	constructor(id?: string, settings?: $RectangleSettings);
	constructor(id?: string, settings?: $RectangleSettings) {
		super(id, settings);
	}

	static readonly metadata: MetadataOptions = {
		library: "sapui5in.controls",
		properties: {
			width: {type: "sap.ui.core.CSSSize", defaultValue: "100px"},
			height: {type: "sap.ui.core.CSSSize", defaultValue: "100px"},
			color: {type: "sap.ui.core.CSSColor", defaultValue: "blue"}
		}
	};

	static renderer: typeof RectangleRenderer = RectangleRenderer;
}
