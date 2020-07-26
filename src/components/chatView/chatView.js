import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatView extends Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.content}>hello from chatview</div>;
  }
}

export default withStyles(styles)(ChatView);
