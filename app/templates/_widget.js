define([
    'dojo/text!<%=path%>templates/<%=widgetName%>.html',

    'dojo/_base/declare',

    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin'
], function(
    template,

    declare,

    _WidgetBase,
    _TemplatedMixin
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        // description:
        //      **Summary**: <%= description %>
        //      <p>
        //      </p>
        //      **Owner(s)**:
        //      </p>
        //      <p>
        //      **Test Page**: <a href=""></a>
        //      </p>
        //      <p>
        //      **Description**:  <%= description %>
        //      </p>
        //      <p>
        //      **Required Files**:
        //      </p>
        //      <ul><li></li></ul>
        // example:
        // |    var widget = new <%= widgetName %>({
        // |    }, "node");

        templateString: template,

        baseClass: '<%= widgetName %>',

        // Properties to be sent into constructor

        postCreate: function() {
            // summary:
            //    Overrides method of same name in dijit._Widget.
            // tags:
            //    private
            console.log('<%= consoleLog %>::postCreate', arguments);

            this.setupConnections();
        },
        setupConnections: function() {
            // summary:
            //      wire events, and such
            //
            console.log('<%= consoleLog %>::setupConnections', arguments);

        }
    });
});