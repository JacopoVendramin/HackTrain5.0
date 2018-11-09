import React from 'react';
import PropTypes from 'prop-types';

import DashboardComponent from './DashboardComponent';

class DashboardContainer extends React.Component {
    constructor(props) {
      super(props);

      this.state = {

      }
    }

    render() {
        return (
            <DashboardComponent />
        )
    }
}

export default DashboardContainer;
