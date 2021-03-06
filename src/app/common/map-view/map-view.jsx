import React from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Marker, Popup } from "react-mapbox-gl";
import './map-view.scss'

import geoJson from '../../data/test.json'

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiamFjb3BvdmVuZHJhbWluIiwiYSI6ImNqbDdwM2o3bjA1amoza212ODZmNDA1ZTUifQ.Mk51lK1M-J-h3XyVCoh-Ow"
});

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

const MapView = ({ stations, mapMarkerStats, focusedMarker, activeMarker, onMarkerMouseEnter, onMarkerMouseLeave, onMarkerClick }) => (
    <Map
        style="mapbox://styles/jacopovendramin/cjobne97o2eys2sn0xl99dbjc"
        center={[-0.576583, 51.238606]}
        zoom={[10]}
        containerStyle={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "66.666%"
        }}>
        <Layer
            type="line"
            LineString={geoJson}>
        </Layer>

        {stations.map((station, index) => {console.log(station.name + index); return(
            <Marker
                onClick={() => onMarkerClick(index)}
                coordinates={[station.long, station.lat]}
                anchor="bottom"
                >
                <div className={`MapView__marker MapView__marker--${getStatus(mapMarkerStats[index])}`} />
            </Marker>
        )})}

        {focusedMarker ? <Popup
            coordinates={[stations[focusedMarker].long, stations[focusedMarker].lat]}
            offset={{
                'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
            }}>
            <h1>Popup</h1>
        </Popup> : null}

    </Map>
)
export default MapView
