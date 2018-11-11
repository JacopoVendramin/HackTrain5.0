import React from "react";
import PropTypes from "prop-types";
import 'whatwg-fetch'
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

    componentDidMount(){
        fetch('http://localhost:3001/station/CLAPHAM%20JUNCTION%20MAIN%20(9-11)')
            .then(function(response){
                return response.json()
            })
            .then(function(json){
                console.log(json)
            })
            .catch(function(ex){
                console.log(ex)
            })
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
