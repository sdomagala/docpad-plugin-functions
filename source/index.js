import series from 'async';

export default function (BasePlugin) {


  return class BaseClass extends BasePlugin {

    constructor(opts, ...args) {
      const { docpad } = opts;
      super(opts, ...args);
      this.createEventHandlers(docpad);
      this.docpadReady = (opts, next) => {
        const tasks = this.getConfig()[event];
        if(tasks) {
          series(tasks, next);
        }
        else return next();
      };
    }

    get name () {
      return 'functions';
    }

    // docpadReady (opts, next) {
    //   const tasks = this.getConfig()[event];
    //   if(tasks) {
    //     series(tasks, next);
    //   }
    //   else return next();
    // }

    createEventHandlers (docpad) {
      docpad.getEvents().forEach((event) => {
        this[event] = (opts, next) => {
          console.log(`${event} used`);
          const tasks = this.getConfig()[event];
          if(tasks) {
            async.series(tasks, next);
          }
          else return next();
        };
      });

      return events;
    }
  };
}
