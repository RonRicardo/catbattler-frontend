import React from 'react';

class TrainerLogIn extends React.Component {

  state = {
    username: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.populateUser(this.state.username)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input type="text" id="username"  onChange={this.handleChange} />
          <input type="submit" value="Sign Up / Log In"/>
        </form>
      </div>
    );
  }
}

export default TrainerLogIn;
