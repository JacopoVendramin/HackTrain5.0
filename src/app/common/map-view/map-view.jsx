import React from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import './map-view.scss'

import geoJson from '../../data/test.json'

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiamFjb3BvdmVuZHJhbWluIiwiYSI6ImNqbDdwM2o3bjA1amoza212ODZmNDA1ZTUifQ.Mk51lK1M-J-h3XyVCoh-Ow"
});

const MapView = ({ stations }) => (
    <Map
        style="mapbox://styles/jacopovendramin/cjobne97o2eys2sn0xl99dbjc"
        containerStyle={{
            height: "100%",
            width: "100%"
        }}>
        <Layer
            type="line"
            LineString={geoJson}>
        </Layer>
        <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "bus-15" }}>
            {stations.map((station) => <Feature coordinates={[station.long, station.lat]} />)}
        </Layer>
    </Map>
)
export default MapView
