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

  function handleClick() {
    console.log("deleted id: ", postInfo.id);
    deletePost(postInfo.id);
  }

  // function handleEditClick(event) {
  //   event.target.innerHTML === "Edit Post"
  //     ? (event.target.innerHTML = "done")
  //     : (event.target.innerHTML = "Edit Post");
  // }

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
          {/* <Button
            className="editButton"
            size="small"
            style={{}}
            value="Edit Post"
            onClick={(event) => {
              handleEditClick(event);
            }}
          >
            Edit Post
          </Button>
          <Button
            className="doneButton"
            style={{ display: "none" }}
            size="small"
            onClick={(event) => {
              handleEditClick(event);
            }}
          >
            Done
          </Button> */}
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
          <Link style={{ textDecoration: "none" }} to="/dashboard">
            <Button size="small">Dashboard</Button>
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
      dispatch(deletePost(id));
    },
  };
}
const connectedPostDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);

export default connectedPostDetail;
