import "./loginPage.scss";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useCallback, useEffect, useState } from "react";
import { API_LOGIN_USER } from "../../configs/API";
import getDataForm from "../../components/handleForm/handleForm";
axios.defaults.withCredentials = true
function LoginPage() {

  const [dataForm, setDataForm] = useState({})
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setDataForm(getDataForm(".form_login"))
  }, [])

  const handleCheckUser = async (data) => {
    axios.post(API_LOGIN_USER, data, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }


  useEffect(() => {
    handleCheckUser(dataForm)
  }, [dataForm])

  return (
    <div className="bodyLogin">
      <div className="wrapper">
        <div className="title">Đăng Nhập</div>
        <form className="form_login" action="" method="post">
          <div className="field">
            <input type="text" name="name_account" required />
            <label>Tên tài khoản</label>
          </div>
          <div className="field">
            <input type="password" name="password" required />
            <label>Mật khẩu</label>
          </div>
          <div className="content">
            <div className="pass-link">
              <a href="#">Quên mật khẩu?</a>
            </div>
          </div>
          <div className="field">
            <input onClick={handleSubmit} type="submit" value="Đăng nhập" />
          </div>
          <div className="signup-link">
            Chưa có tài khoản?
            <Link to="/signup">Đăng kí</Link>
          </div>
        </form>
      </div>
      <Link to="/">
        <div className="icon-back-home">
          <i className="fa-solid fa-house"></i>
        </div>
      </Link>
    </div>
  );
}

export default LoginPage;
