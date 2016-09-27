import series from 'async/series';

export default function (BasePlugin) {

  return class BaseClass extends BasePlugin {

    constructor(opts, ...args) {
      const { docpad } = opts;
      super(opts, ...args);
      const events = this.createEventHandlers.bind(docpad);

      Object.extend(this, events);
    }

    get name () {
      return 'functions';
    }

    createEventHandlers (docpad) {
      const self = this;
      const events = {};
      return docpad.getEvents().forEach((event) => {
        events[event] = (opts, next) => {
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
