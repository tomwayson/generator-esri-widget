define([
  '<%= path %><%= widgetName %>',

  'dojo/dom-construct'
], function(
  WidgetUnderTest,

  domConstruct
) {
  describe('<%= path %><%= widgetName %>', function() {
    var widget;
    var destroy = function (widget) {
      if (widget && widget.destroyRecursive) {
        widget.destroyRecursive();
        widget = null;
      }
    };

    beforeEach(function() {
      widget = new WidgetUnderTest(null, domConstruct.create('div', null, document.body));
    });

    afterEach(function() {
      destroy(widget);
    });

    describe('Sanity', function() {
      it('should create a <%= widgetName %>', function() {
        expect(widget).to.be.a(WidgetUnderTest);
      });
    });
  });
});
