export function addPost(post){
  return (dispatch) => {
    dispatch({ type: 'START_ADD_POST_REQUEST' })
    const postData = new FormData()
    postData.append("post[title]", post.post.title)
    postData.append("post[description]", post.post.description)
    postData.append("post[file]", post.post.file)
    return fetch('/posts', {
      method: 'POST',
      body: postData,
      contentType: false,
    })
    .then(resp => resp.json())
    .then(post => dispatch({ type: 'ADD_POST', post }))
  }
}
