import React, { useState } from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { CssBaseline } from "@material-ui/core";
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // alert(`Message Title: ${messageTitle}
    // Message: ${message}`);
    let currentStorage = `${localStorage.getItem("message")}, ${message}`;
    localStorage.setItem("message", currentStorage);
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
              label="First Name"
              variant="outlined"
              type="text"
              name="first_name"
              onChange={(event) => setFirstName(event.target.value)}
            ></TextField>
            <br />
            <br />
            <TextField
              required
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              type="text"
              name="last_name"
              onChange={(event) => setLastName(event.target.value)}
            ></TextField>
            <br />
            <br />
            <TextField
              required
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="text"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
            ></TextField>
            <br />
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
