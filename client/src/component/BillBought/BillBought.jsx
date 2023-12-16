import "./BillBought.scss";
import BillBoughtItem from "./BillBoughtItem";
function BillBought() {
    return (
        <div className="cart-main container-app context-app">
            <h2 className="cart-title">
                Đơn hàng đã mua
            </h2>
            <ul className="cart-container">
                <BillBoughtItem />
            </ul>
        </div>
    );
}

export default BillBought;