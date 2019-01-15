import React, { Component } from "react";
import './style.css'

export default class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      stars: props.data.stars || 0,
      comment: props.data.comment || ""
    };
  }
  render() {
    const { shop, product, price, picture, ifCommented } = this.props.data;
    return (
      <div className="orderItem">
        <div className="orderItem__picContainer--enable">
          <img className="orderItem__pic" src={picture} />
        </div>
        <div className="orderItem__content">
          <div className="orderItem__product">{product}</div>
          <div className="orderItem__shop">{shop}</div>
          <div className="orderItem__detail">
            <div className="orderItem__price">{price}</div>
            <div className="">
              {ifCommented ? (
                <button className="orderItem__btn orderItem_btn--red">
                  已评价
                </button>
              ) : (
                <button
                  className="orderItem__btn orderItem_btn--red"
                  onClick={this.handleOPenEdit}
                >
                  评价
                </button>
              )}
            </div>
          </div>
        </div>
        {this.state.editing ? this.renderEditArea() : null}
      </div>
    );
  }
  renderEditArea() {
    return (
      <div className="orderItem__commentContainer">
        <textarea
          onChange={this.handleCommentChange}
          value={this.state.comment}
          className="orderItem__comment"
        />
        {this.renderStars()}
        <button
          onClick={this.handleSubmitComment}
          className="orderItem__btn orderItem__btn--red"
        >
          提交
        </button>
        <button
          onClick={this.handleCancelComment}
          className="orderItem__btn orderItem__btn--grey"
        >
          取消
        </button>
      </div>
    );
  }

  renderStars() {
    const { stars } = this.state;
    return (
      <div>
        {[1, 2, 3, 4, 5].map((item, index) => {
          const lightClass = stars >= item ? "orderItem__star--light" : "";
          return (
            <span
              className={"orderItem__star" + lightClass}
              key={index}
              onClick={this.handleClickStars.bind(this, item)}
            >
              ★
            </span>
          );
        })}
      </div>
    );
  }
  handleCommentChange = e => {
    this.setState({
      comment: e.target.value
    });
  };
  handleClickStars = stars => {
    this.setState({
      stars
    });
  };
  handleOPenEdit = () => {
    this.setState({
      editing: true
    });
  };
  handleCancelComment = () => {
    this.setState({
      editing: false,
      stars: this.props.data.stars || 0,
      comment: this.props.comment || ""
    });
  };
  handleSubmitComment = () => {
    const { id } = this.props.data;
    const { comment, stars } = this.state;
    this.setState({
      editing: false
    });
    this.props.onSubmit(id, comment, stars);
  };
}
