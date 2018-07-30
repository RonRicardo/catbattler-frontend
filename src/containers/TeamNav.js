import React from 'react';
import {Button, SideNav} from 'react-materialize'

export default class TeamNav extends React.Component {
  render() {
    return (
    <SideNav
      fixed={true}
      trigger={<Button>Pick A Cat</Button>}
      options={{ closeOnMouseLeave: true }}
      >
      <h1>CHOOSE YOUR FIGHTER</h1>
      <p> sdfefwwe </p>
    </SideNav>
    )
  }
}
