import { Component } from "react";
import ScheduleDisplay from "../matches/ScheduleDisplay";

interface ProfilePaneProps {
  userId: number;
}

interface ProfilePaneState {
  user: any;
}

class ProfilePane extends Component<ProfilePaneProps, ProfilePaneState> {
  constructor(props: ProfilePaneProps) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps: ProfilePaneProps) {
    if (prevProps.userId !== this.props.userId) {
      this.loadData();
    }
  }

  loadData() {
    fetch("/api/users")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ user: data.find((u: any) => u.id === this.props.userId) });
      });
  }

  render() {
    return <div>
      <h3>{this.state.user.name}</h3>
      <p>{this.state.user.year} at University of Washington</p>
      <h5>Schedule</h5>
      {this.state.user.schedule &&
        <ScheduleDisplay schedule={this.state.user.schedule} />
      }
    </div>;
  }
}

export default ProfilePane;