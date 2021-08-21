export function addBlogPost(data) {
  return {
    type: "ADD_POST",
    data,
  };
}

export function deletePost(data) {
  return {
    type: "DELETE_POST",
    data,
  };
}

// export function addToLocalStorage(data) {
//   return {
//     type: "LOCALSTORAGE_ADD",
//     data,
//   };
// }

// export function updatePostInstance(index, key, value) {
//   return {
//     type: "UPDATE_POST",
//     index,
//     key,
//     value,
//   };
// }
