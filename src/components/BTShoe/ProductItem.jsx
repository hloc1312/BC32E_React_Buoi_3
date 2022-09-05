import React, { Component } from "react";
import AddToCart from "./AddToCart";
import Detail from "./Detail";

export default class ProductItem extends Component {
  render() {
    const {
      data,
      handleDetail,
      shoeDefault,
      cart,
      handleCart,
      handleRemoveCart,
      handleQuantity,
    } = this.props;
    // console.log(shoeDefault);

    return (
      <>
        {data.map((item) => {
          return (
            <div className="col-4 my-3" key={item.id}>
              <div className="card" style={{ minHeight: "450px" }}>
                <img
                  className="card-img-top"
                  src={item.image}
                  alt={item.name}
                  title={item.name}
                />
                <div className="card-body">
                  <h4 className="card-title" style={{ minHeight: "60px" }}>
                    {item.name}
                  </h4>
                  <p className="card-text text-danger font-weight-bold">
                    {item.price}$
                  </p>
                </div>
                <div className="card-footer" style={{ padding: "10px" }}>
                  <AddToCart
                    cart={cart}
                    handleCart={() => handleCart(item)}
                    handleRemoveCart={handleRemoveCart}
                    handleQuantity={handleQuantity}
                  />
                  <Detail
                    shoe={shoeDefault}
                    handleDetail={() => handleDetail(item)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
