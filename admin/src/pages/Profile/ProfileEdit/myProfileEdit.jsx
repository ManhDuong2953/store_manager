import React, { useCallback, useEffect, useRef, useState } from "react";
import { API_GET_EMPLOYEE_BY_ID, API_UPDATE_EMPLOYEE } from "../../../configs/API";
import "./myProfileEdit.scss"
import { useParams } from "react-router-dom";
import TextEditor from "../../../components/TextEditor/TextEditor";
import { useNavigate } from 'react-router-dom';
import getDataForm from "../../../utils/handleForm/handleForm";
import { formatDate } from "../../../utils/formatDate/formatDate";
import getToken from "../../../utils/getToken/getToken";

const ProfileEditPages = () => {
  const { id } = useParams()
  const [dataEmployee, setDataEmployee] = useState([]); // set list of employees
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();
  // get data employee
  useEffect(() => {
    //get data form
    const response = fetch(API_GET_EMPLOYEE_BY_ID + id, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + getToken()
      }
    })
      .then(response => response.json())
      .then(data => {
        setDataEmployee(data.data[0]); // Set the employee data
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
    if (response.status === 403) {
      alert("Bạn không đủ thẩm quyền. Hãy liên hệ với nhà quản lý để thực hiện tác vụ!")
    }
  }, []);

  //get gender render
  useEffect(() => {
    const listGender = document.querySelectorAll("input[name='gender']");
    listGender.forEach((e) => {
      if (dataEmployee.gender === e.value) {
        e.checked = true;
      }
    })
  }, [dataEmployee]);




  //sử lý hàm submit
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    try {
      let dataGetForm = getDataForm(".R-Gpdg");
      setDataEmployee(prevDataEmployee => ({ ...prevDataEmployee, ...dataGetForm }));
      setIsSaving(true); // Bắt đầu quá trình lưu
    } catch (error) {
      console.error("Error while fetching data:", error);
      setIsSaving(false); // Khi có lỗi, cũng cần đặt lại trạng thái
    }
  }, []);


  const handleUpdate = async () => {
    const formData = new FormData();
    // Append the fields to FormData
    for (const key in dataEmployee) {
      formData.append(key, dataEmployee[key]);
    }

    const response = await fetch(API_UPDATE_EMPLOYEE + id, {
      method: 'PATCH',
      headers: {
        "Authorization": "Bearer " + getToken()
      },
      body: formData
    })
    if(response.status === 403) {
      alert("Bạn không đủ thẩm quyền. Hãy liên hệ với nhà quản lý để thực hiện tác vụ!")
  }  
  }

  useEffect(() => {
    async function actionUpdate() {
      if (isSaving) {
        await handleUpdate();
        navigate(`/profile/${id}`);
      }
    }

    actionUpdate();
  }, [isSaving, id, navigate]);




  const handleInputChange = useCallback((fieldName, value) => {
    setDataEmployee(prevData => ({ ...prevData, [fieldName]: value }));
  }, []);

  //handle value text introduce
  const valueDescription = useCallback((e) => {
    setDataEmployee(prevDataEmployee => ({ ...prevDataEmployee, introduce: e }));
  }, []);




  //Xử lý ảnh 
  const imageAddedRef = useRef(false); // Sử dụng useRef để giữ trạng thái mà không gây ra việc render lại
  useEffect(() => {
    const inputImg = document.querySelector('#input-img');
    const handleInputChange = (e) => {
      imageAddedRef.current = true;

      let file = e.target.files[0];
      if (!file) return;

      const previewContainer = document.querySelector('.preview');
      // Kiểm tra xem đã có .img_preview trong .preview hay chưa
      const existingImgPreview = previewContainer.querySelector('.img_preview');
      if (existingImgPreview) {
        // Nếu đã có, xóa .img_preview trước khi thêm hình ảnh mới
        previewContainer.removeChild(existingImgPreview);
      }

      let img = document.createElement('img');
      img.className = "img_preview";
      img.src = URL.createObjectURL(file);
      previewContainer.appendChild(img);
    };
    inputImg.addEventListener('input', handleInputChange);

    // Xóa event listener khi component unmount để tránh rò rỉ bộ nhớ
    return () => {
      inputImg.removeEventListener('input', handleInputChange);
    };
  }, [dataEmployee]);


  return (
    <div className="profile-container container-app context-app">
      <div className="proright">
        <div className="b7wtmP">
          <div className="_66hYBa">
            <div className="fgdwer">
              <h1 className="SbCTde">Hồ sơ cá nhân</h1>
              <div className="zptdmA">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
            </div>
            <b className="sodu">Số dư tài khoản: $10,000</b>
          </div>
          <div className="R-Gpdg">
            <form className="form-profile" method="post" encType="multipart/form-data">
              <span className="input-profile">
                <div className="volt8A">
                  <table className="Zj7UK+">
                    <tbody>
                      <tr>
                        <td className="espR83"><label>Tên đăng nhập</label></td>
                        <td className="Tmj5Z6">
                          <div className="_0ZgK9X">
                            <div className="W50dp5"><input
                              type="text"
                              name="name_user"

                              placeholder=""
                              value={dataEmployee.name_user || ""}
                              className="CMyrTJ name_user"
                              onChange={(e) => handleInputChange('name_user', e.target.value)}
                            /></div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="espR83"><label>Email</label></td>
                        <td className="Tmj5Z6">
                          <div className="_0ZgK9X">
                            <div className="W50dp5"> <input
                              type="text"
                              name="email"
                              placeholder=""
                              value={dataEmployee.email || ""}
                              className="CMyrTJ email"
                              onChange={(e) => handleInputChange('email', e.target.value)}
                            />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="espR83"><label>Facebook/Zalo</label></td>
                        <td className="Tmj5Z6">
                          <div className="_0ZgK9X">
                            <div className="W50dp5">
                              <input
                                type="text"
                                name="link_social"
                                placeholder=""
                                value={dataEmployee.link_social || ""}
                                className="CMyrTJ link_social"
                                onChange={(e) => handleInputChange('link_social', e.target.value)}
                              />
                              {/* <input type="text" name="link_social" placeholder="" className="CMyrTJ" value={dataEmployee && dataEmployee.link_social} /> */}
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="espR83"><label>Địa chỉ</label></td>
                        <td className="Tmj5Z6">
                          <div className="_0ZgK9X">
                            <div className="W50dp5">
                              <input
                                type="text"
                                name="address"
                                placeholder=""
                                value={dataEmployee.address || ""}
                                className="CMyrTJ"
                                onChange={(e) => handleInputChange('address', e.target.value)}
                              />
                            </div>

                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="espR83"><label>Số điện thoại</label></td>
                        <td className="Tmj5Z6">
                          <div className="_0ZgK9X">
                            <div className="W50dp5">
                              <input
                                type="text"
                                name="phone_number"
                                placeholder=""
                                value={dataEmployee.phone_number || ""}
                                className="CMyrTJ phone_number"
                                onChange={(e) => handleInputChange('phone_number', e.target.value)}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="espR83"><label>Giới tính</label></td>
                        <td className="Tmj5Z6 gender">
                          <input type="radio" name="gender" id="male" value="Nam" />
                          <label htmlFor="">Nam</label>
                          <input type="radio" name="gender" id="female" value="Nữ" />
                          <label htmlFor="">Nữ</label>
                          <input type="radio" name="gender" id="another" value="Khác" />
                          <label htmlFor="">Khác</label>
                        </td>
                      </tr>
                      <tr>
                        <td className="espR83"><label>Ngày sinh</label></td>
                        <td>
                          <input
                            type="date"
                            name="dob"
                            min="1900-01-01" max="2100-01-01"
                            value={dataEmployee && formatDate(dataEmployee.dob, "yy/mm/dd")}  // Không cần định dạng ở đây
                            className="CMyrTJ dob"
                            onChange={(e) => {
                              handleInputChange('dob', e.target.value)
                            }}
                          />

                          {/* <input type="date" value={dataEmployee && formatDate(dataEmployee.dob, "yy/mm/dd")} name="dob" className="CMyrTJ" /> */}
                        </td>
                      </tr>
                      <tr>
                        <td className="espR83"><label>Trình độ học vấn</label></td>
                        <td className="Tmj5Z6">
                          <div className="W50dp5">
                            <input
                              type="text"
                              name="literacy"
                              placeholder=""
                              value={dataEmployee.literacy || ""}
                              className="CMyrTJ literacy"
                              onChange={(e) => handleInputChange('literacy', e.target.value)}
                            />
                            {/* <input id="avt_link_img" value={dataEmployee && dataEmployee.literacy} type="text" placeholder="" name="literacy" className="CMyrTJ" /> */}
                          </div>

                        </td>
                      </tr>
                    </tbody>
                  </table>

                </div>


              </span>

            </form>
            <div className="profile-right">
              <div className="IQPHvE">
                <div className="scvgOW">
                  <div className="container-upload_img">
                    <label htmlFor="input-img" className="preview">
                      {
                        dataEmployee && dataEmployee.avatar_img ?
                          (
                            <img src={dataEmployee.avatar_img} alt="" className="img_preview" />
                          ) :
                          <i className="fas fa-cloud-upload-alt"></i>

                      }
                    </label>
                    <input type="file" hidden id="input-img" name="img_post" className="upload-file" encType="multipart/form-data" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TextEditor valueOld={dataEmployee && dataEmployee.introduce} parentComponent={valueDescription} name="introduce" placeholder="Viết giới thiệu bản thân tại đây" />

          <input onClick={e => handleSubmit(e)}
            type="submit"
            value="Lưu"
            className="btn btn-solid-primary btn--m btn--inline"
            disabled={isSaving}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileEditPages;