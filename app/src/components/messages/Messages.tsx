import { Component } from "react";

interface MessagesProps { }

interface MessagesState { }

class Messages extends Component<MessagesProps, MessagesState> {
  constructor(props: MessagesProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div></div>);
  }
}

export default Messages;