import React from "react";
import { Component } from "react";
import { MessageList } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';

let messageListReferance = React.createRef();

interface DPMessageListProps {
  userId: number;
}

interface DPMessageListState {
  messages: any[];
}

class DPMessageList extends Component<DPMessageListProps, DPMessageListState> {
  constructor(props: DPMessageListProps) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    fetch("/api/messages/" + this.props.userId)
      .then(response => response.json())
      .then(data => {
        this.setState({ messages: data });
      });
  }

  render() {
    return (<div className="col-8 mt-5">
      <MessageList
        referance={messageListReferance}
        className='message-list'
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={this.state.messages}
        downButton={true}
        downButtonBadge={3}
        sendMessagePreview={true}
      />
    </div>);
  }
}

export default DPMessageList;