import React, { Component } from 'react'

class FormContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      title: '',
      description: '',
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

  render(){
    return(
      <div>
        <h2>Upload File</h2>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="title" id="title" placeholder="title" onChange={this.handleOnChange} />
          <input type="text" name="description" id="description" placeholder="description" onChange={this.handleOnChange} />
          <input type="file" name="file" id="file" onChange={this.handleUpload} />
          <input type="submit" />
        </form>
     </div>
    )
  }
}

export default connect()(FormContainer)
