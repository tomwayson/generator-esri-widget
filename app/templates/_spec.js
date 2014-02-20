require([
    '<%= pathName %>',

    'dojo/_base/window',

    'dojo/dom-construct',
    'dojo/dom-style',
    'dojo/dom-class',

    'dojo/query'
], function(
    WidgetUnderTest,

    win,

    domConstruct,
    domStyle,
    domClass,

    query
) {

    var widget, select;

    afterEach(function() {
        if (widget) {
            widget.destroy();
            widget = null;
        }
    });

    describe('<%= pathName %>', function() {
        describe('Sanity', function() {
            beforeEach(function() {
                widget = new WidgetUnderTest(null, domConstruct.create('div', null, win.body()));
            });

            it('should create a <%= widgetName %>', function() {
                expect(widget).toEqual(jasmine.any(WidgetUnderTest));
            });
        });
    });
});