import React, { useEffect } from "react";
import { FaChartLine, FaUserCircle } from "react-icons/fa";
import { FaRankingStar, FaPeopleRoof } from "react-icons/fa6";
import { PiTableFill } from "react-icons/pi";
import { BiSolidReceipt } from "react-icons/bi";
import { BsBuildingFillAdd } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import logowhite from "../../assets/logo/logowhite.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.scss";
import { API_LOGOUT_USER } from "../../configs/API";
import getToken from "../../utils/getToken/getToken";

function NavBar() {
  const pathnameLocation = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    const direct = document.querySelectorAll("ul.list-item-navbar > a");
    direct.forEach((item) => {
      item.children[0].classList.remove("active");
      if (item.pathname === pathnameLocation) {
        item.children[0].classList.add("active");
      }
    });
  }, [pathnameLocation]);

  const handleLogout = async () => {
    try {
      await fetch(API_LOGOUT_USER, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
      },
        method: 'POST',
        credentials: 'include',
      });
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle errors during logout if needed
    }
  };
  

  return (
    <div className="navbar-container">
      <div className="header-navbar">
        <img src={logowhite} alt="" className="img-logo-header" />
        <span className="title-header-navbar">Mạnh Cường Shop</span>
      </div>
      <div className="content-navbar">
        <ul className="list-item-navbar">
          <Link to="/admin/dashboard">
            <li className="items-navbar active">
              <FaChartLine />
              <p>Dashboard</p>
            </li>
          </Link>
          <Link to="/admin/managedEmployee">
            <li className="items-navbar">
              <FaPeopleRoof />
              <p>Quản lý nhân sự</p>
            </li>
          </Link>
          <Link to="/employee/productManagement">
            <li className="items-navbar">
              <PiTableFill />
              <p>Quản lý sản phẩm</p>
            </li>
          </Link>
          <Link to="/employee/productSale">
            <li className="items-navbar">
              <BiSolidReceipt />
              <p>Đơn bán của bạn</p>
            </li>
          </Link>
          <Link to="/employee/productIn">
            <li className="items-navbar">
              <BsBuildingFillAdd />
              <p>Thêm sản phẩm/Đối tác</p>
            </li>
          </Link>
          <Link to="/top_ranking">
            <li className="items-navbar">
              <FaRankingStar />
              <p>BXH</p>
            </li>
          </Link>
        </ul>

        <ul className="list-item-navbar">
          <h4>Account setting</h4>
          <Link to="/profile">
            <li className="items-navbar">
              <FaUserCircle />
              <p>Profile</p>
            </li>
          </Link>
          <li className="items-navbar logout" onClick={handleLogout}>
            <p>Log out</p>
            <TbLogout2 />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
