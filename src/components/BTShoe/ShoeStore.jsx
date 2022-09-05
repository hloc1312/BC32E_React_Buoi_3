import React, { Component } from "react";
import "./style.css";
import data from "./data.json";
import ProductList from "./ProductList";
import AddToCart from "./AddToCart";
import GioHang from "./GioHang";
export default class ShoeStore extends Component {
  state = {
    shoeDefault: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    cart: [
      {
        id: 2,
        name: "Adidas Prophere Black White",
        alias: "adidas-prophere-black-white",
        price: 450,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 990,
        image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
        soLuong: 1,
      },
    ],
  };
  handleDetail = (shoe) => {
    console.log(shoe);
    this.setState({
      shoeDefault: shoe,
    });
  };

  handleAddToCart = (shoeClick) => {
    // console.log(maSP);
    const value = { ...shoeClick, soLuong: 1 };
    console.log("value: ", value);
    const data = [...this.state.cart];

    const index = data.findIndex((shoe) => shoe.id === shoeClick.id);
    console.log("index", index);
    if (index !== -1) {
      data[index].soLuong += 1;
    } else {
      data.push(value);
    }

    this.setState({
      cart: data,
    });
    console.log("state: ", this.state.cart);
  };

  handleRemoveCart = (maSP) => {
    // console.log(maSP);
    const data = this.state.cart.filter((shoe) => shoe.id !== maSP);
    // console.log(maSP);
    this.setState({
      cart: data,
    });
  };

  handleQuantity = (maSP, quantity) => {
    const data = [...this.state.cart];
    const index = data.findIndex((shoe) => shoe.id === maSP);

    if (data[index].soLuong > 1 || quantity > 0) {
      data[index].soLuong += quantity;
    } else if (window.confirm("Bạn muốn xóa sản phẩm này ?")) {
      data.splice(index, 1);
    }

    this.setState({
      cart: data,
    });
  };
  render() {
    return (
      <div className="my-3 container">
        <div className="row">
          <div className="col-3 shoe-left">
            <h1 className="text-center">Slidebar</h1>
            <a href="#" className="active">
              Home
            </a>
            <a href="#">Shop</a>
          </div>
          <div className="col-9 shoe-right">
            <h1 className="text-center">Shoes Shop</h1>

            <GioHang
              cart={this.state.cart}
              handleRemoveCart={this.handleRemoveCart}
              handleQuantity={this.handleQuantity}
            />
            <ProductList
              shoes={data}
              shoeDefault={this.state.shoeDefault}
              handleDetail={this.handleDetail}
              cart={this.state.cart}
              handleCart={this.handleAddToCart}
              handleRemoveCart={this.handleRemoveCart}
              handleQuantity={this.handleQuantity}
            />
          </div>
        </div>
      </div>
    );
  }
}
