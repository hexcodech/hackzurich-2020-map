import React, { Component } from "react";
import OlMap from "ol/map";
import OlView from "ol/view";
import OlLayerTile from "ol/layer/tile";
import Feature from "ol/index";
import OlSourceOSM from "ol/source/osm";
// import Vector as VectorSource from "ol/source";
// import Vector from 'ol/layer/vector';
// import Point from 'ol/geom/point';
// import Circle from 'ol/style/circle';
// import Fill from 'ol/style/fill';
// import Style from 'ol/style/style';
// import {useGeographic} from 'ol/proj';

// useGeographic();

class CustomMap extends Component {
  constructor(props) {
		super(props);

		//let place = [-110, 45];
		//let point = new Point(place);

		this.state = { center: [0, 0], zoom: 1 };

    this.olmap = new OlMap({
      target: null,
      layers: [
        new OlLayerTile({
          source: new OlSourceOSM()
				}),
				// new Vector({
				// 	source: new VectorSource({
				// 		features: [new Feature(point)],
				// 	}),
				// 	style: new Style({
				// 		image: new Circle({
				// 			radius: 9,
				// 			fill: new Fill({color: 'red'}),
				// 		}),
				// 	}),
				//})
      ],
      view: new OlView({
        center: [0,0],
        zoom: 1
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

// import React from 'react';
// import './index.css';

// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import XYZ from 'ol/source/XYZ';

// class CustomMap extends React.Component {
// 	render() {
// 		new Map({
// 			target: 'map',
// 			layers: [
// 				new TileLayer({
// 				source: new XYZ({
// 					url:
// 						'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png' +
// 						'?apikey=Your API key from http://www.thunderforest.com/docs/apikeys/ here',
// 				})
// 			})
// 				// 	source: new XYZ({
// 				// 		url: 'ch.swisstopo.swisstlm3d-karte-farbe'
// 				// 	})
// 				// })
// 			],
// 			view: new View({
// 				center: [-472202, 7530279],
// 				zoom: 12
// 			})
// 		});

// 		return (
// 			<div id="map" className="map">
// 			</div>
// 		);
// 	}
// }

// export default CustomMap;