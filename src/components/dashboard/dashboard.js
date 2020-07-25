import React, { Component } from "react";
import ChatList from "../chatList/chatList";

const firebase = require("firebase");

class Dashboard extends Component {
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
        <ChatList
          history={this.props.history}
          newChatBtnFn={this.newChatBtnClicked}
          selectedChatFn={this.selectChat}
          chats={this.state.chats}
          userEmail={this.state.email}
          selectedChatIndex={this.state.selectedChat}
        ></ChatList>
      </div>
    );
  }

  selectChat = (chatIndex) => {
    console.log("selectedChat", chatIndex);
  };

  newChatBtnClicked = () => {
    this.setState({
      newChatFormVisible: true,
      selectChat: null,
    });
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async (_usr) => {
      if (!_usr) this.props.history.push("/login");
      else {
        await firebase
          .firestore()
          .collection("chats")
          .where("users", "array-contains", _usr.email)
          .onSnapshot(async (res) => {
            const chats = res.docs.map((_doc) => _doc.data());
            await this.setState({
              email: _usr.email,
              chats: chats,
            });
            console.log(this.state);
          });
      }
    });
  };
}

export default Dashboard;
