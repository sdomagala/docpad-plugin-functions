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
      const tasks = this.getConfig()['docpadReady'];
      tasks ? series(tasks, next) : next();
    }
  };
}
