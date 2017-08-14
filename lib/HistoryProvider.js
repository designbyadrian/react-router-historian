"use strict";

var HistoryProvider = module.exports = {
  numEntries: 5,
  history: [],
  push: function push(location) {
    HistoryProvider.history.push(location);
    console.log("HistoryProvider.history", HistoryProvider.history);
  },
  update: function update(location) {},
  updateCurrent: function updateCurrent(location) {
    var index = HistoryProvider.history.length > 0 ? HistoryProvider.history.length - 1 : 0;
    var item = Object.assign({}, HistoryProvider.history[index], location);
    HistoryProvider.history[index] = item;
  },
  getLast: function getLast() {
    return HistoryProvider.history[HistoryProvider.history.length - 2];
  },
  getCurrent: function getCurrent() {
    return HistoryProvider.history[HistoryProvider.history.length - 1];
  }
};