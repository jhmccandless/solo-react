import React, { useState } from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { addToLocalStorage } from "../action";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 15,
  },
});

function ContactMe() {
  const classes = useStyles();

  const [messageTitle, setMessageTitle] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    console.log("handling");
    event.preventDefault();
    // alert(`Message Title: ${messageTitle}
    // Message: ${message}`);
    event.target.reset();
  }

  return (
    <>
      <Card
        className={classes.root}
        style={{ margin: "30px", display: "inline-block" }}
      >
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Contact The Typical Forum!
            </Typography>

            <br />
            <TextField
              required
              id="outlined-basic"
              label="Message Title"
              variant="outlined"
              type="text"
              name="messageTitle"
              onChange={(event) => setMessageTitle(event.target.value)}
            ></TextField>
            <br />
            <br />
            <TextField
              required
              style={{ width: "450px" }}
              minRows={6}
              id="outlined-textarea"
              label="Message"
              multiline
              variant="outlined"
              type="text"
              name="message"
              onChange={(event) => setMessage(event.target.value)}
            ></TextField>
            <br />
            <CardActions style={{ display: "inline-block" }}>
              <Button type="submit" size="small">
                Send Message
              </Button>
            </CardActions>
          </CardContent>
        </form>
      </Card>
    </>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    // addToLocalStorage: function (data) {
    //   dispatch(addToLocalStorage(data));
    // },
  };
}

let connectedContactMe = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactMe);

export default connectedContactMe;
