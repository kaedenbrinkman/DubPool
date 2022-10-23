import { Component } from "react";

interface ProximityListProps { }

interface ProximityListState {
  users: any[];
  userLocation: any;
}

class ProximityList extends Component<ProximityListProps, ProximityListState> {
  constructor(props: ProximityListProps) {
    super(props);
    this.state = {
      users: [],
      userLocation: null
    };
  }

  componentDidMount() {
    fetch("/api/users")
      .then(response => response.json())
      .then(data => {
        if (this.state.userLocation) {
          data = this.sortData(data);
        }
        this.setState({ users: data });
      });
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      }, () => {
        if (this.state.users.length) {
          const users = this.sortData(this.state.users);
          this.setState({ users });
        }
      });
    });
  }

  sortData(data: any) {
    return data.map((d: any) => {
      const location = { lat: d.lat, lng: d.lng };
      const distance = this.calculateDistance(this.state.userLocation, location);
      return { ...d, distance };
    }).sort((a: any, b: any) => {
      return a.distance - b.distance;
    }).slice(0, 5);
  }

  calculateDistance(p1: { lat: number, lng: number }, p2: { lat: number, lng: number }) {
    return calcCrow(p1.lat, p1.lng, p2.lat, p2.lng) * 0.621371;
  }

  render() {
    if (!this.state.userLocation) {
      // if location access is allowed but not loaded yet
      if (this.state.userLocation === null) {
        return (<div className="col-12 col-lg-8 mt-5">
          <h3>Finding matches based on your location...</h3>
        </div>);
      }

      return <div></div>
    }
    return <div className="list-group">
      {this.state.users.map(user => {
        return <a href={"/messages/" + user.id} className="list-group-item list-group-item-action" aria-current="true">
          {user.name + " (" + user.year + ") " + (user.distance ? (" - lives " + user.distance.toFixed(2) + " mi away") : "")}
        </a>;
      })}
    </div>;
  }
}

function calcCrow(lat1: number, lon1: number, lat2: number, lon2: number) {
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value: number): number {
  return Value * Math.PI / 180;
}

export default ProximityList;