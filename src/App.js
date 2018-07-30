import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CatContainer from './containers/CatContainer'
import { fetchUser } from './adapter/adapter'


class App extends Component {

  state = {
    currentUser: null
  }

  componentDidMount(){
    fetchUser()
      .then(user => {this.setState({currentUser: user})
    }, () => console.log(this.state.currentUser))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to CAT BATTLER</h1>
        </header>
        <CatContainer />
      </div>
    );
  }
}

export default App;
