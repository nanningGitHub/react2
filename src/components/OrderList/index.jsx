import React, { Component } from "react";
import OrderItem from "../OrderItem";

export default class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch("/mock/orders.json").then(res => {
      console.log(res);
      if (res.ok) {
        res.json().then(data => {
          this.setState({
            data
          });
        });
      }
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        {data.map(item => {
          return (
            <OrderItem key={item.id} data={item} onSubmit={this.handleSubmit} />
          );
        })}
      </div>
    );
  }
  handleSubmit = (id, comment, start) => {
    this.state.data.map((item) => {
      return item.id===id?
      {
        .. 
      }
    });
  };
}
