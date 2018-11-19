import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from './actions.js'

class FormContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      title: '',
      body: '',
      file: null
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUpload = event => {
    this.setState({
      file: event.target.files[0]
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const title = this.state.title
    const body = this.state.body
    const file = this.state.file
    const post = {post: {title: title, body: body, file: file}}
    this.props.addPost(post)
    this.setState({
      title: '',
      body: '',
      file: null
    })
    document.getElementById("file").value = null
  }

  render(){
    return(
      <div>
        <h2>Upload File</h2>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="title" id="title" placeholder="title" onChange={this.handleOnChange} />
          <input type="text" name="body" id="body" placeholder="body" onChange={this.handleOnChange} />
          <input type="file" name="file" id="file" onChange={this.handleUpload} />
          <input type="submit" />
        </form>
     </div>
    )
  }
}

export default connect(null, { addPost })(FormContainer)
