const styles = (theme) => ({
  content: {
    height: "calc(100vh - 100px)",
    overflow: "auto",
    padding: "25px",
    marginLeft: "300px",
    boxSizing: "border-box",
    overflowY: "scroll",
    top: "50px",
    width: "calc(100% - 300px)",
    position: "absolute",
  },

  userSent: {
    float: "left",
    clear: "both",
    padding: "20px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "10px",
    backgroundColor: "#3498DB",
    color: "white",
    width: "300px",
    borderRadius: "11px",
  },

  friendSent: {
    float: "right",
    clear: "both",
    padding: "20px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "10px",
    backgroundColor: "#3498DB",
    color: "white",
    width: "300px",
    borderRadius: "11px",
  },

  chatHeader: {
    width: "calc(100% - 301px)",
    height: "50px",
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    position: "fixed",
    marginLeft: "301px",
    fontSize: "18px",
    textAlign: "center",
    color: "black",
    paddingTop: "10px",
    boxSizing: "border-box",
  },
});

export default styles;
