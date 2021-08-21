import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { addBlogPost } from "../action";

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

function AddPost({ addBlogPost }) {
  const classes = useStyles();

  const [blogTitle, setBlogTitle] = useState("");
  const [blogPost, setBlogPost] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addBlogPost({ blogTitle, blogPost });
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
              Post Info:
            </Typography>

            <br />
            <TextField
              id="outlined-basic"
              label="Post Title"
              variant="outlined"
              type="text"
              name="blogTitle"
              onChange={(event) => setBlogTitle(event.target.value)}
            />
            <br />
            <br />
            <TextField
              style={{ width: "450px" }}
              minRows={6}
              id="outlined-textarea"
              label="Post Body"
              multiline
              variant="outlined"
              type="text"
              name="blogPost"
              onChange={(event) => setBlogPost(event.target.value)}
            />
            <br />
            <br />
            <CardActions style={{ display: "inline-block" }}>
              <Button type="submit" size="small">
                Post Info
              </Button>
              <Link style={{ textDecoration: "none" }} to="/dashboard">
                <Button size="small">Dashboard</Button>
              </Link>
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
    addBlogPost: function (data) {
      dispatch(addBlogPost(data));
    },
  };
}

let connectedAddPost = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default connectedAddPost;
