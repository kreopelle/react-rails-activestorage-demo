import React from 'react'

const Posts = (props) => {

  const renderPosts = this.props.posts.map(post => {
    <li key={post.id}><strong>{post.title}</strong> - {post.body} - {post.file_url}</li>
  })

  return(
    <div className="posts">
    {this.renderPosts}
    </div>
  )
}

export default Posts
