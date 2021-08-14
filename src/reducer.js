const initiatState = {
  blogPosts: [
    { title: "first blog", content: "lorem epsum" },
    { title: "Second blog", content: "lorem epsum" },
  ],
};

function blog_reducer(state = initiatState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default blog_reducer;
