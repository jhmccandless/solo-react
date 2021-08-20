import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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

  return (
    <>
      <Card
        className={classes.root}
        style={{ margin: "30px", display: "inline-block" }}
      >
        <form
        // onSubmit={(event) => {
        //   handleSubmit(event);
        // }}
        >
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Contact Molly!
            </Typography>

            <label>Message Title </label>
            <br />
            <input
              type="text"
              name="messageTitle"
              onChange={(event) => setMessageTitle(event.target.value)}
            ></input>
            <br />
            <br />
            <label>Message</label>
            <br />
            <input
              type="textBox"
              name="message"
              onChange={(event) => setMessage(event.target.value)}
            ></input>
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

// function mapDispatchToProps(dispatch) {
//   return {
//     sendMessage: function (data) {
//       dispatch(sendMessage(data));
//     },
//   };
// }

let connectedContactMe = connect(
  mapStateToProps
  // mapDispatchToProps
)(ContactMe);

export default connectedContactMe;
