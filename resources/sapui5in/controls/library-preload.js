//@ui5-bundle sapui5in/controls/library-preload.js
sap.ui.require.preload({
	"sapui5in/controls/Example.js":function(){
/*!
 * ${copyright}
 */
"use strict";sap.ui.define(["sap/ui/core/Control","./ExampleRenderer","./library"],function(e,t,r){"use strict";function o(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const n=o(t);const s=r["ExampleColor"];const a=e.extend("sapui5in.controls.Example",{renderer:n,metadata:{library:"sapui5in.controls",properties:{text:{type:"string",group:"Data",defaultValue:null},color:{type:"sapui5in.controls.ExampleColor",group:"Appearance",defaultValue:s.Default}},events:{press:{}}},constructor:function t(r,o){e.prototype.constructor.call(this,r,o);this.onclick=()=>{this.firePress()}}});return a});
},
	"sapui5in/controls/ExampleRenderer.js":function(){
/*!
 * ${copyright}
 */
"use strict";sap.ui.define(["sap/ui/core/Lib","./library"],function(e,i){"use strict";const t=i["ExampleColor"];var r={apiVersion:2,render:function(i,r){const s=e.getResourceBundleFor("sapui5in.controls");i.openStart("div",r);if(r.getColor()===t.Highlight){i.class("myLibPrefixExampleHighlight")}else{i.class("myLibPrefixExample")}i.openEnd();i.text(`${s.getText("ANY_TEXT")}: ${r.getText()}`);i.close("div")}};return r});
},
	"sapui5in/controls/Rectangle.js":function(){
/*!
 * ${copyright}
 */
"use strict";sap.ui.define(["sap/ui/core/Control","sapui5in/controls/RectangleRenderer"],function(e,t){"use strict";function o(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const r=o(t);const u=e.extend("sapui5in.controls.Rectangle",{renderer:r,metadata:{library:"sapui5in.controls",properties:{width:{type:"sap.ui.core.CSSSize",defaultValue:"100px"},height:{type:"sap.ui.core.CSSSize",defaultValue:"100px"},color:{type:"sap.ui.core.CSSColor",defaultValue:"blue"}}},constructor:function t(o,r){e.prototype.constructor.call(this,o,r)}});return u});
},
	"sapui5in/controls/RectangleRenderer.js":function(){
"use strict";sap.ui.define([],function(){"use strict";var e={apiVersion:2,render:function(e,t){e.openStart("div",t);e.style("width",t.getWidth());e.style("height",t.getHeight());e.style("background-color",t.getColor());e.openEnd();e.close("div")}};return e});
},
	"sapui5in/controls/library.js":function(){
/*!
 * ${copyright}
 */
"use strict";sap.ui.define(["sap/ui/core/Lib","sap/ui/core/library"],function(e,i){"use strict";const n=e.init({name:"sapui5in.controls",version:"1.0.0",dependencies:["sap.ui.core"],types:["sapui5in.controls.ExampleColor"],interfaces:[],controls:["sapui5in.controls.Example","sapui5in.controls.Rectangle"],elements:[],noLibraryCSS:false});var s=function(e){e["Default"]="Default";e["Highlight"]="Highlight";return e}(s||{});n.ExampleColor=s;return n});
},
	"sapui5in/controls/manifest.json":'{"_version":"1.21.0","sap.app":{"id":"sapui5in.controls","type":"library","embeds":[],"applicationVersion":{"version":"1.0.0"},"title":"sapui5in.controls","description":"Some description about sapui5in.controls","resources":"resources.json","offline":true},"sap.ui":{"technology":"UI5","supportedThemes":["base","sap_fiori_3","sap_fiori_3_dark","sap_fiori_3_hcb","sap_fiori_3_hcw","sap_horizon","sap_horizon_dark","sap_horizon_hcb","sap_horizon_hcw"]},"sap.ui5":{"dependencies":{"minUI5Version":"1.131","libs":{"sap.ui.core":{"minVersion":"1.131.1"}}},"library":{"i18n":{"bundleUrl":"messagebundle.properties","supportedLocales":["","de","en"]},"content":{"controls":["sapui5in.controls.Example","sapui5in.controls.Rectangle"],"elements":[],"types":["sapui5in.controls.ExampleColor"],"interfaces":[]}}}}'
});
//# sourceMappingURL=library-preload.js.map
