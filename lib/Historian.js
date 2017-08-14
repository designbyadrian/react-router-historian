'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _HistoryProvider = require('./HistoryProvider');

var _HistoryProvider2 = _interopRequireDefault(_HistoryProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Historian = function (_Component) {
  _inherits(Historian, _Component);

  function Historian(props) {
    _classCallCheck(this, Historian);

    var _this = _possibleConstructorReturn(this, (Historian.__proto__ || Object.getPrototypeOf(Historian)).call(this, props));

    _this.lastLocation = { pathname: '', search: '' };
    return _this;
  }

  _createClass(Historian, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      console.log("Historian componentWillReceiveProps", this.props.location);

      if (this.props.location.pathname !== this.lastLocation.pathname || this.props.location.search !== this.lastLocation.search) {
        this.lastLocation.pathname = this.props.location.pathname;
        this.lastLocation.search = this.props.location.search;
        _HistoryProvider2.default.push(this.props.location);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return Historian;
}(_react.Component);

exports.default = (0, _reactRouter.withRouter)(Historian);