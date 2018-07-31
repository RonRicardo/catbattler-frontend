import React from 'react';
import TeamNav from './TeamNav';

export default class TeamContainer extends React.Component {
  render() {
    return (
      <div>
      <TeamNav user={this.props.user} teams={this.props.teams} />
      </div>
    );
  }

}
