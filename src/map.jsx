import React, { Component } from "react";
import Map from "ol/map";
import View from "ol/view";
import LayerTile from "ol/layer/tile";
import OlSourceOSM from "ol/source/osm";
import useGeographic from 'ol/proj';
import Feature from 'ol/feature';
import Point from 'ol/geom/point';
import Vectorr from 'ol/source/vector';
import Vector from 'ol/layer/vector';
import Style from 'ol/style/style';
import Icon from 'ol/style/icon';
//import MultiPoint from 'ol/geom/MultiPoint';

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
    this.olmap.setTarget("map")
    let [p1,p2] = useGeographic.fromLonLat([7.40423,47.263485])
    var point = new Feature({
      type: 'icon',
      geometry: new Point(p1,p2)
    });

    var iconStyle = new Style({
      image: new Icon({
        src: "https://openlayers.org/en/v4.6.5/examples/data/icon.png"
      })
    });

    point.setStyle(iconStyle);
  
    var layer = new Vectorr({
      features: [point]
    })

    var vLayer = new Vector({
      source: layer
    })

    this.olmap.addLayer(vLayer)
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

export default CustomMap;