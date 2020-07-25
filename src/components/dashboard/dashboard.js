import React, { Component } from "react";
import ChatList from "../chatList/chatList";
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      selectedChat: null,
      newChatFormVisible: false,
      email: null,
      chats: [],
    };
  }
  render() {
    return (
      <div>
        <div>hello from dashboard</div>
        <ChatList history={this.props.history}></ChatList>
      </div>
    );
  }



  
}
