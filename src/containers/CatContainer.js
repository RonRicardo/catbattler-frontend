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
    this.setState({selectedCat: cat})
  }

  render() {
    return (
      <div>
      <CatNav  catsArray={this.state.catsArray} selectCat={this.selectCat}/>
        <div>
        {this.state.selectedCat ?
          <CatDetail
           currentTeamId={this.props.currentTeamId}
           getBattleCatObject={this.props.getBattleCatObject} cat={this.state.selectedCat} />
        :
         <p></p>
        }

        </div>



      </div>
    )
  }
}
