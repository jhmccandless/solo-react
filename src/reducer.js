const initiatState = {
  blogPosts: [
    {
      id: 0,
      title: "first Post",
      content:
        "what If I would like to subscribe to just part of the state? is that possible? I went ahead with something a little bit different: 1. save persisted state outside of redux. 2. load persisted state inside react constructor(or with componentWillMount) with redux action. Is 2 is totally fine instead of loading the persisted data on store directly? (which I'm trying to keep separately for SSR). By the way thanks for Redux! It's awesome, I love it, after getting lost with my big project code now it's all back to simple and predictable :)",
    },
    {
      id: 1,
      title: "Second Post",
      content:
        "what If I would like to subscribe to just part of the state? is that possible? I went ahead with something a little bit different: 1. save persisted state outside of redux. 2. load persisted state inside react constructor(or with componentWillMount) with redux action. Is 2 is totally fine instead of loading the persisted data on store directly? (which I'm trying to keep separately for SSR). By the way thanks for Redux! It's awesome, I love it, after getting lost with my big project code now it's all back to simple and predictable :)",
    },
  ],
};

function blog_reducer(state = initiatState, action) {
  console.log(action);
  switch (action.type) {
    // case "LOCALSTORAGE_ADD":
    //   return {
    //     ...state,
    //   };
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
