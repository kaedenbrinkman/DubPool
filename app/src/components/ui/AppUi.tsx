import { Component } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Matches from "../matches/Matches";
import Messages from "../messages/Messages";

interface AppUiProps { }

interface AppUiState {
  page: number;
}

class AppUi extends Component<AppUiProps, AppUiState> {
  constructor(props: AppUiProps) {
    super(props);
    this.state = {
      page: 0,
    };
  }
  render() {
    return (<div>
      {this.state.page === 0 && <Matches />}
      {this.state.page === 1 && <Messages />}
      <BottomNavigation
        showLabels
        value={this.state.page}
        onChange={(event, newValue) => {
          this.setState({ page: newValue });
        }}
        style={{ position: "fixed", bottom: 0, width: "100%" }}
      >
        <BottomNavigationAction label="Matches" icon={<i className="bi bi-car-front"></i>} />
        <BottomNavigationAction label="Messages" icon={<i className="bi bi-chat"></i>} />
      </BottomNavigation>
    </div>);
  }
}

export default AppUi;