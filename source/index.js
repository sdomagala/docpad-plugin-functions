import series from 'async';

export default function (BasePlugin) {


  return class BaseClass extends BasePlugin {

    constructor(opts) {
      const { docpad } = opts;
      super(opts);
      this.createEventHandlers(docpad);
    }

    get name () {
      return 'functions';
    }

    attachEvents(func) {
      func.call(this);
    }

    docpadReady (opts, next) {
      console.log(this, this.name);
      const tasks = this.getConfig()[event];
      tasks ? series(tasks, next) : next();
    }
  };
}
