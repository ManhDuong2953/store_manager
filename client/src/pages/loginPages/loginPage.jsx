import "./loginPage.scss";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="bodyLogin">
      <div className="wrapper">
        <div className="title">Đăng Nhập</div>
        <form action="#">
          <div className="field">
            <input type="text" name="name_account" required />
            <label>Tên tài khoản</label>
          </div>
          <div className="field">
            <input type="password" name="password" required />
            <label>Mật khẩu</label>
          </div>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Nhắc tôi lần sau</label>
            </div>
            <div className="pass-link">
              <a href="#">Quên mật khẩu?</a>
            </div>
          </div>
          <div className="field">
            <input type="submit" value="Đăng nhập" />
          </div>
          <div className="signup-link">
            Chưa có tài khoản?
            <Link to="/signup">Đăng kí</Link>
          </div>
        </form>
      </div>

      <div className="image-wrapper">
        <img
          alt="Ảnh minh họa"
          className="img-login"
          src="https://img.freepik.com/free-vector/online-shopping-landing-page_33099-1725.jpg?w=996&t=st=1689834158~exp=1689834758~hmac=c9413fa91f9f4b473e566957e342565eaf17aa62b4c0683a6e87c6ea5d594697"
        />
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
