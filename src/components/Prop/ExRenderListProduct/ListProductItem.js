import React, { Component } from 'react'

export default class ListProductItem extends Component {
  renderListShoe () {
    let {dataShoeList} = this.props

    let contentCardshoe = dataShoeList.map((item, index) => {
      return(
          <div key={index} className="col-4 mt-3">
            <ItemCard dataShoe={item} />
          </div>
      )
    })
    return contentCardshoe;
  }


  render() {
    return <div className="row">{this.renderListShoe()}</div>;
  }
}
