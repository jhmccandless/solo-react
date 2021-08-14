import React from "react";
import { connect } from "react-redux";

function BlogMain({ currentBlogState }) {
  return (
    <>
      <h2>Current List of Blogs</h2>
      {currentBlogState.map((el, index) => {
        return <li key={index}>{el.title}</li>;
      })}
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
