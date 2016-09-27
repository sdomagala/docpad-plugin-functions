'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (BasePlugin) {

  return function (_BasePlugin) {
    _inherits(BaseClass, _BasePlugin);

    function BaseClass() {
      _classCallCheck(this, BaseClass);

      return _possibleConstructorReturn(this, (BaseClass.__proto__ || Object.getPrototypeOf(BaseClass)).apply(this, arguments));
    }

    _createClass(BaseClass, [{
      key: 'createEventHandlers',
      value: function createEventHandlers(docpad) {
        var _this2 = this;

        docpad.getEvents().forEach(function (event) {
          _this2[event] = function (opts, next) {
            var tasks = _this2.getConfig()[eventName];
            if (tasks) {
              (0, _series2.default)(tasks, next);
            } else return next();
          };
        });
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