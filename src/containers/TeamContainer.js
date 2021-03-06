import React from 'react';
import TeamNav from './TeamNav';

export default class TeamContainer extends React.Component {
  render() {
    return (
      <div>
      <TeamNav
        createTeam={this.props.createTeam}
        getCurrentTeamId={this.props.getCurrentTeamId}
        user={this.props.user}
        teams={this.props.teams}
      />
      </div>
    );
  }

}
