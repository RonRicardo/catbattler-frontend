import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CatContainer from './containers/CatContainer'
import TeamContainer from './containers/TeamContainer'
import { fetchUser, postBattleCat, postTeam } from './adapter/adapter'


class App extends Component {

  state = {
    currentUser: null,
    currentUserTeams: [],
    currentTeamId: null,
    battleCatObject: {}
  }

  populateUser = () => {
    fetchUser()
      .then(user => {
        this.setState(
          {currentUser: user,
           currentUserTeams: user.teams
         })
    })
  }



  componentDidMount(){
    this.populateUser()
  }

  createTeam = (teamName) => {
    postTeam({name: teamName, trainer_id: this.state.currentUser.id})
    .then(team => {
      this.setState((previousState => {
        return {
          currentUserTeams: [...previousState.currentUserTeams, team]
        }
      }))
    })
  }

  getBattleCatObject = (catObject) => {

    this.setState((previousState) => {
      return {
        battleCatObject: {...previousState.battleCatObject, ...catObject}
      }
    }, () => {
      postBattleCat(this.state.battleCatObject)
      .then(data => this.populateUser())
    })
  }

  getCurrentTeamId = (teamId) => {

    this.setState((previousState) => {
      return {
        currentTeamId: teamId,
        battleCatObject: {...previousState.battleCatObject, team_id: teamId}
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to CAT BATTLER</h1>
        </header>
        <CatContainer
        currentTeamId={this.state.currentTeamId}
        getBattleCatObject={this.getBattleCatObject} />
        { this.state.currentUser?
            <TeamContainer
              createTeam={this.createTeam}
              getCurrentTeamId={this.getCurrentTeamId}
              user={this.state.currentUser}
              teams={this.state.currentUserTeams}
            />
            :
          <div>Create a team</div>}
      </div>
    );
  }
}

export default App;
