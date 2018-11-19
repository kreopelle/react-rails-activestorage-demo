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

  render(){
    return(
      <div>
        <h2>Upload File</h2>
        <form>
          <input type="text" name="title" id="title" placeholder="title" />
          <input type="text" name="description" id="description" placeholder="description" />
          <input type="file" name="file" id="file" />
          <input type="submit" />
        </form>
     </div>
    )
  }
}

export default connect()(FormContainer)
