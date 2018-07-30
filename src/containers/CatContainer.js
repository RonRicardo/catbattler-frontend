import React from 'react';
import { fetchIndex } from '../adapter/adapter';
import CatNav from './CatNav';
import CatDetail from '../components/CatDetail';


export default class CatContainer extends React.Component {
  state = {
    catsArray: [],
    selectedCat: null
  }

  componentDidMount(){
    fetchIndex()
      .then(data => {
        this.setState({
          catsArray: data
        })
      })
  }

  selectCat = (cat) => {
    this.setState({selectedCat: cat}, () => console.log(this.state.selectedCat) )
  }

  render() {
    return (
      <div>
      <CatNav catsArray={this.state.catsArray} selectCat={this.selectCat}/>
        <div>
        {this.state.selectedCat ?
          <CatDetail cat={this.state.selectedCat} />
        :
         <p></p>
        }
        {this.p}
        </div>



      </div>
    )
  }
}
