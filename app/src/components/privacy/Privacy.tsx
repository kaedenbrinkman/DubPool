import { Component } from "react";

interface PrivacyProps { }

interface PrivacyState { }

class Privacy extends Component<PrivacyProps, PrivacyState> {
  constructor(props: PrivacyProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div>
      <h1 className="text-pink">Privacy</h1>
      <p>
        We at DubPool take privacy incredibly seriously: while general locations will have to be given in for the service, specific information relating to personal addresses and locations will never be shared unless the user would like to.
      </p>
    </div>);
  }
}

export default Privacy;