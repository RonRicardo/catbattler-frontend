import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CatContainer from './containers/CatContainer'
import TeamContainer from './containers/TeamContainer'
import { fetchUser } from './adapter/adapter'


class App extends Component {

  state = {
    currentUser: null,
    currentUserTeams: [],
    currentTeamId: null,
    battleCatObject: {}
  }

  componentDidMount(){
    fetchUser()
      .then(user => {
        this.setState(
          {currentUser: user,
           currentUserTeams: user.teams
         })
    })
  }

  getBattleCatObject = (catObject) => {

    this.setState((previousState) => {
      return {
        battleCatObject: {...previousState.battleCatObject, ...catObject}
      }
    }, () => console.log("this is in app, battleCatObject: ", this.state.battleCatObject))
  }

  getCurrentTeamId = (teamId) => {

    this.setState((previousState) => {
      return {
        currentTeamId: teamId,
        battleCatObject: {...previousState.battleCatObject, team_id: teamId}
      }
    }, () => console.log("this is in app, battleCatObject: ", this.state.battleCatObject))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to CAT BATTLER</h1>
        </header>
        <CatContainer getBattleCatObject={this.getBattleCatObject} />
        { this.state.currentUser? <TeamContainer getCurrentTeamId={this.getCurrentTeamId} user={this.state.currentUser} teams={this.state.currentUserTeams}/>
            :
          <div>Create a team</div>}
      </div>
    );
  }
}

export default App;
