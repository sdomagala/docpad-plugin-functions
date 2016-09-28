import async from 'async';

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = function (BasePlugin) {

  const FunctionPlugin = (function(BasePlugin) {
    extend(FunctionPlugin, BasePlugin);

    FunctionPlugin.prototype.name = 'functions';

    FunctionPlugin.prototype.createEventHandlers = function(docpad) {
      docpad.getEvents().forEach((function(_this) {
        return function(eventName) {
          return _this[eventName] = function(opts, next) {
            const tasks = _this.getConfig()[eventName];
            tasks ? async.series(tasks, next) : next();
          };
        };
      })(this));
      return this;
    };

    function FunctionPlugin(opts) {
      const docpad = opts.docpad;
      this.createEventHandlers(docpad);
      GulpPlugin.__super__.constructor.apply(this, arguments);
    }
  })(BasePlugin);

  return FunctionPlugin;
};
