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

const DetailCard = (props) => {
    return (
        <div className="DetailCard">
            <Typography variant="h2">{props.station ? props.station.name : null}</Typography>
            <div>
                <div className="DetailCard__status">
                    <div className="DetailCard__status__label"/>
                    <Typography variant="body1">{props.status}</Typography>
                    <Typography variant="body1">•</Typography>
                    <Typography variant="body1">{props.delay}s</Typography>
                </div>
            </div>

            <div className="DetailCard__info">
                <Grid container spacing={16}>
                    <Grid item xs={4}>
                        <div className="DetailCard__info__box">
                            <Typography variant="body1"><strong>Today avarage</strong></Typography>
                            <Typography variant="h3">0:26</Typography>
                            <Typography variant="body1">{props.details.avg}</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="DetailCard__info__box">
                            <Typography variant="body1"><strong>Latest dwell</strong></Typography>
                            <Typography variant="h3">0:38</Typography>
                            <Typography variant="body1">{props.details.latest}</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

const DashboardComponent = ({ activeMarker, activeMarkerDetails, onMarkerClick }) => {
    return (
        <div className="Dashboard">
            <Grid container style={{ height: '100%', overflowY:'auto' }}>
                <Grid item xs={8}>
                    <MapView stations={stations} onMarkerClick={onMarkerClick}/>
                </Grid>
                <Grid item xs={4}>
                    <DetailCard
                        station={stations[activeMarker] ? stations[activeMarker] : null}
                        details={activeMarkerDetails}
                        />
                </Grid>
            </Grid>
        </div>
    )
}

export default DashboardComponent;
