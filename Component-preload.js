//@ui5-bundle sapui5in/ui/Component-preload.js
sap.ui.require.preload({
	"sapui5in/ui/Component.js":function(){
"use strict";sap.ui.define(["sap/ui/core/UIComponent","./model/models"],function(t,e){"use strict";function n(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const i=n(e);const s=t.extend("sapui5in.ui.Component",{metadata:{manifest:"json"},init:function e(){t.prototype.init.call(this);this.setModel(i.createDeviceModel(),"device");this.getRouter().initialize()},getContentDensityClass:function t(){this.contentDensityClass="sapUiSizeCompact";return this.contentDensityClass}});return s});
},
	"sapui5in/ui/controller/App.controller.js":function(){
"use strict";sap.ui.define(["./BaseController"],function(t){"use strict";function e(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const n=e(t);const s=n.extend("sapui5in.ui.controller.App",{onInit:function t(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())}});return s});
},
	"sapui5in/ui/controller/BaseController.js":function(){
"use strict";sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent","sap/ui/core/routing/History"],function(e,t,n){"use strict";const o=e.extend("sapui5in.ui.controller.BaseController",{getOwnerComponent:function t(){return e.prototype.getOwnerComponent.call(this)},getRouter:function e(){return t.getRouterFor(this)},getResourceBundle:function e(){const t=this.getOwnerComponent().getModel("i18n");return t.getResourceBundle()},getModel:function e(t){return this.getView().getModel(t)},setModel:function e(t,n){this.getView().setModel(t,n);return this},navTo:function e(t,n,o){this.getRouter().navTo(t,n,undefined,o)},onNavBack:function e(){const t=n.getInstance().getPreviousHash();if(t!==undefined){window.history.go(-1)}else{this.getRouter().navTo("main",{},undefined,true)}}});return o});
},
	"sapui5in/ui/controller/Main.controller.js":function(){
"use strict";sap.ui.define(["sap/ui/core/UIComponent","./BaseController"],function(t,n){"use strict";function o(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const e=o(n);const u=e.extend("sapui5in.ui.controller.Main",{toControls:function n(){const o=t.getRouterFor(this);o.navTo("controls")}});return u});
},
	"sapui5in/ui/controller/controls/Controls.controller.js":function(){
"use strict";sap.ui.define(["sap/ui/core/UIComponent","./../BaseController"],function(t,o){"use strict";function n(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const e=n(o);const s=e.extend("sapui5in.ui.controller.Controls",{onInit:function o(){const n=t.getRouterFor(this);n.getRoute("controls").attachPatternMatched(this._onControlsMatched.bind(this))},_onControlsMatched:function t(){console.log("onControlsMatched")}});return s});
},
	"sapui5in/ui/controller/controls/Details.controller.js":function(){
"use strict";sap.ui.define(["sap/ui/core/UIComponent","./../BaseController","sap/ui/model/json/JSONModel"],function(t,e,n){"use strict";function o(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const s=o(e);const r=s.extend("sapui5in.ui.controller.Master",{onInit:function e(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());const o=t.getRouterFor(this);o.getRoute("controls").attachPatternMatched(this._onControlsMatched.bind(this));o.getRoute("controlsDetails").attachPatternMatched(this._onControlsDetailsMatched.bind(this));const s=sap.ui.getCore().getEventBus();s.subscribe("controlsChannel","onControlSelection",this._onControlSelection.bind(this),this);this.setModel(new n,"data")},_onControlSelection:function t(e,n,o){this.getModel("data").setProperty("/selectedItem",o.selectedControl)},_onControlsDetailsMatched:async function t(e){const n=e.getParameter("arguments");console.log(n.id);const o=await this.createControlInstance(n.id.replaceAll(".","/"));this.byId("idContent").removeAllItems();this.byId("idContent").addItem(o)},_onControlsMatched:function t(){this.getModel("data").setProperty("/selectedItem",{})},createControlInstance:function t(e){return new Promise((t,n)=>{sap.ui.require([e],o=>{if(o){try{const e=new o;t(e)}catch(t){n(new Error(`Failed to create an instance of ${e}: ${t.message}`))}}else{n(new Error(`Module ${e} could not be loaded.`))}},t=>{n(new Error(`Error requiring module ${e}: ${t.message}`))})})}});return r});
},
	"sapui5in/ui/controller/controls/Master.controller.js":function(){
"use strict";sap.ui.define(["sap/ui/model/json/JSONModel","./../BaseController","sapui5in/ui/model/formatter","sap/ui/core/UIComponent"],function(t,e,o,n){"use strict";function s(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const i=s(e);const a=s(o);const r=i.extend("sapui5in.ui.controller.Master",{onInit:function e(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());this.setModel(new t,"data");const o=n.getRouterFor(this);o.getRoute("controls").attachPatternMatched(this._onControlsMatched.bind(this));o.getRoute("controlsDetails").attachPatternMatched(this._onControlsDetailsMatched.bind(this))},_onControlsMatched:function t(){this.getModel("data").setProperty("/selectedKey","");this.getModel("data").setProperty("/controls",a.getControls())},_onControlsDetailsMatched:function t(e){this.getModel("data").setProperty("/selectedKey","");this.getModel("data").setProperty("/controls",a.getControls());const o=e.getParameter("arguments");if(o.id){this.getModel("data").setProperty("/selectedKey",o.id);const t=this.getModel("data").getProperty("/controls");t.forEach(t=>{if(t.id===o.id){const e=sap.ui.getCore().getEventBus();e.publish("controlsChannel","onControlSelection",{selectedControl:t})}})}},onItemSelectionChange:function t(e){const o=e.getParameter("listItem").getBindingContext("data").getObject();const s=n.getRouterFor(this);s.navTo("controlsDetails",{id:o.id})}});return r});
},
	"sapui5in/ui/i18n/i18n.properties":'appTitle=sapui5in.ui\nappDescription=UI5 Application sapui5in.ui\nbtnText=Say Hello\n',
	"sapui5in/ui/i18n/i18n_de.properties":'appTitle=sapui5in.ui\nappDescription=UI5 Application sapui5in.ui\nbtnText=Sag Hallo\n',
	"sapui5in/ui/i18n/i18n_en.properties":'appTitle=sapui5in.ui\nappDescription=UI5 Application sapui5in.ui\nbtnText=Say Hello\n',
	"sapui5in/ui/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"sapui5in.ui","type":"application","i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"sapui5in.ui.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.131.1","libs":{"sap.ui.core":{},"sap.m":{},"sap.f":{},"sap.tnt":{}}},"handleValidation":true,"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"sapui5in.ui.i18n.i18n"}}},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"sapui5in.ui.view","controlId":"app","controlAggregation":"pages","async":true},"routes":[{"pattern":"","name":"main","target":"main"},{"pattern":"controls","name":"controls","target":["controls","controlsMaster","controlsDetails"]},{"pattern":"controls/{id}","name":"controlsDetails","target":["controls","controlsMaster","controlsDetails"]}],"targets":{"main":{"viewId":"main","viewName":"Main"},"controls":{"viewId":"controls","viewName":"Controls","controlId":"app","viewPath":"sapui5in.ui.view.controls","controlAggregation":"pages"},"controlsMaster":{"viewName":"Master","viewPath":"sapui5in.ui.view.controls","controlId":"idControlsSplitApp","controlAggregation":"masterPages","parent":"controls","title":" "},"controlsDetails":{"viewName":"Details","viewPath":"sapui5in.ui.view.controls","controlId":"idControlsSplitApp","controlAggregation":"detailPages","parent":"controls","title":" "}}}}}',
	"sapui5in/ui/model/formatter.js":function(){
"use strict";sap.ui.define([],function(){"use strict";var i={getControls:()=>[{id:"sapui5in.controls.Example",library:"sapui5in.controls",name:"Example",description:"Example",icon:"sap-icon://add",createdBy:{name:"Dhrubajyoti Rakshit"}},{id:"sapui5in.controls.Rectangle",library:"sapui5in.controls",name:"Rectangle",description:"Rectangle",icon:"sap-icon://add",createdBy:{name:"Dhrubajyoti Rakshit"}}]};return i});
},
	"sapui5in/ui/model/models.js":function(){
"use strict";sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/model/BindingMode","sap/ui/Device"],function(e,i,n){"use strict";var s={createDeviceModel:()=>{const s=new e(n);s.setDefaultBindingMode(i.OneWay);return s}};return s});
},
	"sapui5in/ui/view/App.view.xml":'<mvc:View\n\tcontrollerName="sapui5in.ui.controller.App"\n\tdisplayBlock="true"\n\txmlns:f="sap.f"\n\txmlns:core="sap.ui.core"\n\txmlns="sap.m"\n\txmlns:tnt="sap.tnt"\n\txmlns:mvc="sap.ui.core.mvc"><tnt:ToolPage><tnt:header><f:ShellBar title="Master Detail with Routing"\n\t\t\t\t\t\t\t\t\tsecondTitle="Boilerplate application"\n\t\t\t\t\t\t\t\t\tshowMenuButton="true"\n\t\t\t\t\t\t\t\t\tshowCopilot="true"\n\t\t\t\t\t\t\t\t\tshowNotifications="true"\n\t\t\t\t\t\t\t\t\tmenuButtonPressed="onMenuButtonPress"\n\t\t\t\t\t\t\t\t\tnotificationsNumber="2"><f:menu><Menu><MenuItem text="Flight booking" icon="sap-icon://flight" /><MenuItem text="Car rental" icon="sap-icon://car-rental" /></Menu></f:menu><f:profile><Avatar initials="UI"/></f:profile><f:searchManager><f:SearchManager/></f:searchManager></f:ShellBar></tnt:header><tnt:mainContents><App id="app" /></tnt:mainContents></tnt:ToolPage></mvc:View>\n',
	"sapui5in/ui/view/Main.view.xml":'<mvc:View\n\tcontrollerName="sapui5in.ui.controller.Main"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"\n\txmlns:core="sap.ui.core"\n\tcore:require="{\n\t\tformatter: \'sapui5in/ui/model/formatter\'\n\t}"><Page\n\t\ttitle="{i18n>appTitle}"\n\t\tid="page"><content><GenericTile class="sapUiTinyMarginBegin sapUiTinyMarginTop tileLayout" header="Control Library"\n\t\t\t\t\t\t\t\t\t subheader="Controls" press="toControls"><TileContent><Text text="To Control"/></TileContent></GenericTile></content></Page></mvc:View>\n',
	"sapui5in/ui/view/controls/Controls.view.xml":'<mvc:View\n\tcontrollerName="sapui5in.ui.controller.controls.Controls"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"><SplitApp\n\t\tid="idControlsSplitApp"></SplitApp></mvc:View>\n',
	"sapui5in/ui/view/controls/Details.view.xml":'<mvc:View\n\tcontrollerName="sapui5in.ui.controller.controls.Details"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:f="sap.f"\n\txmlns:layout="sap.ui.layout"\n\txmlns:mvc="sap.ui.core.mvc"><f:FlexibleColumnLayout id="fcl" layout="TwoColumnsBeginExpanded"><f:beginColumnPages><f:DynamicPage id="dynamicPageId" headerExpanded="{/headerExpanded}" toggleHeaderOnTitleClick="{/titleClickable}"><f:title><f:DynamicPageTitle><f:heading><Title text="{data>/selectedItem/name}"/></f:heading></f:DynamicPageTitle></f:title><f:header><f:DynamicPageHeader><layout:HorizontalLayout allowWrapping="true"><layout:VerticalLayout class="sapUiMediumMarginEnd"><ObjectAttribute title="Name" text="{data>/selectedItem/name}"/><ObjectAttribute title="Library" text="{data>/selectedItem/library}"/><ObjectAttribute title="Created By" text="{data>/selectedItem/createdBy/name}"/></layout:VerticalLayout></layout:HorizontalLayout></f:DynamicPageHeader></f:header><f:content><VBox id="idContent"/></f:content></f:DynamicPage></f:beginColumnPages><f:midColumnPages><Page id="endPage" title="Right Sidebar"></Page></f:midColumnPages></f:FlexibleColumnLayout></mvc:View>\n',
	"sapui5in/ui/view/controls/Master.view.xml":'<mvc:View\n\tcontrollerName="sapui5in.ui.controller.controls.Master"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"\n><Page\n\t\ttitle="Control List"\n\t\tid="idControlsMaster"><content><List\n\t\t\t\tid="masterList"\n\t\t\t\tmode="SingleSelectMaster"\n\t\t\t\tselectionChange=".onItemSelectionChange"\n\t\t\t\titems="{\n\t\t\t\tpath: \'data>/controls\'\n\t\t\t}"><items><StandardListItem\n\t\t\t\t\t\tselected="{=!!(${data>/selectedKey} === ${data>id})}"\n\t\t\t\t\t\ttitle="{data>name}"\n\t\t\t\t\t\tdescription="{data>description}"\n\t\t\t\t\t\ticon="{data>icon}"\n\t\t\t\t\t\ttype="Active"/></items></List></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map