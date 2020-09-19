import React, { Component } from "react";
import Map from "ol/map";
import View from "ol/view";
import LayerTile from "ol/layer/tile";
import OlSourceOSM from "ol/source/osm";
import useGeographic from 'ol/proj';

class CustomMap extends Component {
  constructor(props) {
    super(props)

    this.olmap = new Map({
      target: null,
      layers: [
        new LayerTile({
          source: new OlSourceOSM()
          })
      ],
      view: new View({
        center: useGeographic.fromLonLat([7.40423,47.263485]),
        zoom: 8
      })
    });
  }

  componentDidMount() {
    this.olmap.setTarget("map");
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

export default CustomMap;