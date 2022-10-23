import { Component } from "react";
import MatchMap from "./MatchMap";

interface MatchesProps { }

interface MatchesState { }

class Matches extends Component<MatchesProps, MatchesState> {
  constructor(props: MatchesProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div>
      <h1 className="color-pink">Welcome!</h1>
      <MatchMap />
      <div className="d-flex flex-column">
        <div><button className="btn btn-primary mt-2">Where</button></div>
        <div><button className="btn btn-primary mt-2">When</button></div>
        <div><button className="btn btn-primary mt-2">Search</button></div>
        <div><button className="btn btn-primary mt-2">Host</button></div>
        <div className="m-5"></div>
      </div>
    </div>);
  }
}

export default Matches;