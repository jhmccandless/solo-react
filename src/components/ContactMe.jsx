import React from "react";
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
  return (
    <>
      <Card
        className={classes.root}
        style={{ margin: "30px", display: "inline-block" }}
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Contact!!!
          </Typography>
          <Typography variant="body2" component="p">
            message form component
            <br />
          </Typography>
        </CardContent>
        <CardActions style={{ display: "inline-block" }}>
          <div>
            <Button size="small">Send Message</Button>
          </div>
        </CardActions>
      </Card>
    </>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    function() {
      dispatch();
    },
  };
}

let connectedContactMe = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactMe);

export default connectedContactMe;
