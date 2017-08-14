const HistoryProvider = module.exports = {
  numEntries: 5,
  history: [],
  push: (location) => {
    HistoryProvider.history.push(location);
    console.log("HistoryProvider.history",HistoryProvider.history);
  },
  update: (location) => {

  },
  updateCurrent: (location) => {
    const index = HistoryProvider.history.length > 0 ? HistoryProvider.history.length - 1 : 0;
    const item = Object.assign({}, HistoryProvider.history[index], location);
    HistoryProvider.history[index] = item;
  },
  getLast: () => {
    return HistoryProvider.history[HistoryProvider.history.length - 2];
  },
  getCurrent: () => {
    return HistoryProvider.history[HistoryProvider.history.length - 1];
  }
};
