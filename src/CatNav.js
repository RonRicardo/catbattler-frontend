import React from 'react';
import {Button, SideNav} from 'react-materialize'
import CatList from './containers/CatList'

export default class CatNav extends React.Component {
  render() {
    return (
    <SideNav
      trigger={<Button>Pick A Cat</Button>}
      options={{ closeOnMouseLeave: true }}
      >
      <h1>CHOOSE YOUR FIGHTER</h1>
      <CatList catsArray={this.props.catsArray} selectCat={this.props.selectCat} />
    </SideNav>
    )
  }
}
