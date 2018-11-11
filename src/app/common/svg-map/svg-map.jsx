import React from "react";
import PropTypes from "prop-types";
import Stations from '../../data/stations.json';
import * as d3Tube from "d3-tube-map";
import * as d3 from "d3";

class SvgMap extends React.Component {
    componentDidMount() {
        var container = d3.select("#tube-map");
        var width = 1600;
        var height = 1000;

        var map = d3Tube
            .tubeMap()
            .width(width)
            .height(height)
            .margin({
                top: 20,
                right: 20,
                bottom: 40,
                left: 100
            })
            .on("click", function(name) {
                console.log(name);
            });

            container.datum(Stations).call(map);

            var svg = container.select("svg-map");

            let zoom = d3
                .zoom()
                .scaleExtent([0.5, 6])
                .on("zoom", zoomed);

            var zoomContainer = svg.call(zoom);
            var initialScale = 2;
            var initialTranslate = [100, 200];

            zoom.scaleTo(zoomContainer, initialScale);
            zoom.translateTo(
                zoomContainer,
                initialTranslate[0],
                initialTranslate[1]
            );

            function zoomed() {
                svg.select("g").attr(
                    "transform",
                    d3.event.transform.toString()
                );
            }
    }

    shouldComponentUpdate() {
        // Prevents component re-rendering
        return false;
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }

    render() {
        return(<div id="tube-map" className="svg-map" ref={this._setRef.bind(this)} />)
    }
}

export default SvgMap
