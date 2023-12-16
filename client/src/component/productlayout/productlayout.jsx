import "./productlayout.scss";
import { Link } from "react-router-dom";

function ProductThumnail() {

  return (
    <div className="list-product-container">
      <Link to="/inview/1">
        <div className="list-items-product">
          <div className="image-product-detail">
            <div className="avt-img-product-home">
              <img
                src="https://hinhanh.webvua.com/images/item/4752/resize/2003002200703.jpg"
                alt=""
                className="img-item-product"
              />
            </div>
          </div>
          <p className="name-item-product">Apple Watch Series 6</p>
          <p className="price-item-product">10,000,000₫</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductThumnail;
