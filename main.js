import 'ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Point from 'ol/geom/Point';
import MultiPoint from 'ol/geom/MultiPoint';
import Select from 'ol/interaction/Select';
//import Stamen from 'ol/source/Stamen';
import OlSourceOSM from "ol/source/OSM";
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {Icon, Style} from 'ol/style';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {fromLonLat} from 'ol/proj';

function getIconCoords(){
    return fetch(`http://192.168.0.43:3000/purchase/geographic-areas`).then(res => res.json()).catch(err => console.error(err));
}

function createStyle(src, img) {
  return new Style({
    image: new Icon({
      anchor: [0.5, 0.96],
      crossOrigin: 'anonymous',
      src: src,
      scale: .1,
      img: img,
      imgSize: img ? [img.width, img.height] : undefined,
    }),
  });
}
getIconCoords().then(arr=>{
    console.dir(arr);
    let featArr = [];
    arr.forEach(item=> {
        let f = new Feature(new Point(fromLonLat([item.longitude, item.latitude])))
        f.setStyle(createStyle(`http://192.168.0.43:3000/leaf${Math.floor(item.score/400+1)}.svg`, undefined))
        featArr.push(f)
        
        })
    map.addLayer(new VectorLayer({
        source: new VectorSource({features: featArr}),
      }))
});



var map = new Map({
  layers: [
    new TileLayer({
      source: new OlSourceOSM()
    }),
     ],
  target: document.getElementById('map'),
  view: new View({
    center: fromLonLat([7.40423,47.263485]),
    zoom: 8,
  }),
});