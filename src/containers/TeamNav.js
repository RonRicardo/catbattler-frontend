import React from 'react';
import {Button, SideNav, NavItem, Dropdown} from 'react-materialize'
import TeamList from './TeamList';

export default class TeamNav extends React.Component {

state = {
  team: null
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

  handleCreate = () => {
    console.log("in handleCreate, id:", this.props.user.id)
  }

  render() {
    return (
    <SideNav
      fixed={true}
      trigger={<Button>idk why this breaks</Button>}
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
        { this.state.team ? <TeamList team={this.state.team} />
          :
          <p> No team selected </p>
        }
    </SideNav>
    )
  }
}
