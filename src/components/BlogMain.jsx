import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
  addBlog: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.primary.light,
  },
  title: {
    fontSize: 20,
  },
}));

// function ListItemLink(currentBlogState) {
//   return <ListItem button component="a" {...currentBlogState} />;
// }

function BlogMain({ currentBlogState }) {
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
            Current Blogs
          </Typography>

          <List
            style={{ borderRadius: "20px", margin: "30px 30px 0 30px auto" }}
            component="nav"
            aria-label="secondary"
          >
            {currentBlogState.map((el, index) => {
              return (
                <div key={index}>
                  <Link
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    to={`/post_detail/${index}`}
                  >
                    <ListItem button>
                      <ListItemText primary={el.title} />
                    </ListItem>
                  </Link>
                  <Divider />
                </div>
              );
            })}
          </List>
        </CardContent>
        <CardActions style={{ display: "inline-block" }}>
          <div>
            <Button size="small">Add Post</Button>
          </div>
        </CardActions>
      </Card>

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
