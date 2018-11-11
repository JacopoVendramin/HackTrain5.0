import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import TrainIcon from '@material-ui/icons/TrainOutlined';
import CloseIcon from '@material-ui/icons/Close';

import TabBar from '../common/tab-bar/tab-bar'
// import SvgMap from '../common/svg-map/svg-map'
import MapView from '../common/map-view/map-view'
import LineListview from '../common/line-listview/line-listview'
import './Dashboard.scss';

import stations from '../data/station-location.json'

const DetailCard = ({ name, status, delay }) => {
    return (
        <div className="DetailCard">
            <Typography variant="h2">{name}</Typography>
            <div>
                <div className="DetailCard__status">
                    <div className="DetailCard__status__label"/>
                    <Typography variant="body1">{status}</Typography>
                    <Typography variant="body1">•</Typography>
                    <Typography variant="body1">{delay}s</Typography>
                </div>
            </div>

            <div className="DetailCard__info">
                <Grid container spacing={16}>
                    <Grid item xs={4}>
                        <div className="DetailCard__info__box">
                            <Typography variant="body1"><strong>Today avarage</strong></Typography>
                            <Typography variant="h3">0:26</Typography>
                            <Typography variant="body1">-0.04</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="DetailCard__info__box">
                            <Typography variant="body1"><strong>Latest dwell</strong></Typography>
                            <Typography variant="h3">0:38</Typography>
                            <Typography variant="body1">+0.08</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

const DashboardComponent = ({ focusedTab, onTabChange }) => {
    return (
        <div className="Dashboard">
            <Grid container style={{ height: '100%', overflowY:'auto' }}>
                <Grid item xs={8}>
                    <MapView stations={stations}/>
                </Grid>
            </div>
        )
    }

    export default DashboardComponent;
