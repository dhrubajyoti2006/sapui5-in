/*!
 * ${copyright}
 */
"use strict";sap.ui.define(["sap/ui/core/Lib","./library"],function(e,i){"use strict";const t=i["ExampleColor"];var r={apiVersion:2,render:function(i,r){const s=e.getResourceBundleFor("sapui5in.controls");i.openStart("div",r);if(r.getColor()===t.Highlight){i.class("myLibPrefixExampleHighlight")}else{i.class("myLibPrefixExample")}i.openEnd();i.text(`${s.getText("ANY_TEXT")}: ${r.getText()}`);i.close("div")}};return r});
//# sourceMappingURL=ExampleRenderer.js.map