import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import styles from "./styles";

class ChatTextbox extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.chatTextBoxContainer}>
        <TextField
          placeholder="Type your message..."
          onKeyUp={(e) => this.userTyping(e)}
        ></TextField>
      </div>
    );
  }
}

export default withStyles(styles)(ChatTextbox);
