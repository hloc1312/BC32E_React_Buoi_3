import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    const { shoe, handleDetail } = this.props;
    // console.log(handleDetail);
    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={handleDetail}
        >
          Detail
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-scrollable ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Chi tiết sản phẩm
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
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={shoe.image}
                        alt={shoe.name}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-8">
                      <div className="row">
                        <div className="col-3 font-weight-bold mb-4">
                          Tên sản phẩm:
                        </div>
                        <div className="col-9">{shoe.name}</div>
                        <div className="col-3 font-weight-bold mb-4">
                          Mô tả sản phẩm:
                        </div>
                        <div className="col-9">{shoe.description}</div>
                        <div className="col-3 font-weight-bold mb-4">Giá:</div>
                        <div className="col-9 font-weight-bold text-danger">
                          {shoe.price}$
                        </div>
                        <div className="col-3 font-weight-bold mb-4">
                          Số lượng sản phẩm:
                        </div>
                        <div className="col-9">{shoe.quantity}</div>
                      </div>
                    </div>
                  </div>
                </div>
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
