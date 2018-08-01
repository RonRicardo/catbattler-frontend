import React from 'react';
import BattleCatCard from '../components/BattleCatCard';

export default class TeamList extends React.Component {

  renderBattleCatCard = () => {
    return this.props.team.battle_cats.map( (battleCat) => {
      return <BattleCatCard battleCat={battleCat} key={battleCat.id} />
    })
  }

  render() {
    return (
      <React.Fragment>
      <h4>Team: {this.props.team.name}</h4>
      {this.renderBattleCatCard()}
      </React.Fragment>
    )
  }
}
