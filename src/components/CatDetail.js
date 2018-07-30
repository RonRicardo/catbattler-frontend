import React from 'react';
import { Card, CardTitle, Col } from 'react-materialize';

export default class CatDetail extends React.Component {

  render(){
    console.log(this.props)
    return (
      <div className="row">
      <div className="col s6 offset-s3">
      <Card horizontal header={<CardTitle image={this.props.cat.image_url}></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
          <p>Health Points: {this.props.cat.health_points}</p>
          <p>Attack Points: {this.props.cat.attack_points}</p>
          <p>Speed Points: {this.props.cat.speed_points}</p>
          <p>Defense Points: {this.props.cat.defense_points}</p>

        </Card>
      </div>
      </div>
    )
  }
}
