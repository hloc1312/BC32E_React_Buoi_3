import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    const { cart, handleQuantity, handleRemoveCart } = this.props;
    // console.log(this.props);
    const rederCart = () => {
      return cart.map((cart) => {
        return (
          <tr key={cart.id}>
            <td>{cart.id}</td>
            <td>{cart.name}</td>
            <td>
              <img src={cart.image} alt={cart.name} width={80} />
            </td>
            <td>{cart.price}$</td>
            <td>
              <button
                className="btn btn-secondary"
                onClick={() => handleQuantity(cart.id, -1)}
              >
                -
              </button>
              <span className="mx-2">{cart.soLuong}</span>
              <button
                className="btn btn-secondary"
                onClick={() => handleQuantity(cart.id, 1)}
              >
                +
              </button>
            </td>
            <td>{(cart.price * cart.soLuong).toLocaleString()}$</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveCart(cart.id)}
              >
                Xóa
              </button>
            </td>
          </tr>
        );
      });
    };
    return (
      <>
        <div className="text-right">
          <button
            type="button"
            className="btn btn-success mr-2"
            data-toggle="modal"
            data-target="#modalCart1"
            // onClick={handleCart}
          >
            Xem giỏ hàng <i className="fa-solid fa-cart-plus"></i>
            <span className="mx-2">({cart.length})</span>
            <span>
              -{" "}
              {cart
                .reduce((total, item) => {
                  return (total += item.soLuong * item.price);
                }, 0)
                .toLocaleString()}
              $
            </span>
          </button>
        </div>
        <div
          className="modal fade"
          id="modalCart1"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-scrollable ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">x</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table tablle-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Tên SP</th>
                      <th>Hình ảnh</th>
                      <th>Giá bán</th>
                      <th>Số lượng</th>
                      <th>Tổng tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{rederCart()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
