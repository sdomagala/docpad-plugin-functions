import series from 'async/series';

export default function (BasePlugin) {

  let events = {};

  return class BaseClass extends BasePlugin {

    constructor(opts, ...args) {
      const { docpad } = opts;
      super(opts, ...args);
      events = this.createEventHandlers(docpad);
      Object.assign(BaseClass, events);
    }

    get name () {
      return 'functions';
    }

    docpadReady (opts, next) {
      const tasks = this.getConfig()[event];
      if(tasks) {
        series(tasks, next);
      }
      else return next();
    }

    createEventHandlers (docpad) {
      const self = this;
      const events = {};
      docpad.getEvents().forEach((event) => {
        events[event] = (opts, next) => {
          const tasks = this.getConfig()[event];
          if(tasks) {
            series(tasks, next);
          }
          else return next();
        };
      });

      return events;
    }
  };
}
