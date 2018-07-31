import React from 'react';
import {Button, SideNav, NavItem, Dropdown} from 'react-materialize'
import TeamList from './TeamList';

export default class TeamNav extends React.Component {

state = {
  team: null
}

  handleTeamSelect = (selectedTeam) => {
    this.setState({team: selectedTeam}, () => console.log(this.state.team))
  }

  renderTeams = () => {
    return this.props.teams.map(
      (team) => {
        return (<React.Fragment>
                <NavItem onClick={() => this.handleTeamSelect(team)}>{team.name}</NavItem>
                <NavItem divider />
                </React.Fragment> )
      }
    )
  }


  render() {
    return (
    <SideNav
      fixed={true}
      trigger={<Button>idk why this breaks</Button>}
      options={{
        closeOnMouseLeave: true,
        edge: 'r'
      }}
      >
      <h2>Welcome {this.props.user.username}</h2>
        <Dropdown trigger={
            <Button>Teams!</Button>
            }>
          {this.renderTeams()}
        </Dropdown>
        { this.state.team ? <TeamList team={this.state.team} />
          :
          <p> No team selected </p>
        }
    </SideNav>
    )
  }
}
