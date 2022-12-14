import { Component } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Matches from "../matches/Matches";
import Messages from "../messages/Messages";
import Account from "../account/Account";
import "bootstrap-icons/font/bootstrap-icons.css";

interface AppUiProps { }

interface AppUiState {
  page: number;
}

class AppUi extends Component<AppUiProps, AppUiState> {
  constructor(props: AppUiProps) {
    super(props);
    let page = 0;
    if (window.location.pathname.startsWith("/messages")) {
      page = 1;
    } else if (window.location.pathname === "/account") {
      page = 2;
    }
    this.state = {
      page: page
    };
  }
  render() {
    return (<div>
      {this.state.page === 0 && <Matches />}
      {this.state.page === 1 && <Messages />}
      {this.state.page === 2 && <Account />}
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
        <BottomNavigationAction label="Account" icon={<i className="bi bi-person"></i>} />
      </BottomNavigation>
    </div>);
  }
}

export default AppUi;