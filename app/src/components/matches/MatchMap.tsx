import { Component } from "react";
import Map, {
  GeolocateControl,
  Source,
  Layer,
  MapProvider,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./MatchMap.css";

// fix transpilation
(mapboxgl as any).workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default; // eslint-disable-line


interface MatchesProps { }

interface MatchesState { }

class Matches extends Component<MatchesProps, MatchesState> {
  constructor(props: MatchesProps) {
    super(props);
    this.state = {};
  }
  render() {
    const MAPBOX_ACCESS_TOKEN = "pk.eyJ1Ijoia2FlZGVuYiIsImEiOiJjbDlrbzI4bzIwMXk1M3B1bnN2b2J3Z2pzIn0.TBn8z7dcDST7Xp_Djtn59Q";
    return (<div style={{ width: "100%", height: "300px" }}>
      <Map
        id="map"
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: -122.3035,
          latitude: 47.6553,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/kaedenb/ckwr9608q2wnn14o5ku9ns8jr"
      >
      </Map>
    </div>);
  }
}

export default Matches;