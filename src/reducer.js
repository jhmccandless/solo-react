const initiatState = {
  blogPosts: [
    { id: 0, title: "first blog", content: "lorem epsum" },
    { id: 1, title: "Second blog", content: "lorem epsum" },
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
      state.blogPosts.splice(Number(action.data), 1);
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default blog_reducer;
