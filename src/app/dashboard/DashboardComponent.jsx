import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import TabBar from '../common/tab-bar/tab-bar'
// import SvgMap from '../common/svg-map/svg-map'
import MapView from '../common/map-view/map-view'
import LineListview from '../common/line-listview/line-listview'
import './Dashboard.scss';

import stations from '../data/station-location.json'

const DashboardComponent = ({ focusedTab, onTabChange }) => {
    return (
        <div className="Dashboard">
            <Grid container style={{ height: '100%', overflowY:'auto' }}>
                <Grid item xs={8}>
                    <MapView stations={stations}/>
                </Grid>
                <Grid item xs={4} >
                    <TabBar onTabChange={onTabChange} focusedTab={focusedTab} />
                </Grid>
            </Grid>
        </div>
    )
}

export default DashboardComponent;
