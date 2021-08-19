const initiatState = {
  blogPosts: [
    { title: "first blog", content: "lorem epsum" },
    { title: "Second blog", content: "lorem epsum" },
  ],
};

function blog_reducer(state = initiatState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        blogPosts: [
          ...state.blogPosts,
          {
            title: action.data.blogTitle,
            content: action.data.blogPost,
          },
        ],
      };
    case "DELETE_POST":
      let arr = state.blogPosts;
      let newBlogPosts = state.blogPosts.splice(Number(action.data), 1);
      console.log(arr);
      console.log(action.data);
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default blog_reducer;
