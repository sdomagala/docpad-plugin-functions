import series from 'async/series';
import extend from './extender.js';

module.exports = function (BasePlugin) {

  function FunctionPlugin(opts) {
    const docpad = opts.docpad;
    this.createEventHandlers(docpad);
    FunctionPlugin.__super__.constructor.apply(this, arguments);
  }

  extend(FunctionPlugin, BasePlugin);

  FunctionPlugin.prototype.name = 'functions';

  FunctionPlugin.prototype.config = {
    eventsToSkip: ['render', 'renderDocument']
  };

  FunctionPlugin.prototype.createEventHandlers = function(docpad) {

    const eventsToSkip = this.config.eventsToSkip || []; //getConfig() doesn't work while defining plugin, so I had to create config prototype
    docpad.getEvents().forEach((eventName) => {
      if(eventsToSkip.indexOf(eventName) === -1)
        this[eventName] = (opts, next) => {
          const tasks = this.getConfig()[eventName];
          (tasks && tasks.length) ? series(tasks, next) : next();
        };
    });
  };

  return FunctionPlugin;
};
