import React, { Component } from 'react'

class FormContainer extends Component {

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
