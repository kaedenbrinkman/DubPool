import { Component } from "react";
import DPChatList from "./DPChatList";
import DPMessageList from "./DPMessageList";

interface MessagesProps { }

interface MessagesState {
  chatSelected: number;
}

class Messages extends Component<MessagesProps, MessagesState> {
  constructor(props: MessagesProps) {
    super(props);
    this.state = {
      chatSelected: 0
    };
  }
  render() {
    return (<div className="row">
      <DPChatList onSelect={(chatId: number) => {
        this.setState({ chatSelected: chatId });
      }} />
      {this.state.chatSelected > 0 && <DPMessageList userId={this.state.chatSelected} />}
    </div>);
  }
}

export default Messages;