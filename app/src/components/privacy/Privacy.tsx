import { Component } from "react";

interface PrivacyProps { }

interface PrivacyState { }

class Privacy extends Component<PrivacyProps, PrivacyState> {
  constructor(props: PrivacyProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div>Privacy</div>);
  }
}

export default Privacy;