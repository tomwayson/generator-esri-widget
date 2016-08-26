/// <reference path="../../../tsd.ts.ts" />
/// <amd-dependency path="dojo/text!./templates/<%=widgetName%>.html" name="template" />
declare var template: any;

//dojo
import dojoDeclare = require("dojo/_base/declare");

//dijit
import WidgetBase = require("dijit/_WidgetBase");
import TemplatedMixin = require("dijit/_TemplatedMixin"); 
<% if(widgetsInTemplate) { %>import WidgetsInTemplateMixin = require("dijit/_WidgetsInTemplateMixin"); <% }%>

interface WidgetInterface {
    constructor(options: any);
    startup();
    baseClass: string;
}

var clazz = dojoDeclare<WidgetInterface>([WidgetBase, TemplatedMixin<% if(widgetsInTemplate) { %>, WidgetsInTemplateMixin<% }%>], {

    // description:
    //    <%= description %>
	
    <% if(widgetsInTemplate) { %>templateString: template,<% }%>
    baseClass: '<%= _.dasherize(widgetName).slice(1) %>',

    constructor(options: any) {
    },

    startup: function (args) {
        //Not allowed in option strict this.inherited(arguments);
        <% if(widgetsInTemplate) { %>WidgetsInTemplateMixin.prototype.startup.call(this, args);<% }
		else { %>TemplatedMixin.prototype.startup.call(this, args);<%}%>

        var self: WidgetInterface = this;
        console.log(self.baseClass + '::startup', args);

    }

})

export = clazz;