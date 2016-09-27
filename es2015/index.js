'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (BasePlugin) {

  var events = {};

  return function (_BasePlugin) {
    _inherits(BaseClass, _BasePlugin);

    function BaseClass(opts) {
      var _ref;

      _classCallCheck(this, BaseClass);

      var docpad = opts.docpad;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = BaseClass.__proto__ || Object.getPrototypeOf(BaseClass)).call.apply(_ref, [this, opts].concat(args)));

      events = _this.createEventHandlers(docpad);
      Object.assign(BaseClass, events);
      return _this;
    }

    _createClass(BaseClass, [{
      key: 'docpadReady',
      value: function docpadReady(opts, next) {
        var tasks = this.getConfig()[event];
        if (tasks) {
          (0, _series2.default)(tasks, next);
        } else return next();
      }
    }, {
      key: 'createEventHandlers',
      value: function createEventHandlers(docpad) {
        var _this2 = this;

        var self = this;
        var events = {};
        docpad.getEvents().forEach(function (event) {
          events[event] = function (opts, next) {
            var tasks = _this2.getConfig()[event];
            if (tasks) {
              (0, _series2.default)(tasks, next);
            } else return next();
          };
        });

        return events;
      }
    }, {
      key: 'name',
      get: function get() {
        return 'functions';
      }
    }]);

    return BaseClass;
  }(BasePlugin);
};

var _series = require('async/series');

var _series2 = _interopRequireDefault(_series);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = exports['default'];