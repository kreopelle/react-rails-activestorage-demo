import React from 'react'

const Posts = (props) => {

  return(
    <div className="posts">
    <ul>
    {props.posts.map((post) => <li key={post.id}><strong>{post.title}</strong> - {post.body} - {post.file_url}</li>)}
    </ul>
    </div>
  )
}

export default Posts
