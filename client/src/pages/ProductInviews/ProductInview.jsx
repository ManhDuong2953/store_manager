import ProductThumnail from "../../component/productlayout/productlayout";
import SliderProduct from "../../component/SilderProduct/SilderProduct";
import './ProductInview.scss';
import ModalLayout from "../../component/modalLayout/modalLayout";
import { useEffect, useState } from "react";
function ProductInview() {
    const images = [
        "https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-de-thuong.jpg",
        "https://samkyvuong.vn/wp-content/uploads/2022/05/girl-usa-lanh-lung.jpg",
        "https://luv.vn/wp-content/uploads/2022/07/gai-tay-dep-14.jpg",
        "https://samkyvuong.vn/wp-content/uploads/2022/05/girl-xinh.jpg",
        "https://haycafe.vn/wp-content/uploads/2022/02/Tai-anh-gai-xinh-Viet-Nam-de-thuong-600x600.jpg",
        "https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg"
    ];

    const [Quantity, setQuantity] = useState(1)
    useEffect(() => {
        //Sử lý sự kiện hiện thông báp của cartplus
        const modalElement = document.querySelector(".container-modal")
        const plusBtnCart = document.querySelector(".plus-btn-cart")
        plusBtnCart.addEventListener("click", (e) => {
            e.preventDefault()
            modalElement.style.animation = "showModal 10s forwards";
            plusBtnCart.disabled = true;
        })




        //Xử lú sự kiện ảnh nhỏ và ảnh thumbnails
        const btnPrev = document.querySelector(".btn-prev");
        const btnNext = document.querySelector(".btn-next");
        const imgThumbnail = document.querySelector(".img-thumnail");
        const listImg = document.querySelector(".img-small");
        const imgItems = document.querySelectorAll(".img-small li");
        const numberShow = 4;
        let counter = 0;
        const numberImg = imgItems.length;

        const maxNext = numberImg - numberShow;
        btnNext.addEventListener("click", () => {
            counter++;
            if (maxNext == counter) {
                btnNext.style.display = "none";
            }
            if (maxNext >= counter) {
                listImg.style.transform = `translateX(${-25 * counter}%)`;
                btnPrev.style.display = "block";
            }
        });

        btnPrev.addEventListener("click", () => {
            counter--;
            if (counter === 0) {
                btnPrev.style.display = "none";
            }
            if (counter >= 0) {
                listImg.style.transform = `translateX(${-25 * counter}%)`;
                btnNext.style.display = "block";
            }
        });

        imgItems.forEach((item) => {
            item.addEventListener("click", () => {
                imgThumbnail.src = item.children[0].src;
            });
        });
    }, []);



    return (<>
        <ModalLayout />
        <div className="container-product-inview container-app context-app">
            <div className="detail-product-inview">
                <div className="avt-product-inview">
                    <img className="img-thumnail" src="https://hinhanh.webvua.com/images/item/4752/resize/2308808482202.jpg" alt="" />
                    <div className="slide-img-small-container">
                        <ul className="img-small">
                            {images && images.map((image, index) => (
                                <li key={index}>
                                    <img src={image} alt="" />
                                </li>
                            ))}
                        </ul>
                        <button className="btn-prev"><i class="fa-solid fa-angle-left"></i></button>
                        <button className="btn-next"><i class="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
                <div className="detail-product-items">
                    <h1>Amazfit GTS nội địa</h1>
                    <span>2,500,000₫</span>
                    <p>Theo dõi giấc ngủ, Đo nhịp tim, Tính lượng Calories tiêu thụ, Đếm số bước chân, Tính quãng đường chạy, Chế độ luyện tập, Báo thức, Màn hình luôn hiển thị, Từ chối cuộc gọi, Đồng hồ bấm giờ, Rung thông báo, Thay mặt đồng hồ</p>
                    <h4>Số lượng:</h4>
                    <form className="btn-product-inview">
                        <div className='count-product-cart'>
                            <i className="fas fa-minus-circle" onClick={() => setQuantity(e => e >= 2 ? e - 1 : 1)}></i>
                            <input type="number" name="quanity" value={Quantity} readOnly />
                            <i className="fas fa-plus-circle" onClick={() => setQuantity(e =>  e + 1 )}></i>
                        </div>
                        <button className='plus-btn-cart'><i className="fas fa-shopping-basket"></i>Cho vào giỏ hàng</button>
                    </form>
                </div>
            </div>
            <div className="product-involve-inview">
                <h1>Sản phẩm liên quan</h1>
                <div className="list-product-involve">
                    <SliderProduct componentChild={<ProductThumnail />} />
                </div>
            </div>
        </div>
    </>);
}

export default ProductInview;
