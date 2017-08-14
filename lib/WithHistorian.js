'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HistoryProvider = require('./HistoryProvider');

var _HistoryProvider2 = _interopRequireDefault(_HistoryProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {

  var getCurrentLocation = function getCurrentLocation() {
    return _HistoryProvider2.default.getCurrent();
  };

  var getLastLocation = function getLastLocation() {
    return _HistoryProvider2.default.getLast();
  };

  var updateLocation = function updateLocation(location) {
    _HistoryProvider2.default.update(location);
  };

  var updateCurrentLocation = function updateCurrentLocation(location) {
    _HistoryProvider2.default.updateCurrent(location);
  };

  return function (props) {
    return _react2.default.createElement(Component, _extends({
      updateCurrentLocation: updateCurrentLocation,
      getCurrentLocation: getCurrentLocation,
      getLastLocation: getLastLocation
    }, props));
  };
};