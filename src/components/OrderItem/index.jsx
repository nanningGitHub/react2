import React, { Component } from 'react'

export default class OrderItem extends Component {
  render() {
    return (
      <div className='orderItem'>
        <div className='orderItem__picContainer--enable'>
          <img></img>
        </div>
        <div>
          <div>产品名称</div>
          <div>商家名称</div>
          <div>
            <button>评价</button>
          </div>
        </div>
      </div>
    )
  }
}
