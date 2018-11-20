import React, { Component } from 'react';
import './App.css';
import FormContainer from './FormContainer.js'
import { getPosts } from './actions.js'
import { connect } from 'react-redux'
import Posts from './Posts.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormContainer />
      </div>
    );
  }
}

export default connect(null, { getPosts })(App);
