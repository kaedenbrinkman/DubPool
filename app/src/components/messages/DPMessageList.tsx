import React from "react";
import { Component } from "react";
import { MessageList } from 'react-chat-elements';
import { Input } from 'react-chat-elements';
import { Button } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';

let messageListReferance = React.createRef();
let inputReferance = React.createRef();

interface DPMessageListProps {
  userId: number;
  onUnSelect: () => void;
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
    this.loadData();
  }

  componentDidUpdate(prevProps: DPMessageListProps) {
    if (prevProps.userId !== this.props.userId) {
      this.loadData();
    }
  }

  loadData() {
    fetch("/api/messages/" + this.props.userId)
      .then(response => response.json())
      .then(data => {
        this.setState({ messages: data });
      });
  }

  render() {
    return (<div className="col-12 col-lg-8 mt-5">
      {/* <button className="btn btn-primary" onClick={() => {
        this.props.onUnSelect();
      }}>Back</button> */}
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
      <Input
        referance={inputReferance}
        placeholder='Type here...'
        multiline={true}
        maxHeight={250}
        rightButtons={<Button color='white' backgroundColor='black' text='Send' />}
        autofocus
      />
    </div>);
  }
}

export default DPMessageList;