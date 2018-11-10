import React from "react";
import PropTypes from "prop-types";

import DashboardComponent from "./DashboardComponent";

class DashboardContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focusedTab: 0
        }

    }

    handleTabChange = (event, index) => {
        this.setState({
            focusedTab: index
        })
    }

    render() {
        return (
            <DashboardComponent
                focusedTab = {this.state.focusedTab}
                onTabChange= {this.handleTabChange}
            />

        )
    }
}

export default DashboardContainer;
