import series from 'async/series';

export default function (BasePlugin) {

  return class BaseClass extends BasePlugin {

    get name () {
      return 'functions';
    }

    createEventHandlers (docpad) {

      docpad.getEvents().forEach((event) => {
        this[event] = (opts, next) => {
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
