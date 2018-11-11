import React from "react";
import PropTypes from "prop-types";
import 'whatwg-fetch'
import DashboardComponent from "./DashboardComponent";

import stations from '../data/station-location.json';

class DashboardContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focusedTab: 0,
            focusedMarker: null,
            activeMarker: null,
            activeMarkerAvg: null,
            activeMarkerLatest: null,
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

    handleMarkerClick = (index) => {
        if (index) {
            fetch(`http://localhost:3001/station/${stations[index].id}`)
                .then(function(response){
                    return response.json()
                })
                .then(function(json){
                    this.setState({ activeMarkerAvg: json.result[0].adAvg })
                })
                .catch(function(ex){
                    console.log(ex)
                })
            fetch(`http://localhost:3001/stationStat/${stations[index].id}`)
                .then(function(response){
                    return response.json()
                })
                .then(function(json){
                    this.setState({ activeMarkerLatest: json.Trainperf })
                })
                .catch(function(ex){
                    console.log(ex)
                })
        }

        this.setState({
            activeMarker: index
        })
    }

    render() {
        return (
            <DashboardComponent
                focusedTab = {this.state.focusedTab}
                activeMarker = {this.state.activeMarker}
                activeMarkerDetails = {{
                    avg: this.state.activeMarkerAvg,
                    latest: this.state.activeMarkerLatest
                }}
                onTabChange= {this.handleTabChange}
                onMarkerClick = {this.handleMarkerClick}
            />

        )
    }
}

export default DashboardContainer;
