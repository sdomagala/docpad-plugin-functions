import series from 'async/series';
import extend from './extender.js';

module.exports = function (BasePlugin) {

  function FunctionPlugin(opts) {
    const docpad = opts.docpad;
    this.createEventHandlers(docpad);
    FunctionPlugin.__super__.constructor.apply(this, arguments); //equivalent to super(..args) in classes
  }

  extend(FunctionPlugin, BasePlugin);

  FunctionPlugin.prototype.name = 'functions';

  FunctionPlugin.prototype.config = {
    eventsToSkip: ['render', 'renderDocument']
  };

  FunctionPlugin.prototype.createEventHandlers = function(docpad) {

    const eventsToSkip = this.config.eventsToSkip || []; //getConfig() doesn't work while defining plugin, so I had to create config prototype - TODO: have to think of better way of defining it
    docpad.getEvents().forEach((eventName) => {
      if(eventsToSkip.indexOf(eventName) === -1)
        this[eventName] = (opts, next) => {
          let tasks = this.getConfig()[eventName];
          if(tasks && tasks.length){

            tasks = tasks.map((task) => asyncCb(task));
            return series(tasks, next);
            
          }
          next();
        };
    });
  };

  return FunctionPlugin;
};

function asyncCb() {
  const args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
  const func = args[0];
  const params = args.slice(1);

  return (cb) => {
    log.info(`Started task: ${func.name}`);
    params.push(() => {
      log.info(`Finished task: ${func.name}`);
      cb();
    });
    func.apply(null, params);
  };
}
