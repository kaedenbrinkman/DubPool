import { Component } from "react";
import MatchMap from "./MatchMap";
import ProximityList from "./ProximityList";

interface MatchesProps { }

interface MatchesState { }

class Matches extends Component<MatchesProps, MatchesState> {
  constructor(props: MatchesProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div>
      <h1 className="color-pink mt-3">Welcome!</h1>
      <MatchMap />
      <ProximityList />
    </div>);
  }
}

export default Matches;