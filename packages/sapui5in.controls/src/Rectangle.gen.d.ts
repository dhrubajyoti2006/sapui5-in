import { CSSSize } from "sap/ui/core/library";
import { CSSColor } from "sap/ui/core/library";
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ControlSettings } from "sap/ui/core/Control";

declare module "./Rectangle" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $RectangleSettings extends $ControlSettings {
        width?: CSSSize | PropertyBindingInfo | `{${string}}`;
        height?: CSSSize | PropertyBindingInfo | `{${string}}`;
        color?: CSSColor | PropertyBindingInfo | `{${string}}`;
    }

    export default interface Rectangle {

        // property: width

        /**
         * Gets current value of property "width".
         *
         * Default value is: "100px"
         * @returns Value of property "width"
         */
        getWidth(): CSSSize;

        /**
         * Sets a new value for property "width".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: "100px"
         * @param [width="100px"] New value for property "width"
         * @returns Reference to "this" in order to allow method chaining
         */
        setWidth(width: CSSSize): this;

        // property: height

        /**
         * Gets current value of property "height".
         *
         * Default value is: "100px"
         * @returns Value of property "height"
         */
        getHeight(): CSSSize;

        /**
         * Sets a new value for property "height".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: "100px"
         * @param [height="100px"] New value for property "height"
         * @returns Reference to "this" in order to allow method chaining
         */
        setHeight(height: CSSSize): this;

        // property: color

        /**
         * Gets current value of property "color".
         *
         * Default value is: "blue"
         * @returns Value of property "color"
         */
        getColor(): CSSColor;

        /**
         * Sets a new value for property "color".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: "blue"
         * @param [color="blue"] New value for property "color"
         * @returns Reference to "this" in order to allow method chaining
         */
        setColor(color: CSSColor): this;
    }
}
