import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../middlewares/fetchProducts'
import { getProducts } from '../reducers/productReducer'
 
class Products extends Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts())
  }
  
  render() {
    return (
      <div>
          {
            this.props.products ?
              <p>{ this.props.products[1] }</p> :
            <p>No data available</p>
          }
      </div>
    )
  }
}
 
const mapStateToProps = state => {
    return {
      products: getProducts(state)
    }
}
export default connect(mapStateToProps)(Products)