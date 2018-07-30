import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CatContainer from './containers/CatContainer'
import TeamContainer from './containers/TeamContainer'
import { fetchUser } from './adapter/adapter'


class App extends Component {

  state = {
    currentUser: null,
    currentUserTeams: []
  }

  componentDidMount(){
    fetchUser()
      .then(user => {
        this.setState(
          {currentUser: user,
           currentUserTeams: user.teams
         }, () => console.log(this.state.currentUser))
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to CAT BATTLER</h1>
        </header>
        <CatContainer />
        { this.state.currentUserTeams && <TeamContainer teams={this.state.currentUserTeams}/> }
      </div>
    );
  }
}

export default App;
