import 'ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Point from 'ol/geom/Point';
import Select from 'ol/interaction/Select';
//import Stamen from 'ol/source/Stamen';
import OlSourceOSM from "ol/source/OSM";
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {Icon, Style} from 'ol/style';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {fromLonLat} from 'ol/proj';

function createStyle(src, img) {
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

var iconFeature = new Feature(new Point(fromLonLat([7.40423,47.263485])));
iconFeature.set('style', createStyle('https://openlayers.org/en/v4.6.5/examples/data/icon.png', undefined));

var map = new Map({
  layers: [
    new TileLayer({
      source: new OlSourceOSM()
    }),
    new VectorLayer({
      style: function (feature) {
        return feature.get('style');
      },
      source: new VectorSource({features: [iconFeature]}),
    }) ],
  target: document.getElementById('map'),
  view: new View({
    center: fromLonLat([7.40423,47.263485]),
    zoom: 8,
  }),
});