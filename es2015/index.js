'use strict';

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extend = function extend(child, parent) {
  for (var key in parent) {
    if (hasProp.call(parent, key)) child[key] = parent[key];
  }function ctor() {
    this.constructor = child;
  }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
},
    hasProp = {}.hasOwnProperty;

module.exports = function (BasePlugin) {

  var FunctionPlugin = void 0;

  return GulpPlugin = function (BasePlugin) {
    extend(FunctionPlugin, BasePlugin);

    FunctionPlugin.prototype.name = 'functions';

    FunctionPlugin.prototype.createEventHandlers = function (docpad) {
      docpad.getEvents().forEach(function (_this) {
        return function (eventName) {
          return _this[eventName] = function (opts, next) {
            var tasks = _this.getConfig()[eventName];
            tasks ? _async2.default.series(tasks, next) : next();
          };
        };
      }(this));
      return this;
    };

    function FunctionPlugin(opts) {
      var docpad = opts.docpad;
      this.createEventHandlers(docpad);
      GulpPlugin.__super__.constructor.apply(this, arguments);
    }
  }(BasePlugin);
};