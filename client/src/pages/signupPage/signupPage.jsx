import "./signupPage.scss";
import { Link } from "react-router-dom";
export default function SignupPage() {
  return (
    <div className="bodyLogin">
      <div className="image-signup">
        <img
          alt="Ảnh minh họa"
          className="img-signup"
          src="https://img.freepik.com/free-vector/online-shopping-banner-mobile-app-templates-concept-flat-design_1150-34862.jpg?w=740&t=st=1689834936~exp=1689835536~hmac=c5fa015020b07740d9bc9fdb98e62b977550fa4868c319fb2199e7814d7cf86a"
        />
      </div>
      <div className="container">
        <h1 className="title">Đăng kí</h1>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Họ và tên</span>
                <input
                  type="text"
                  placeholder="Nhập họ và tên của bạn"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Tên tài khoản</span>
                <input type="text" placeholder="Nhập tên tài khoản" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Nhập email" required />
              </div>
              <div className="input-box">
                <span className="details">Số điện thoại</span>
                <input type="text" placeholder="Nhập số điện thoại" required />
              </div>
              <div className="input-box">
                <span className="details">Mật khẩu</span>
                <input type="text" placeholder="Nhập mật khẩu" required />
              </div>
              <div className="input-box">
                <span className="details">Nhập lại mật khẩu</span>
                <input type="text" placeholder="Nhập lại mật khẩu" required />
              </div>
              <div className="gender-details">
                <span className="details">Giới tính</span>
                <select name="gender" id="gender">
                  <option value=""></option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>{" "}
            </div>
            <div className="button">
              <input type="submit" value="Đăng kí" />
            </div>
            <p>
              Bạn đã có tài khoản?<Link to="/login"> Đăng nhập</Link>
            </p>
          </form>
        </div>
      </div>

      <Link to="/">
        <div className="icon-back-home">
          <i className="fa-solid fa-house"></i>
        </div>
      </Link>
    </div>
  );
}