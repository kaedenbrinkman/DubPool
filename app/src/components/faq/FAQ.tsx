import { Component } from "react";

interface FAQProps { }

interface FAQState { }

class FAQ extends Component<FAQProps, FAQState> {
  constructor(props: FAQProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div>FAQ</div>);
  }
}

export default FAQ;