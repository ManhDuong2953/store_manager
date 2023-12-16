import "./ProductIn.scss";
import { useState } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import { useCallback } from "react";
function ProductIn() {
  const [previewImgSrc, setPreviewImgSrc] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imgSrc = URL.createObjectURL(file);
    setPreviewImgSrc(imgSrc);
  };
  const [showProductIn, setShowProductIn] = useState(true);
  const [isProductInButtonActive, setIsProductInButtonActive] = useState(true);
  const [isSupplierButtonActive, setIsSupplierButtonActive] = useState(false);

  const handleProductIn = () => {
    setShowProductIn(true);
    setIsProductInButtonActive(true);
    setIsSupplierButtonActive(false);
  };
  const handleSuppler = () => {
    setShowProductIn(false);
    setIsProductInButtonActive(false);
    setIsSupplierButtonActive(true);
  };

  const [valueTextEditor, setValueTextEditor] = useState()
  const valueDescription = useCallback((e) => {
    setValueTextEditor(e)
  },[])
  console.log(valueTextEditor);
  return (
    <>

      <div className="container-product-in">
        <div className="btn-event-product-in">
          <button
            className={`btn-create-invoice-in ${isProductInButtonActive ? "active" : ""
              }`}
            onClick={handleProductIn}
          >
            Tạo hóa đơn nhập hàng
          </button>
          <button
            className={`btn-supplier ${isSupplierButtonActive ? "active" : ""}`}
            onClick={handleSuppler}
          >
            Nhà cung cấp
          </button>
        </div>
        {showProductIn ? (
          <div className="form-create-product-in">
            <div className="form-container">
              <form>
                <div className="form-product-in">
                  <div className="form-left">
                    <div className="input-form-product">
                      <label htmlFor="fname">Tên sản phẩm:</label>
                      <input type="text" id="fname" name="fname" />
                    </div>
                    <div className="input-form-product">
                      <label htmlFor="ten-lo-hang">Mã lô hàng</label>
                      <input type="text" id="ten-lo-hang" />
                    </div>
                    <div className="input-form-product">
                      <label htmlFor="loai-hang">Tên lô hàng</label>
                      <input type="text" id="ten-lo-hang" />
                    </div>
                    {/* Các ô input khác tương tự */}
                    <div className="input-form-product">
                      <label htmlFor="loai-hang">Loại hàng</label>
                      <input type="text" id="loai-hang" />
                    </div>
                    <div className="input-form-product">
                      <label htmlFor="loai-san-pham">Loại sản phẩm</label>
                      <input type="text" id="loai-san-pham" />
                    </div>
                    <div className="input-form-product">
                      <label htmlFor="size">Size</label>
                      <input type="text" id="size" />
                    </div>
                    <div className="input-form-product">
                      <label htmlFor="ngay-het-han">Ngày hết hạn</label>
                      <input type="date" id="ngay-het-han" />
                    </div>
                    <div className="input-form-product">
                      <label htmlFor="so-luong-ton-kho">Số lượng tồn kho</label>
                      <input type="text" id="so-luong-ton-kho" />
                    </div>
                    <div className="input-form-product">
                      <label htmlFor="ma-nha-cung-cap">Mã nhà cung cấp</label>
                      <input type="text" id="ma-nha-cung-cap" />
                    </div>
                    <div className="input-form-product">
                      <label htmlFor="ma-hang-hoa">Mã hàng hóa</label>
                      <input type="text" id="ma-hang-hoa" />
                    </div>
                    <div className="input-form-product">
                      <label htmlFor="ten-san-pham">Tên sản phẩm</label>
                      <input type="text" id="ten-san-pham" />
                    </div>
                    <div className="input-form-product">
                      <label htmlFor="gia-san-pham">Giá sản phẩm</label>
                      <input type="text" id="gia-san-pham" />
                    </div>
                  </div>
                  <div className="form-right">
                    <div className="container">
                      <label htmlFor="input-img" className="preview">
                        {previewImgSrc ? (
                          <img src={previewImgSrc} alt="Preview" />
                        ) : (
                          <>
                            <i className="fas fa-cloud-upload-alt"></i>
                            <span>Upload to preview image</span>
                          </>
                        )}
                      </label>
                      <input
                        type="file"
                        hidden
                        id="input-img"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="des-product-employee">
                  <TextEditor parentComponent={valueDescription} />
                  <div className="btn-event-product">
                    <button>Sửa</button>
                    <button>Lưu</button>
                    <button>Kiểm tra HSD</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="form-supplier">
            <h1>Quản lí nhà cung cấp</h1>
            <div className="form-container">
              <form>
                <div className="form-product-in">
                  <div className="form-left">
                    <div className="input-form-product">
                      <label htmlFor="fname">Mã nhà cung cấp: </label>
                      <input type="text" id="fname" name="fname" />
                    </div>
                    <div className="input-form-product">
                      <label htmlFor="ten-lo-hang">Tên nhà cung cấp</label>
                      <input type="text" id="ten-lo-hang" />
                    </div>
                    <div className="input-form-product">
                      <label htmlFor="loai-hang">Địa chỉ</label>
                      <input type="text" id="ten-lo-hang" />
                    </div>
                    {/* Các ô input khác tương tự */}
                    <div className="input-form-product">
                      <label htmlFor="loai-hang">Số điện thoại</label>
                      <input type="text" id="loai-hang" />
                    </div>
                  </div>
                  <div className="form-right">
                    <div className="container">
                      <label htmlFor="input-img" className="preview">
                        {previewImgSrc ? (
                          <img src={previewImgSrc} alt="Preview" />
                        ) : (
                          <>
                            <i className="fas fa-cloud-upload-alt"></i>
                            <span>Upload to preview image</span>
                          </>
                        )}
                      </label>
                      <input
                        type="file"
                        hidden
                        id="input-img"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="btn-event-product">
                  <button>Sửa</button>
                  <button>Xóa</button>
                  <button>Lưu</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductIn;
