import "./AnalystEmployee.scss";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
function AnalystEmployee() {
  return (
    <>
      <div className="container-menu-employee">
        {/* <div className="main-menu"> */}
        <ul>
          <Link to="/employee/productmanagement">
            <li className="list-menu-analist">
              <FaShoppingBag />
              <p>Quản lí hàng hóa</p>
            </li>
          </Link>
          <Link to="/employee/productin">
            <li className="list-menu-analist color-menu-green">
              <FaShoppingBag />
              <p>Nhập hàng hóa/Đối tác</p>
            </li>{" "}
          </Link>
          <Link to="/employee/productout">
            <li className="list-menu-analist color-menu-pink">
              <FaShoppingBag />
              <p>Đơn của bạn</p>
            </li>{" "}
          </Link>
        </ul>
        {/* </div>     */}
      </div>
    </>
  );
}

export default AnalystEmployee;
