import "./ProductManage.scss";
import React, { useState } from "react";

function ProductManagement() {
  const [previewImgSrc, setPreviewImgSrc] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imgSrc = URL.createObjectURL(file);
    setPreviewImgSrc(imgSrc);
  };

  return (
    <>
     
      <div className="container-product-managerment">

        <div className="form-create-product-out product-managerment">
          <h1>Quản lí hàng hóa</h1>
          <div className="form-container">
            <form>
              <div className="form-left">
                <div className="input-form-product-out">
                  <label htmlFor="ma-hoa-don">Mã hóa đơn</label>
                  <input type="text" id="ma-hoa-don" />
                </div>
                <div className="input-form-product-out">
                  <label htmlFor="ma-hang-hoa">Mã hàng hóa</label>
                  <input type="text" id="ma-hang-hoa" name="ma-hang-hoa" />
                </div>
                <div className="input-form-product-out">
                  <label htmlFor="ma-lo-hang">Mã lô hàng</label>
                  <input type="text" id="ma-lo-hang" />
                </div>
                <div className="input-form-product-out">
                  <label htmlFor="so-luong">Số lượng</label>
                  <input type="text" id="so-luong" />
                </div>
                <div className="input-form-product-out">
                  <label htmlFor="nha-cung-cap">Khách hàng</label>
                  <input type="text" id="nha-cung-cap" />
                </div>
                <div className="input-form-product-out">
                  <label htmlFor="gia-ban">Giá bán</label>
                  <input type="text" id="gia-ban" />
                </div>
                <div className="input-form-product-out">
                  <label htmlFor="ngay-san-xuat">Ngày sản xuất</label>
                  <input type="date" id="ngay-san-xuat" />
                </div>
                <div className="input-form-product-out">
                  <label htmlFor="han-su-dung">Hạn sử dụng</label>
                  <input type="date" id="han-su-dung" />
                </div>
                <div className="input-form-product-out">
                  <label htmlFor="vi-tri">Vị trí</label>
                  <input type="text" id="vi-tri" />
                </div>
              </div>
              <div className="btn-event-product">
                <button>Thêm sản phẩm</button>
                <button>Xóa sản phẩm</button>
                <button>Lưu</button>
                <button>Thanh toán</button>
                <button>Xuất hóa đơn</button>
              </div>
            </form>
          </div>
        </div>
        <div className="table">

          <div className="row header blue">
            <div className="cell">
              Username
            </div>
            <div className="cell">
              Email
            </div>
            <div className="cell">
              Password
            </div>
            <div className="cell">
              Active
            </div>
          </div>

          <div className="row">
            <div className="cell" data-title="Username">
              ninjalug
            </div>
            <div className="cell" data-title="Email">
              misterninja@hotmail.com
            </div>
            <div className="cell" data-title="Password">
              ************
            </div>
            <div className="cell" data-title="Active">
              Yes
            </div>
          </div>

          <div className="row">
            <div className="cell" data-title="Username">
              jsmith41
            </div>
            <div className="cell" data-title="Email">
              joseph.smith@gmail.com
            </div>
            <div className="cell" data-title="Password">
              ************
            </div>
            <div className="cell" data-title="Active">
              No
            </div>
          </div>

          <div className="row">
            <div className="cell" data-title="Username">
              1337hax0r15
            </div>
            <div className="cell" data-title="Email">
              hackerdude1000@aol.com
            </div>
            <div className="cell" data-title="Password">
              ************
            </div>
            <div className="cell" data-title="Active">
              Yes
            </div>
          </div>

          <div className="row">
            <div className="cell" data-title="Username">
              hairyharry19
            </div>
            <div className="cell" data-title="Email">
              harryharry@gmail.com
            </div>
            <div className="cell" data-title="Password">
              ************
            </div>
            <div className="cell" data-title="Active">
              Yes
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default ProductManagement;
