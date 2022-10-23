import { Component } from "react";
import { ChatList } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';

interface DPChatListProps {
  onSelect: (chatId: number) => void;
  user: number;
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
        if (!data.find((c: any) => c.id === this.props.user) && this.props.user) {
          fetch("/api/users")
            .then(response => response.json())
            .then(data => {
              const user = data.find((u: any) => u.id === this.props.user);
              this.setState({
                chats: [
                  {
                    "id": user.id,
                    "avatar": "https://ui-avatars.com/api/?name=" + user.name,
                    "alt": user.name,
                    "title": user.name,
                    "subtitle": "New message",
                    "date": new Date(),
                    "unread": 1
                  }, ...this.state.chats]
              });
            });
        }
        this.setState({ chats: data.sort((a: any, b: any) => b.date - a.date) });
      });
  }

  render() {
    return (<div className="col-12 col-lg-4">
      <h2 className="text-pink mt-2">Messages</h2>
      <ChatList
        className='chat-list'
        dataSource={this.state.chats}
        id="chat-list"
        lazyLoadingImage="https://facebook.github.io/react/img/logo_og.png"
        onClick={(chat: any) => {
          this.props.onSelect(chat.id);
        }}
      />
    </div>);
  }
}

export default DPChatList;