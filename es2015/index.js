'use strict';

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _extender = require('./extender.js');

var _extender2 = _interopRequireDefault(_extender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (BasePlugin) {

  function FunctionPlugin(opts) {
    var docpad = opts.docpad;
    this.createEventHandlers(docpad);
    FunctionPlugin.__super__.constructor.apply(this, arguments);
  }

  (0, _extender2.default)(FunctionPlugin, BasePlugin);

  FunctionPlugin.prototype.name = 'functions';

  FunctionPlugin.prototype.createEventHandlers = function (docpad) {
    var _this = this;

    docpad.getEvents().forEach(function (eventName) {
      if (['render', 'renderDocument'].indexOf(eventName) === -1) return _this[eventName] = function (opts, next) {
        var tasks = _this.getConfig()[eventName];
        tasks ? _async2.default.series(tasks, next) : next();
      };
    });
  };

  return FunctionPlugin;
};