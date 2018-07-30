import React from 'react';
import CatCard from '../components/CatCard';

const CatList = (props) => {
  const catsArray = props.catsArray;

  const renderCards = () => {
    return catsArray.map( cat => {
      return <CatCard cat={cat} key={cat.id} selectCat={props.selectCat}/>
    })
  }

  return (<React.Fragment>
      {renderCards()}
    </React.Fragment>
  )
}

export default CatList
