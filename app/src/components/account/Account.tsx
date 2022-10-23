import { useMsal } from "@azure/msal-react";
import { Component } from "react";
import { Link } from "react-router-dom";
import ScheduleEditor from "./ScheduleEditor";

interface AccountProps { }

interface AccountState { }

class Account extends Component<AccountProps, AccountState> {
  constructor(props: AccountProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div>
      <h1 className="text-pink">Account</h1>
      <h3>Host</h3>
      <p className="text-muted mx-5">If you check the box below, your name and general location will be shared with other UW students <Link to="/privacy">Learn more</Link>.</p>
      <div className="form-check form-switch" style={{ maxWidth: "200px", margin: "auto" }}>
        <input className="form-check-input" type="checkbox" role="switch" id="isHosting" checked={localStorage.getItem("isHosting") === "true"} onChange={(e) => {
          localStorage.setItem("isHosting", e.target.checked.toString());
        }} />
        <label className="form-check-label" htmlFor="isHosting">Host my car</label>
      </div>
      <h3 className="mt-2">Your Schedule</h3>
      <p className="text-muted mx-5">Help us match you with other commuting students by letting us know what time you typically leave home in the morning and what time you leave campus in the evening.</p>
      <ScheduleEditor />
      <SignOutBtn />
    </div>);
  }
}

function SignOutBtn() {
  const { instance } = useMsal();
  return <div>
    <button className="btn btn-primary mt-2" onClick={() => {
      instance.logout();
      window.location.href = "/";
    }}>Sign out</button>
  </div>

}

export default Account;