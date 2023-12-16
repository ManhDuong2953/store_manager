import { Link } from "react-router-dom";
function ItemNotice() {
    return (
        <Link to="/bill_bought/1">
            <li>
                <img src="https://ich.edu.vn/App_Files/Upload/2019/icon-thanh-cong.png" alt="" />
                <p>Đơn hàng PC67YuGGD của bạn đã đặt hàng thành công</p>
            </li>
        </Link>
    );
}

export default ItemNotice;