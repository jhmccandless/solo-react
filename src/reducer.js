const initiatState = {
  blogPosts: [
    { title: "first blog", content: "lorem epsum" },
    { title: "Second blog", content: "lorem epsum" },
  ],
};

function blog_reducer(state = initiatState, action) {
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
    default:
      return state;
  }
}

export default blog_reducer;
