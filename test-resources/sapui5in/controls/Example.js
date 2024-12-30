"use strict";

sap.ui.define(["sapui5in/controls/library", "sapui5in/controls/Example"], function (__sapui5in_controls_library, __Example) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const ExampleColor = __sapui5in_controls_library["ExampleColor"];
  const Example = _interopRequireDefault(__Example); // create a new instance of the Example control and
  // place it into the DOM element with the id "content"
  new Example({
    text: "Example",
    color: ExampleColor.Highlight,
    press: event => {
      alert(event.getSource());
    }
  }).placeAt("content");
});
//# sourceMappingURL=Example.js.map