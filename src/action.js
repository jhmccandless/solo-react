export function addBlogPost(data) {
  return {
    type: "ADD_POST",
    data,
  };
}

export function updatePostInstance(index, key, value) {
  return {
    type: "UPDATE_POST",
    index,
    key,
    value,
  };
}

export function deletePost(data) {
  return {
    type: "DELETE_POST",
    data,
  };
}
