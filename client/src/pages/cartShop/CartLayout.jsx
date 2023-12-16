import { useState, useEffect } from "react";
import "./CartLayout.scss";
import CartItem from "../../component/CartItem/CartItem";
import Crawn from "../../component/FrientlyCustomer/CrawnLabel"
function CartPage() {
    const [showAnalyst, setShowAnalyst] = useState(true);
    //sự kiện nâng hạ thanh thanh toán và xóa
    useEffect(() => {
        const analystBox = document.querySelector(".analyst");
        const iconDropDown = document.querySelector(".icon-dropdown");
        const handleShowAnalyst = () => {
            setShowAnalyst(!showAnalyst);
            if (!showAnalyst) {
                analystBox.style.transform = 'translateY(0)';

            } else {
                analystBox.style.transform = 'translateY(97%)';
            }
        };
        iconDropDown.addEventListener("click", handleShowAnalyst);
    }, [showAnalyst]);



    //Sự kiện mở box đơn chi tiết
    useEffect(() => {
        const billInit = document.querySelector(".bill-init--main")
        const closeBtn = document.querySelector(".btn-close-bill--init")
        const buyNowBtns = document.querySelectorAll(".buy-now")
        buyNowBtns.forEach((btnbuy, index) => {
            btnbuy.addEventListener("click", () => {
                billInit.style.display = "flex"
            })
        })
        closeBtn.addEventListener("click", () => {
            billInit.style.display = "none"
        })

    }, []);


    return (
        <>
            <div className="cart-main container-app context-app">
                <h2 className="cart-title">
                    Giỏ hàng
                </h2>
                <ul className="cart-container">
                    <CartItem />
                </ul>
            </div>
            <div className="analyst">

                <div className="analyst-container container-app">
                    <div className="icon-dropdown">
                        {showAnalyst ? <i className="fa-solid fa-chevron-down "></i> : <i className="fa-solid fa-chevron-up"></i>}

                    </div>
                    <p className="total-money">Tổng thanh toán (1 sản phẩm): <strong>$10,000</strong></p>

                    <div className="action-analyst">
                        <i className="fa-solid fa-trash-can"></i>
                        <button className="payment">Thanh toán</button>
                    </div>
                </div>
            </div>
            <div className="bill-init--main">
                <div class="container-bill-init">
                    <div class="product-info">
                        <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQy_vAlbD-P9EyYoSDGkgvN0x1z7GEd-ZeJNR_gOLIM0ToE8OcJa5ntMINQmvT30hjD-lSz2Eq_6B3EqJd5JQr63XjKdqzAFrTtC2xnMQSjehFrbP4CyjSk2g&usqp=CAE" alt="Ảnh Sản Phẩm" class="product-image" />
                        <h2 class="product-name">
                            Bàn phím cơ Hotswap ZIFRIEND ZA68 - LED RGB
                        </h2>

                    </div>

                    <div class="customer-info">
                        <h3>Thông Tin Khách Hàng</h3>
                        <form action="/bill_bought">
                            <label for="full-name">Họ Tên:</label>
                            <input type="text" id="full-name" name="full-name" required />

                            <label for="address">Địa Chỉ:</label>
                            <input type="text" id="address" name="address" required />

                            <label for="phone">Số Điện Thoại:</label>
                            <input type="tel" id="phone" name="phone" required />
                            <div class="product-details">
                                <p><strong>Số Lượng:</strong> <span class="quantity"><i>1</i></span></p>
                                <p><strong>Đơn giá:</strong> <span class="unit-price"><i>$810</i></span></p>
                                <p><strong>Ưu đãi:</strong><span><i>-30%</i> <Crawn.CrawnGold /></span></p>
                            </div>
                            <button type="submit">Thanh Toán <b>$1000 <small>(-30%)</small></b></button>
                        </form>
                    </div>
                    <div className="btn-close-bill--init">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartPage;     