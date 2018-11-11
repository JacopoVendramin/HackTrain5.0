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

import stations from '../data/station-location.json';

const ranges = {
    safe: 2,
    warning: 10,
    critical: 30
}

const getStatus = (delta) => {
    if (delta <= ranges.safe && delta >= -ranges.safe) return "safe";
    if (delta >= ranges.warning || delta <= -ranges.warning) return "warning";
    return "critical";
}

const DetailCard = (props) => {
    let avg = parseInt(props.details.avg);
    let latest = parseInt(props.details.latest);

    let avgTotal = 30 + avg;
    let latestTotal = 30 + avg;

    return (
        <div className="DetailCard">
            <Typography variant="h2">{props.station ? props.station.name : null}</Typography>
            <div>
                <div className="DetailCard__status">
                    <div className={`DetailCard__status__label DetailCard__status__label--${getStatus(props.details.avg)}`}/>
                    <Typography variant="body1">{getStatus(props.details.avg)}</Typography>
                </div>
            </div>

            <div className="DetailCard__info">
                <Grid container spacing={16}>
                    <Grid item xs={6}>
                        <div className="DetailCard__info__box">
                            <Typography variant="body1"><strong>Today avarage</strong></Typography>
                            <Typography variant="h3">{ "0:" + (avgTotal > 10 ? avgTotal : "0" + avgTotal) }</Typography>
                            <Typography variant="body1">{avg}</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="DetailCard__info__box">
                            <Typography variant="body1"><strong>Latest dwell</strong></Typography>
                            <Typography variant="h3">{ "0:" + (latestTotal > 10 ? latestTotal : "0" + latestTotal) }</Typography>
                            <Typography variant="body1">{latest}</Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

const DashboardComponent = ({ activeMarker, mapMarkerStats, activeMarkerDetails, onMarkerClick }) => {
    return (
        <div className="Dashboard">
            <Grid container style={{ height: '100%', overflowY:'auto' }}>
                <Grid item xs={8}>
                    <MapView stations={stations} mapMarkerStats={mapMarkerStats} onMarkerClick={onMarkerClick}/>
                </Grid>
                <Grid item xs={4}>
                    {activeMarker ? <DetailCard
                        station={stations[activeMarker] ? stations[activeMarker] : null}
                        details={activeMarkerDetails}
                        /> : null}
                </Grid>
            </Grid>
        </div>
    )
}

export default DashboardComponent;
