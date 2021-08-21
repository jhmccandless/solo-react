import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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

function AboutMe() {
  const classes = useStyles();
  return (
    <>
      <Card
        className={classes.root}
        style={{ margin: "30px", display: "inline-block", width: "500px" }}
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Welcom to the Typical Forum!
          </Typography>
          <Typography variant="body2" component="p">
            Founded in 2008, Stack Overflow’s public platform is used by nearly
            everyone who codes to learn, share their knowledge, collaborate, and
            build their careers. Our products and tools help developers and
            technologists in life and at work. These products include Stack
            Overflow for Teams, Stack Overflow Advertising, and Stack Overflow
            for Talent and Jobs. Stack Overflow for Teams, our core SaaS
            collaboration product, is helping thousands of companies around the
            world as the transition to remote work, address business continuity
            challenges, and undergo digital transformation. Whether it’s on
            Stack Overflow or within Stack Overflow for Teams, community is at
            the center of all that we do.
            <br />
          </Typography>
        </CardContent>
        <CardActions style={{ display: "inline-block" }}>
          <Link style={{ textDecoration: "none" }} to="/contact_me">
            <Button size="small">Contact Us</Button>
          </Link>
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

let connectedAboutMe = connect(mapStateToProps, mapDispatchToProps)(AboutMe);

export default connectedAboutMe;
