'use strict';

var _series = require('async/series');

var _series2 = _interopRequireDefault(_series);

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

    var eventsToSkip = this.config.eventsToSkip || []; //getConfig() doesn't work while defining plugin, so I had to create config prototype
    docpad.getEvents().forEach(function (eventName) {
      if (eventsToSkip.indexOf(eventName) === -1) _this[eventName] = function (opts, next) {
        var tasks = _this.getConfig()[eventName];
        tasks && tasks.length ? (0, _series2.default)(tasks, next) : next();
      };
    });
  };

  return FunctionPlugin;
};