import { Component } from "react";
import { ChatList } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';

interface DPChatListProps {
  onSelect: (chatId: number) => void;
}

interface DPChatListState {
  chats: any[];
}

class DPChatList extends Component<DPChatListProps, DPChatListState> {
  constructor(props: DPChatListProps) {
    super(props);
    this.state = {
      chats: []
    };
  }

  componentDidMount() {
    fetch("/api/chats")
      .then(response => response.json())
      .then(data => {
        this.setState({ chats: data });
      });
  }

  render() {
    return (<div className="col-4">
      <h2 className="text-pink mt-2">Messages</h2>
      <ChatList
        className='chat-list'
        dataSource={this.state.chats}
        id="chat-list"
        lazyLoadingImage="https://facebook.github.io/react/img/logo.svg"
        onClick={(chat: any) => {
          this.props.onSelect(chat.id);
        }}
      />
    </div>);
  }
}

export default DPChatList;