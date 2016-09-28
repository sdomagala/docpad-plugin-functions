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

    const config = this.getConfig();
    if(!config)
      console.log('Skipping functions plugin due to lack of config file')
    const eventsToSkip = config.eventsToSkip || [];
    docpad.getEvents().forEach((eventName) => {
      if(eventsToSkip.indexOf(eventName) === -1)
        return this[eventName] = (opts, next) => {
          const tasks = config[eventName];
          (tasks && tasks.length) ? async.series(tasks, next) : next();
        };
    });
  };

  return FunctionPlugin;
};
