import "./ProductIn.scss";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_DELETE_SUPPLIER, API_GET_ALL_SUPPLIER, API_POST_SUPPLIER } from "../../configs/API";
import getDataForm from "../../utils/HandleForm/HandleForm";
import getToken from "../../utils/GetToken/GetToken";
function ProductIn() {
  const [previewImgSrc, setPreviewImgSrc] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imgSrc = URL.createObjectURL(file);
    setPreviewImgSrc(imgSrc);
  };





  // thêm supplier
  const handleSubmit = (e) => {
    e.preventDefault();
    const newSupplier = getDataForm(".formSupplier");
    const formData = new FormData();
    // Append the fields to FormData
    for (const key in newSupplier) {
      formData.append(key, newSupplier[key]);
    }
    const apiAddSupplier = API_POST_SUPPLIER;
    console.log(newSupplier);
    fetch(apiAddSupplier, {
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + getToken()
      },
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Đã xảy ra lỗi: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Nhà cung cấp đã được thêm thành công:', data);
      })
      .catch(error => {
        console.error('Lỗi khi thêm nhà cung cấp:', error);
      });

  }

  // lấy api danh sách supplier

  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const apigetAllSupplier = API_GET_ALL_SUPPLIER;
    fetch(apigetAllSupplier, {
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + getToken()
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Đã xảy ra lỗi: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Data supplier:', data);
        setSuppliers(data); // Lưu trữ dữ liệu trong state
      })
      .catch(error => {
        console.error('Lỗi lấy danh sách nhà cung cấp:', error);
      });
  }, []);


  const handleDelete = useCallback((id)=>{
    const apiDelete = API_DELETE_SUPPLIER + id;
    fetch(apiDelete, {
      method: 'DELETE',
      headers: {
        "Authorization": "Bearer " + getToken()
      },
    })
  },[]);


  return (
    <div className="container-product-in">
      <div className="form-supplier">
        <h1>Quản lí nhà cung cấp</h1>
        <div className="form-container">
          <form action="" method="POST" className="formSupplier" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-product-in">
              <div className="form-left">
                <div className="input-form-product">
                  <label htmlFor="fname">Mã nhà cung cấp: </label>
                  <input type="text" id="fname" name="idSupplier" />
                </div>
                <div className="input-form-product">
                  <label htmlFor="ten-lo-hang">Tên nhà cung cấp</label>
                  <input type="text" id="ten-lo-hang" name="nameSupplier" />
                </div>
                <div className="input-form-product">
                  <label htmlFor="loai-hang">Địa chỉ</label>
                  <input type="text" id="ten-lo-hang" name="address" />
                </div>
                <div className="input-form-product">
                  <label htmlFor="loai-hang">Số điện thoại</label>
                  <input type="text" id="loai-hang" name="phoneNumber" />
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
                    name="avatarLink"
                    type="file"
                    hidden
                    id="input-img"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </div>
            <div className="btn-event-product">
              <button type="submit">Lưu</button>
            </div>
          </form>
        </div>
        <div className="list-supplier-container">
          <h2>Danh sách nhà cung cấp</h2>

          <div className="search-supplier">
            <form action="">
              <input type="text" />
              <button>Tìm kiếm</button>
            </form>
          </div>
          <div className="fui-table-ui-basic-linh table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Ảnh</th>
                  <th>Mã nhà cung cấp</th>
                  <th>Tên nhà cung cấp</th>
                  <th>Địa chỉ</th>
                  <th>Số điện thoại</th>
                  <th>Sửa</th>
                  <th>Xóa</th>
                </tr>
              </thead>
              <tbody>
                {suppliers && suppliers.map((dataSupplier, index) => (
                  <tr>
                    <td className="img"><img src={dataSupplier && dataSupplier.avatar_link} alt="" /></td>
                    <td className="id">{dataSupplier && dataSupplier.id_supplier}</td>
                    <td className="name">{dataSupplier && dataSupplier.name_supplier}</td>
                    <td className="address">{dataSupplier && dataSupplier.address}</td>
                    <td className="phoneNumber">{dataSupplier && dataSupplier.phone_number}</td>
                    <td><Link to={`/employee/productIn?idSupplierUpdate=${4}`}><button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', outline: 'none', border: 'none' }}>Sửa</button></Link></td>
                    <td><button onClick={()=>handleDelete(dataSupplier.id_supplier)} style={{ padding: '10px 20px', backgroundColor: 'red', color: 'white', outline: 'none', border: 'none' }}>Xóa</button></td>
                  </tr>
                ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductIn;
