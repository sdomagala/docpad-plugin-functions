import series from 'async';

export default function (BasePlugin) {


  const cl = class BaseClass extends BasePlugin {

    constructor(opts) {
      const { docpad } = opts;
      super(opts);
      this.createEventHandlers(docpad);
    }

    get name () {
      return 'functions';
    }

    attachEvents(func) {
      func.call(this, this.docpad);
    }

    // docpadReady (opts, next) {
    //   const tasks = this.getConfig()[event];
    //   if(tasks) {
    //     series(tasks, next);
    //   }
    //   else return next();
    // }
  };

  cl.attachEvents(createEventHandlers);

  return cl;
}

function createEventHandlers (docpad) {
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
}
