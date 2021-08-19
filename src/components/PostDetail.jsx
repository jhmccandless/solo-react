import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { deletePost } from "../action";

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

function PostDetail({ postInfo, deletePost }) {
  const classes = useStyles();
  console.log(postInfo);

  function handleClick() {
    console.log("click");
    deletePost(postInfo.id);
  }

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
            {postInfo.blogPosts.title}
          </Typography>
          <Typography variant="body2" component="p">
            {postInfo.blogPosts.content}
            <br />
          </Typography>
        </CardContent>
        <CardActions style={{ display: "inline-block" }}>
          <Button size="small">Edit Post</Button>
          <Link style={{ textDecoration: "none" }} to="/dashboard">
            <Button
              size="small"
              onClick={() => {
                handleClick();
              }}
            >
              Delete Post
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  let id = ownProps.match.params.index;
  return {
    postInfo: { blogPosts: state.blogPosts[id], id },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: function (id) {
      console.log("deleting");
      dispatch(deletePost(id));
    },
  };
}
const connectedPostDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);

export default connectedPostDetail;
