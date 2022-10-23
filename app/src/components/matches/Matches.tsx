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
      <MatchMap />
    </div>);
  }
}

export default Matches;