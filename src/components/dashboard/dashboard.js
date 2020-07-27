import React, { Component } from "react";
import ChatList from "../chatList/chatList";
import ChatView from "../chatView/chatView";
import ChatTextbox from "../chatTextbox/chatTextbox";
import { Button, withStyles } from "@material-ui/core";
import styles from "./styles";

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
    const { classes } = this.props;
    return (
      <div className="dashboard-container" id="dashboard-container">
        <ChatList
          history={this.props.history}
          userEmail={this.state.email}
          selectChatFn={this.selectChat}
          chats={this.state.chats}
          selectedChatIndex={this.state.selectedChat}
          newChatBtnFn={this.newChatBtnClicked}
        ></ChatList>
        {this.state.newChatFormVisible ? null : (
          <ChatView
            user={this.state.email}
            chat={this.state.chats[this.state.selectedChat]}
          ></ChatView>
        )}
        {this.state.selectedChat !== null && !this.state.newChatFormVisible ? (
          <ChatTextbox
            userClickedInputFn={this.messageRead}
            submitMessageFn={this.submitMessage}
          ></ChatTextbox>
        ) : null}

        <Button onClick={this.signOut} className={classes.signOutBtn}>
          Sign Out
        </Button>
      </div>
    );
  }

  signOut = () => {
    firebase.auth().signOut();
  };

  selectChat = (chatIndex) => {
    this.setState({
      selectedChat: chatIndex,
    });
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
          });
      }
    });
  };
}

export default withStyles(styles)(Dashboard);
