import React, { Component } from 'react';
import './App.css';
import FormContainer from './FormContainer.js'
import { getPosts } from './actions.js'
import { connect } from 'react-redux'
import Posts from './Posts.js'

class App extends Component {

  componentDidMount(){
    this.props.getPosts()
  }

  render() {
    return (
      <div className="App">
        <FormContainer />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { getPosts })(App);
