import { Component } from "react";

interface DashboardProps { }

interface DashboardState { }

class Dashboard extends Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div></div>);
  }
}

export default Dashboard;