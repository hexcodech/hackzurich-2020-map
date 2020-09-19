import React, { Component } from "react";
/*import Map from "ol/Map";
import View from "ol/View";
import LayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import * as useGeographic from 'ol/proj/';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Vectorr from 'ol/source/Vector';
import Vector from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';*/
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Point from 'ol/geom/Point';
import Select from 'ol/interaction/Select';
import Stamen from 'ol/source/Stamen';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {Icon, Style} from 'ol/style';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
//import MultiPoint from 'ol/geom/MultiPoint';

class CustomMap extends Component {
  constructor(props) {
    super(props)

    // let [p1,p2] = useGeographic.fromLonLat([7.40423,47.263485])
    // var point = new Feature({
    //   type: 'icon',
    //   geometry: new Point(p1,p2)
    // });

    // var iconStyle = new Style({
    //   image: new Icon({
    //     src: "https://openlayers.org/en/v4.6.5/examples/data/icon.png"
    //   })
    // });

    // point.setStyle(iconStyle);
  
    // var layer = new Vectorr({
    //   features: [point]
    // })

    // var vLayer = new Vector({
    //   source: layer
    // })

    // this.olmap = new Map({
    //   target: null,
    //   layers: [
    //     new LayerTile({
    //       source: new OlSourceOSM()
    //     })
    //   ],
    //   view: new View({
    //     center: useGeographic.fromLonLat([7.40423,47.263485]),
    //     zoom: 8
    //   })
    // });

    // this.olmap.addLayer(vLayer)
    
    
    var iconFeature = new Feature(new Point([0, 0]));
    iconFeature.set('style', this.createStyle('data/icon.png', undefined));
    var map = new Map({
      layers: [
        new TileLayer({
          source: new Stamen({layer: 'watercolor'}),
        }),
        new VectorLayer({
          style: function (feature) {
            return feature.get('style');
          },
          source: new VectorSource({features: [iconFeature]}),
        }) ],
      target: document.getElementById('map'),
      view: new View({
        center: [0, 0],
        zoom: 3,
      }),
    });
  }

  createStyle(src, img) {
    return new Style({
      image: new Icon({
        anchor: [0.5, 0.96],
        crossOrigin: 'anonymous',
        src: src,
        img: img,
        imgSize: img ? [img.width, img.height] : undefined,
      }),
    });
  }

  componentDidMount() {
    //this.olmap.setTarget("map")
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

export default CustomMap;