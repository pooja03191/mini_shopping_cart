import React, { Component } from 'react'
 
class Header extends Component {
  render() {
    return (
      <div style = {{ padding: '5px' }}>
          <h2 style = {{ textAlign: 'center' }}>My Mini Shopping Cart</h2>
          <hr />
      </div>
    )
  }
}
 
export default Header