import React, { Component } from 'react';
import { withRouter } from 'react-router';

import HistoryProvider from './HistoryProvider';

class Historian extends Component {

  constructor(props) {
    super(props);

    this.lastLocation = { pathname: '', search: '' };
  }

  componentWillReceiveProps(props) {
    console.log("Historian componentWillReceiveProps",this.props.location);

    if (
      this.props.location.pathname !== this.lastLocation.pathname ||
      this.props.location.search !== this.lastLocation.search
    ) {
      this.lastLocation.pathname = this.props.location.pathname;
      this.lastLocation.search = this.props.location.search;
      HistoryProvider.push(this.props.location);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(Historian);
