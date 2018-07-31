import React from 'react';
import Image from 'react-image-resizer';

const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
    },
};
export default class BattleCatCard extends React.Component {

  handleClick = () => {
    // this.props.selectCat(this.props.battleCat)
    console.log(this.props.battleCat)
  }

  render() {
    console.log(this.props.battleCat)
    return (
    <div onClick={() => this.handleClick()}>
      <Image
        src={this.props.battleCat.cat.image_url}
        height={256}
        width={256}
        style={style.image}
        />
        <h5>{this.props.battleCat.name}</h5>
    </div>
    )
  }
}
