import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CatContainer from './containers/CatContainer'
import TeamContainer from './containers/TeamContainer'
import TrainerLogIn from './components/TrainerLogIn'
import { fetchUser, postBattleCat, postTeam } from './adapter/adapter'


class App extends Component {

  state = {
    currentUser: null,
    currentUserTeams: [],
    currentTeamId: null,
    battleCatObject: {}
  }

  populateUser = (username) => {
    fetchUser(username)
      .then(user => {
        this.setState(
          {currentUser: user,
           currentUserTeams: user.teams
         })
    })
  }

  // componentDidMount(){
  //   this.populateUser()
  // }

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
      .then(battleCat => {
        this.setState((previousState) =>{
          return {
            currentUserTeams: previousState.currentUserTeams.map((team) =>{
              if(team.id === previousState.currentTeamId){
                team.battle_cats = [...team.battle_cats, battleCat]
                return team
              } else {
                return team
              }
            })
          }
        })
      })
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

  renderApp = () => {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }

  render() {
    console.log(this.state.currentUser)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to CAT BATTLER</h1>
        </header>
      <React.Fragment>
        { this.state.currentUser ? this.renderApp() : <TrainerLogIn populateUser={this.populateUser} /> }
      </React.Fragment>
    </div>
    )
  }

}

export default App;
