import React from "react";
import PropTypes from "prop-types";

import DashboardComponent from "./DashboardComponent";

class DashboardContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focusedTab: 0,
            focusedMarker: null,
            activeMarker: null
        }

    }

    handleTabChange = (event, index) => {
        this.setState({
            focusedTab: index
        })
    }

    handleMarkerFocus = (index) => {
        this.setState({
            focusedMarker: index
        })
    }

    handleMarkerClick = (index) => {
        this.setState({
            activeMarker: index
        })
    }

    render() {
        return (
            <DashboardComponent
                focusedTab = {this.state.focusedTab}
                focusedMarker = {this.state.focusedMarker}
                activeMarker = {this.state.activeMarker}
                onTabChange= {this.handleTabChange}
                onMarkerMouseEnter = {(index) => this.handleMarkerFocus(index)}
                onMarkerMouseLeave = {() => this.handleMarkerFocus(null)}
                onMarkerClick = {this.handleMarkerClick}
            />

        )
    }
}

export default DashboardContainer;
