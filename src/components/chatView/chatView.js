import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class ChatView extends Component {
  render() {
    const { classes, chat, user } = this.props;
    if (chat === undefined) {
      return <main className={classes.content}></main>;
    } else {
      return (
        <div>
          <div className={classes.chatHeader}>
            {chat.users.filter((_usr) => _usr !== user)}
          </div>
          <main className={classes.content}>
            {chat.messages.map((_msg, _index) => {
              return (
                <div
                  key={_index}
                  className={
                    _msg.sender === user ? classes.userSent : classes.friendSent
                  }
                >
                  {_msg.message}
                </div>
              );
            })}
          </main>
        </div>
      );
    }
  }
}

export default withStyles(styles)(ChatView);
