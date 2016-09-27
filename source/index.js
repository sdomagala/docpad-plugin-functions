import series from 'async/series';

export default function (BasePlugin) {

  return class BaseClass extends BasePlugin {

    constructor(opts, ...args) {
      const { docpad } = opts;
      super(opts, ...args);
      this.createEventHandlers(docpad);
    }

    get name () {
      return 'functions';
    }

    createEventHandlers (docpad) {
      const self = this;
      docpad.getEvents().forEach((event) => {
        this[event] = function(opts, next) {
          const tasks = this.getConfig()[eventName];
          if(tasks) {
            series(tasks, next);
          }
          else return next();
        };
      });
    }
  };
}
