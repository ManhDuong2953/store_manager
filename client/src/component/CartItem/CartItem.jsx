import { Link } from "react-router-dom";
import "./CartItem.scss"
import { useState } from "react";
function CartItem() {
    const [Quantity, setQuantity] = useState(1)
    return (
        <li className="cart-item">
            <input type="checkbox" name="tick_cart" id="product-tick" />
            <img src="https://hinhanh.webvua.com/images/item/4752/resize/2003002200703.jpg" alt="" />
            <span className="product-info">
                <h3 className="produce-name">Apple Watch Series 6</h3>
                <p className="product-price">$10,000</p>
            </span>
            <span className="quatity">
                <button className="dif" onClick={() => setQuantity(e => e >= 2 ? e - 1 : 1)}>-</button>
                <input readOnly type="number" name="amount" value={Quantity} id="amount" />
                <button className="plus" onClick={() => setQuantity(e =>  e+1)}>+</button>
            </span>
            <p className="cart-prices">$10,000</p>
            <span className="action">
                <Link to="/inview/1"><button className="view-in">Xem trực tiếp</button></Link>
                <button className="buy-now">Mua ngay</button>

            </span>
        </li>
    );
}

export default CartItem;