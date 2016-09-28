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

  FunctionPlugin.prototype.config = {
    eventsToSkip: ['render', 'renderDocument']
  };

  FunctionPlugin.prototype.createEventHandlers = function (docpad) {
    var _this = this;

    var eventsToSkip = this.config.eventsToSkip || [];
    docpad.getEvents().forEach(function (eventName) {
      if (eventsToSkip.indexOf(eventName) === -1) return _this[eventName] = function (opts, next) {
        var tasks = _this.getConfig()[eventName];
        tasks && tasks.length ? _async2.default.series(tasks, next) : next();
      };
    });
  };

  return FunctionPlugin;
};