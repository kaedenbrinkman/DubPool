import { useMsal } from "@azure/msal-react";
import { Component } from "react";
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
      <div className="form-check form-switch" style={{ maxWidth: "200px", margin: "auto" }}>
        <input className="form-check-input" type="checkbox" role="switch" id="isHosting" checked />
        <label className="form-check-label" htmlFor="isHosting">Host my car</label>
      </div>
      <h3 className="mt-2">Your Schedule</h3>
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