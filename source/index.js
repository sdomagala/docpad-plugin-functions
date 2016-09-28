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
    docpad.getEvents().forEach((eventName) => {
      if(['render', 'renderDocument'].indexOf(eventName) === -1)
        return this[eventName] = (opts, next) => {
          const tasks = this.getConfig()[eventName];
          tasks ? async.series(tasks, next) : next();
        };
    });
  };

  return FunctionPlugin;
};
