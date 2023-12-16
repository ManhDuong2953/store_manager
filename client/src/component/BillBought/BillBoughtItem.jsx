import { Link } from "react-router-dom";
function BillBoughtItem() {
    return (<li className="cart-item">
        <img src="https://hinhanh.webvua.com/images/item/4752/resize/2003002200703.jpg" alt="" />
        <span className="product-info">
            <h3 className="produce-name">Apple Watch Series 6</h3>
            <p className="product-price">$10,000</p>
        </span>
        <span className="quatity">
            Số lượng: <strong>1</strong>
        </span>
        <p className="cart-prices">$10,000</p>
        <p className="status">Đang giao hàng</p>
        <span className="action">
            <Link to="/bill_bought/1">
                <button className="view-in">Xem hóa đơn</button>
            </Link>
        </span>
    </li>);
}

export default BillBoughtItem;