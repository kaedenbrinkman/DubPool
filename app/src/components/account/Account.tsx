import { useMsal } from "@azure/msal-react";
import { Component } from "react";

interface AccountProps { }

interface AccountState { }

class Account extends Component<AccountProps, AccountState> {
  constructor(props: AccountProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div>
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