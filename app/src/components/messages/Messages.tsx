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
    // if url is /messages/_id, set chatSelected to _id
    let chatSelected = 0;
    if (window.location.pathname.startsWith("/messages/")) {
      chatSelected = parseInt(window.location.pathname.split("/")[2]);
    }
    this.state = {
      chatSelected
    };
  }
  render() {
    return (<div className="row">
      <DPChatList user={this.state.chatSelected} onSelect={(chatId: number) => {
        this.setState({ chatSelected: chatId });
      }} />
      {this.state.chatSelected > 0 && <DPMessageList userId={this.state.chatSelected} onUnSelect={() => {
        this.setState({ chatSelected: 0 });
      }} />}
    </div>);
  }
}

export default Messages;