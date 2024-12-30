/*!
 * ${copyright}
 */
"use strict";

sap.ui.define(["sap/ui/core/Control", "./ExampleRenderer", "./library"], function (Control, __ExampleRenderer, ___library) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const ExampleRenderer = _interopRequireDefault(__ExampleRenderer);
  const ExampleColor = ___library["ExampleColor"];
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
   * @name sapui5in.controls.Example
   */
  const Example = Control.extend("sapui5in.controls.Example", {
    renderer: ExampleRenderer,
    metadata: {
      library: "sapui5in.controls",
      properties: {
        /**
         * The text to display.
         */
        text: {
          type: "string",
          group: "Data",
          defaultValue: null
        },
        /**
         * The color to use (default to "Default" color).
         */
        color: {
          type: "sapui5in.controls.ExampleColor",
          group: "Appearance",
          defaultValue: ExampleColor.Default
        }
      },
      events: {
        /**
         * Event is fired when the user clicks the control.
         */
        press: {}
      }
    },
    constructor: function _constructor(id, settings) {
      Control.prototype.constructor.call(this, id, settings);
      this.onclick = () => {
        this.firePress();
      };
    }
  });
  return Example;
});
//# sourceMappingURL=Example-dbg.js.map
