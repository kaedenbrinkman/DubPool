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

interface MatchesState {
  users: any[];
  map: any;
}

class Matches extends Component<MatchesProps, MatchesState> {
  constructor(props: MatchesProps) {
    super(props);
    this.state = {
      users: [],
      map: null,
    };
  }

  componentDidMount() {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
      });
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
          zoom: 11,
        }}
        mapStyle="mapbox://styles/kaedenb/ckwr9608q2wnn14o5ku9ns8jr"
        onClick={(event) => {
          // console.log(event.lngLat);
        }}
        ref={(map: any) => {
          if (map && !this.state.map) {
            this.setState({ map });
            map.on('click', 'users', (e: any) => {
              console.log(e);
              window.location.href = "/messages/" + e.features[0].properties.id;
            });
          }
        }}
      >
        <MapProvider>
          <GeolocateControl
            // style={{ position: "absolute", top: 0, left: 0, margin: 10 }}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          <Source id="users" type="geojson" data={{
            type: "FeatureCollection",
            features: this.state.users.map((user) => ({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [user.lng, user.lat],
              },
              properties: {
                title: user.name,
                description: user.description,
                id: user.id,
              },
            })),
          }}>
            <Layer
              id="users"
              type="symbol"
              layout={{
                "icon-image": "car-15",
                "icon-allow-overlap": true,
                "icon-ignore-placement": true,
                "icon-size": 1.5,
                "text-field": "{title}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top",
              }}
            />
          </Source>
        </MapProvider>
      </Map>
    </div>);
  }
}

export default Matches;