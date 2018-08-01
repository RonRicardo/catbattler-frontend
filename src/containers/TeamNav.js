import React from 'react';
import {Button, SideNav, NavItem, Dropdown} from 'react-materialize'
import TeamList from './TeamList';

export default class TeamNav extends React.Component {

state = {
  team: null,
  form: false,
  teamName: ""
}

  handleTeamSelect = (selectedTeam) => {
    this.setState({team: selectedTeam})
    this.props.getCurrentTeamId(selectedTeam.id)
  }

  renderTeams = () => {
    return this.props.teams.map(
      (team) => {
        return (<React.Fragment key={team.id}>
                <li style={{textAlign: 'center'}} onClick={() => this.handleTeamSelect(team)}>{team.name}</li>
                {/* <NavItem divider /> */}
                </React.Fragment> )
      }
    )
  }

  renderForm = () => {

      return (
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <label>Name:
              <input type="text"  name="teamName" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </React.Fragment>
      )
  }

  handleCreate = () => {
    this.setState((previousState) => {
      return {
        form: !previousState.form
      }
    })
  }

  handleChange = (event) => {
      event.persist();
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createTeam(this.state.teamName)
    this.handleCreate()
  }

  render() {
    return (
    <SideNav
      fixed={true}
      trigger={<Button> </Button>}
      options={{
        closeOnMouseLeave: true,
        edge: 'right'
      }}
      >
      <h2>Welcome, {this.props.user.username}</h2>
        <Dropdown trigger={
            <Button>Teams!</Button>
            }>
            <ul>
              {this.renderTeams()}
              <li style={{textAlign: 'center'}} onClick={this.handleCreate} >{'Create Team'}</li>
            </ul>
        </Dropdown>

        {this.state.form && this.renderForm()}
        { this.state.team ? <TeamList team={this.state.team} />
          :
          <p> No team selected </p>
        }
    </SideNav>
    )
  }
}
