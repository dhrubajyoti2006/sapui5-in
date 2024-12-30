/*!
 * ${copyright}
 */
"use strict";

sap.ui.define(["sap/ui/core/Control", "sapui5in/controls/RectangleRenderer"], function (Control, __RectangleRenderer) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const RectangleRenderer = _interopRequireDefault(__RectangleRenderer);
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
  const Rectangle = Control.extend("sapui5in.controls.Rectangle", {
    renderer: RectangleRenderer,
    metadata: {
      library: "sapui5in.controls",
      properties: {
        width: {
          type: "sap.ui.core.CSSSize",
          defaultValue: "100px"
        },
        height: {
          type: "sap.ui.core.CSSSize",
          defaultValue: "100px"
        },
        color: {
          type: "sap.ui.core.CSSColor",
          defaultValue: "blue"
        }
      }
    },
    constructor: function _constructor(id, settings) {
      Control.prototype.constructor.call(this, id, settings);
    }
  });
  return Rectangle;
});
//# sourceMappingURL=Rectangle-dbg.js.map
