import React from 'react';
import Image from 'react-image-resizer';

const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
    },
};
export default class CatCard extends React.Component {

  handleClick = () => {
    this.props.selectCat(this.props.cat)
  }

  render() {
    return (
    <div onClick={() => this.handleClick()}>
      <Image
        src={this.props.cat.image_url}
        height={256}
        width={256}
        style={style.image}
        />
    </div>
    )
  }
}
