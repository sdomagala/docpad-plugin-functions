'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function (BasePlugin) {

  return function (_BasePlugin) {
    _inherits(BaseClass, _BasePlugin);

    function BaseClass(opts) {
      _classCallCheck(this, BaseClass);

      var docpad = opts.docpad;

      var _this = _possibleConstructorReturn(this, (BaseClass.__proto__ || Object.getPrototypeOf(BaseClass)).call(this, opts));

      _this.createEventHandlers(docpad);
      return _this;
    }

    _createClass(BaseClass, [{
      key: 'attachEvents',
      value: function attachEvents(func) {
        func.call(this);
      }
    }, {
      key: 'docpadReady',
      value: function docpadReady(opts, next) {
        var tasks = this.getConfig()['docpadReady'];
        tasks ? _async2.default.series(tasks, next) : next();
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