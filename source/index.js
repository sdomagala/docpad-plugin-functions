import async from 'async';
import extend from './extender.js';

module.exports = function (BasePlugin) {

  function FunctionPlugin(opts) {
    const docpad = opts.docpad;
    this.createEventHandlers(docpad);
    FunctionPlugin.__super__.constructor.apply(this, arguments);
  }

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

  return FunctionPlugin;
};
