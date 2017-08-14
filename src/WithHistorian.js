import React, { Component } from 'react';

import HistoryProvider from './HistoryProvider';

export default (Component) => {

  const getCurrentLocation = () => HistoryProvider.getCurrent();

  const getLastLocation = () => HistoryProvider.getLast();

  const updateLocation = (location) => {
    HistoryProvider.update(location);
  }

  const updateCurrentLocation = (location) => {
    HistoryProvider.updateCurrent(location);
  }

  return function(props) {
    return <Component
            updateCurrentLocation={updateCurrentLocation}
            getCurrentLocation={getCurrentLocation}
            getLastLocation={getLastLocation}
            {...props}
          />;
  }
}
