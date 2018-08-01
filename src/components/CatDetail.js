import React from 'react';
import { Card, CardTitle, Col, Button } from 'react-materialize';

export default class CatDetail extends React.Component {


  state = {
    showForm: false,
    catName: ""
  }


  handleSubmit = (event) => {
    event.preventDefault();
    let catObject = {
      name: this.state.catName,
      cat_id: this.props.cat.id
    }
    this.props.getBattleCatObject(catObject)
    this.handleClick()
  }

  handleChange = (event) => {
      event.persist();
      this.setState({
        [event.target.id]: event.target.value
      })
  }

  handleClick = () => {
    this.setState((previousState) => {
      return {
        showForm: !previousState.showForm
      }
    })
  }

  renderForm = () => {
    if (this.props.currentTeamId){
      return (
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <label>Name:
              <input type="text" id="catName" name="name" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </React.Fragment>
      )
    } else {
      return (
        <p> Select a team from the right! </p>
      )
    }
  }

  render(){
    console.log('logging current team', this.props)
    return (
      <div className="row">
      <div className="col s6 offset-s3">
      <Card key={this.props.cat.id} horizontal header={<CardTitle image={this.props.cat.image_url}></CardTitle>} actions={[<Button onClick={this.handleClick}>Conscript Cat</Button>]}>
          <p>Health Points: {this.props.cat.health_points}</p>
          <p>Attack Points: {this.props.cat.attack_points}</p>
          <p>Speed Points: {this.props.cat.speed_points}</p>
          <p>Defense Points: {this.props.cat.defense_points}</p>
          {this.state.showForm && this.renderForm()}
        </Card>
      </div>
      </div>
    )
  }
}
