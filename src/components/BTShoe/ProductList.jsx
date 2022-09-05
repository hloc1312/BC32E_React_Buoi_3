import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  // handleDetailShoe = (shoe) => {
  //   console.log(shoe);
  // };
  render() {
    const {
      shoes,
      handleDetail,
      shoeDefault,
      cart,
      handleCart,
      handleRemoveCart,
      handleQuantity,
    } = this.props;
    // console.log(handleDetail);
    return (
      <div className="row">
        <ProductItem
          data={shoes}
          handleDetail={handleDetail}
          shoeDefault={shoeDefault}
          cart={cart}
          handleCart={handleCart}
          handleRemoveCart={handleRemoveCart}
          handleQuantity={handleQuantity}
        />
      </div>
    );
  }
}
