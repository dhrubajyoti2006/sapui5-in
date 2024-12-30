/*!
 * ${copyright}
 */
"use strict";sap.ui.define(["sap/ui/core/Control","./ExampleRenderer","./library"],function(e,t,r){"use strict";function o(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const n=o(t);const s=r["ExampleColor"];const a=e.extend("sapui5in.controls.Example",{renderer:n,metadata:{library:"sapui5in.controls",properties:{text:{type:"string",group:"Data",defaultValue:null},color:{type:"sapui5in.controls.ExampleColor",group:"Appearance",defaultValue:s.Default}},events:{press:{}}},constructor:function t(r,o){e.prototype.constructor.call(this,r,o);this.onclick=()=>{this.firePress()}}});return a});
//# sourceMappingURL=Example.js.map