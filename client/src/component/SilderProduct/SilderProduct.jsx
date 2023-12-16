import React, { Fragment, useEffect } from "react";
import "./SilderProduct.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ProductThumnail from "../productlayout/productlayout";

function SliderProduct({ componentChild }) {
    // Đây là mảng chứa các item thực tế mà bạn muốn hiển thị.
    const products = [
        componentChild,
        componentChild,
        componentChild,
        componentChild,
        componentChild,
        componentChild,
    ];


    const productQuantityBegin = 6   //để dùng khi gọi useeffect nó đã có đủ bao gồ cả phần từ null, lấy số phần tử khi fetch
    const itemsToShow = 5; // số item hiện trong 1 khung sliders
    const totalItems = (productQuantityBegin < itemsToShow) ?
        Math.max(itemsToShow, productQuantityBegin) :
        Math.min(itemsToShow, productQuantityBegin); // lấy số nhỏ nhất trong trừng hợp ít hơn slidertoshow

    // Thêm các items trống (null) vào mảng để đạt đủ số lượng `slidesToShow`
    while (products.length <= totalItems) {
        products.push(null);
    }


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: itemsToShow,
        slidesToScroll: 1,
        autoplay: false,
    };

    useEffect(() => {

        //Nếu số item nhỏ hơn bằng slidetoshow thì thêm vào mảng item  các giá trị null để quy đổi thành thẻ dummy-item chèn vào các chỗ trống
        if (productQuantityBegin <= totalItems) {
            const buttonLeft = document.querySelectorAll(".slick-arrow");
            buttonLeft.forEach(e => {
                e.style.display = "none"
            })
        } else { // Nếu không thì xóa các thẻ item dummy item đi
            const divEmpty = document.querySelectorAll(".slick-slide");
            divEmpty.forEach(e => {
                if (document.querySelector(".dummy-item")) {
                    e.remove()
                }
            })
        }
    }, [])
    return (
        <div className="slideshow-container">
            <Slider {...settings} className="list-new-film">
                {products && products.map((product, index) => (
                    <Fragment key={index}>{
                        product !== null ? (
                            product
                        ) : (
                            <div className="dummy-item" />
                        )
                    }
                    </Fragment>)
                )}
            </Slider>
        </div>
    );
}

export default SliderProduct;
