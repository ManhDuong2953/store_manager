import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBarLayout.scss";
import Logo from "../../assets/logo/logoblack.png";
import CrawnLabel from "../FrientlyCustomer/CrawnLabel";
import ItemNotice from "./ItemNotice";
function NavBarLayout() {
  useEffect(() => {

    //Khai báo hộp lịch sử và ô tìm kiếm
    const boxHistory = document.querySelector(".recomment-search");
    const searchInput = document.querySelector("#search-controller");
    // Khi trường nhập nhận được sự tập trung (focus)
    searchInput.addEventListener("focus", () => {
      boxHistory.style.display = "block";
    });

    // Khi trường nhập không còn tập trung (unfocus)
    searchInput.addEventListener("blur", () => {
      boxHistory.style.display = "none";
    });



    //sự kiện tắt mở hộp thoại thông báo
    const boxNotice = document.querySelector(".notice-box");
    const iconNotice = document.querySelector(".notice");
    iconNotice.addEventListener("click", (e) => {
      e.stopPropagation();
      boxNotice.style.display = "block"
    })
    document.querySelector("body").addEventListener("click", (e) => {
      e.stopPropagation();
      boxNotice.style.display = "none"
    })

  }, []);
  return (
    <div className="nav-main">
      <div className="nav-container container-app">
        <div className="left-header">
          <Link to="/">
            <img src={Logo} alt="" className="logo-header logo" />
          </Link> </div>
        <div className="search-input">
          <form id="search-form" action="/search">
            <div className="search-input_container">
              <input
                type="text"
                name="keyword_search"
                id="search-controller"
                placeholder="Tìm kiếm sản phẩm, loại hàng,.."
              />
              <ul className="recomment-search">Tìm kiếm hàng đầu
                <li className="search-item"><p>Áo chống nắng</p><i className="fa-solid fa-clock-rotate-left"></i></li>
                <li className="search-item"><p>Quần Kaki Nam</p><i className="fa-solid fa-clock-rotate-left"></i></li>
                <li className="search-item"><p>Mũ lưỡi chai Nike</p><i className="fa-solid fa-clock-rotate-left"></i></li>
                <li className="search-item"><p>Giày chạy bộ/ Giày thể thao</p><i className="fa-solid fa-clock-rotate-left"></i></li>
                <li className="search-item"><p>Áo ba lỗ/ Áo lót nam</p><i className="fa-solid fa-clock-rotate-left"></i></li>
                <li className="search-item"><p>Quần ngắn</p><i className="fa-solid fa-clock-rotate-left"></i></li>
              </ul>
            </div>

            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
          </form>
        </div>
        <div className="right-header">
          <Link to="/cart">
            <div className="cart-shop">
              <div className="label">6</div>
              <i className="fa-solid fa-cart-shopping direct"></i>
            </div>
          </Link>
          <Link to="/rank_info">
            <div className="rank-customer">
              <i className="fa-solid fa-ranking-star direct" ></i>
            </div>
          </Link>
          <div className="notice">
            <div className="label">7</div>
            <i className="fa-solid fa-bell"></i>
            <div className="notice-box">
              <h3>Thông báo</h3>
              <ul>
                <ItemNotice />
              </ul>
            </div>
          </div>
        </div>
        <div className="login-button">
          {/* <Link to="/login">
            <button>đăng nhập</button>
          </Link> */}
          <span>
            <CrawnLabel.CrawnGold />
            <span className="img-avt">

              <img
                className="avthumbnail"
                alt="Ảnh Avatar"
                src="https://anhdep123.com/wp-content/uploads/2021/02/anh-gai-xinh-cute.jpg"
              />


              <ul className="menu-dropdown">
                <Link to="/profile/1"><li className="menu-item"><i className="fa-solid fa-user"></i>Tài khoản</li></Link>
                <Link to="/bill_bought"><li className="menu-item"><i className="fa-regular fa-rectangle-list"></i>Đơn mua </li></Link>
                <Link to="/login"><li className="menu-item" style={{ "color": "red" }}>Đăng xuất <i className="fa-solid fa-right-from-bracket"></i></li></Link>
              </ul>
            </span>


          </span>
        </div>
      </div>
      {/* <p>Hotline:<strong>0353421340</strong></p> */}
    </div>
  );
}
export default NavBarLayout;
