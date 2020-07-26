import React, { Component } from "react";
import ChatList from "../chatList/chatList";
import ChatView from "../chatView/chatView";
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
      <div>
        <ChatList
          history={this.props.history}
          newChatBtnFn={this.newChatBtnClicked}
          selectChatFn={this.selectChat}
          chats={this.state.chats}
          userEmail={this.state.email}
          selectedChatIndex={this.state.selectedChat}
        ></ChatList>
        {this.state.newChatFormVisible ? null : (
          <ChatView
            user={this.state.email}
            chat={this.state.chats[this.state.selectedChat]}
          />
        )}
        <Button className={classes.signOutBtn} onClick={this.signOut}>
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
