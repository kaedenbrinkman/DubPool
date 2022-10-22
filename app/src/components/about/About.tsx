import { Component } from "react";

interface AboutProps { }

interface AboutState { }

class About extends Component<AboutProps, AboutState> {
  constructor(props: AboutProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div>About</div>);
  }
}

export default About;