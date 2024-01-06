import "./LoginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { API_LOGIN_USER } from "../../configs/API";

import { useEffect } from "react";
import getToken from "../../utils/GetToken/GetToken";
import getDataForm from "../../utils/HandleForm/HandleForm";

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = getToken();

    if (storedToken) {
      autoLogin();
    }
  }, []);

  const autoLogin = async () => {
    try {
      await handleCheckUser();
    } catch (error) {
      console.error("Error auto-login:", error.message);
    }
  };

  const handleCheckUser = async () => {
    try {
      const storedToken = getToken();

      const headers = {
        'Content-Type': 'application/json',
      };

      if (storedToken) {
        headers['Authorization'] = `Bearer ${storedToken}`;
      }

      const formData = getDataForm(".form_login");

      const response = await fetch(API_LOGIN_USER, {
        method: 'POST',
        headers,
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      if (!response.ok) {
        console.error(`Request failed with status: ${response.status}`);
      }

      const data = await response.json();

      if (response.status === 200) {
        navigate(`/profile/${data.data.id_user}`);
      }
    } catch (error) {
      console.error("Error handling user:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const storedToken = getToken();
      if (!storedToken) {
        const formData = getDataForm(".form_login");
        const response = await fetch(API_LOGIN_USER, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          credentials: 'include',
        });

        if (!response.ok) {
          console.error(`Request failed with status: ${response.status}`);
          // Optionally, handle failed response (e.g., display an error message)
        }

        const data = await response.json();

        if (response.status === 200) {
          navigate(`/profile/${data.data.id_user}`);
        }
      } 
    } catch (error) {
      console.error("Error handling user:", error.message);
    }
  };

  return (
    <div className="bodyLogin">
      <div className="wrapper">
        <div className="title">Đăng Nhập</div>
        <form className="form_login" onSubmit={handleSubmit}>
          <div className="field">
            <input type="text" name="name_account" required autoComplete="false" />
            <label>Tên tài khoản</label>
          </div>
          <div className="field">
            <input type="password" name="password" required autoComplete="false" />
            <label>Mật khẩu</label>
          </div>
          <div className="content">
            <div className="pass-link">
              <a href="#">Quên mật khẩu?</a>
            </div>
          </div>
          <div className="field">
            <input type="submit" value="Đăng nhập" />
          </div>
          <div className="signup-link">
            Chưa có tài khoản? <Link to="/signup">Đăng kí</Link>
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
