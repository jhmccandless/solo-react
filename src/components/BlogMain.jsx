import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  addBlog: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.primary.light,
  },
}));

// function ListItemLink(currentBlogState) {
//   return <ListItem button component="a" {...currentBlogState} />;
// }

function BlogMain({ currentBlogState }) {
  const classes = useStyles();
  return (
    <>
      <h3>Current List of Blogs</h3>

      <div className={classes.root}>
        <List component="nav" aria-label="secondary">
          {currentBlogState.map((el, index) => {
            return (
              <div key={index}>
                <ListItem button>
                  <ListItemText primary={el.title} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
          <div className={classes.addBlog}>
            <ListItem button>
              <ListItemText primary="Add Post" />
            </ListItem>
          </div>
        </List>
      </div>

      {/* {currentBlogState.map((el, index) => {
        return <li key={index}>{el.title}</li>;
      })} */}
    </>
  );
}

function mapStateToProps(state) {
  return { currentBlogState: state.blogPosts };
}

function mapDispatchToProps(dispatch) {
  return {
    function() {
      dispatch();
    },
  };
}

const connectedBlogMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogMain);

export default connectedBlogMain;
