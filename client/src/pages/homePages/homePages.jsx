import "./homePage.scss";

import ProductThumnail from "../../component/productlayout/productlayout";
import LogoClient from "../../component/LogoClient/LogoClient";
import Typeproduct from "../../component/Typeproduct/Typeproduct";
import SliderProduct from "../../component/SilderProduct/SilderProduct";
function HomePage() {
  return (
    <div className="container-app home-page context-app">
      {/* client */}
      <div className="container-home">
        <div className="client">
          <span className="heading-client">Đối tác</span>
          <span className="title-client">
            Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới
          </span>
        </div>
        <div className="logo-client">
          <SliderProduct componentChild={<LogoClient />} />
        </div>
      </div>
      {/* sản phẩm theo danh mục */}
      <div className="container-home">
        <div className="client">
          <span className="heading-client">Sản phẩm theo danh mục</span>
          <span className="title-client">
            Bộ sưu tập những thương hiệu nổi tiếng về smartwatch trên thế giới
          </span>
        </div>
        <div className="logo-client">
          <SliderProduct componentChild={<Typeproduct />} />
        </div>
        {/* danh sach san pham */}
        <div className="lists-product-main">
          {/* <SliderProduct elementThumnail={<ProductThumnail />} /> */}
        </div>
      </div>
      {/* san pham moi */}
      <div className="container-home">
        <div className="client">
          <span className="heading-client">Sản phẩm mới</span>
          <span className="title-client">
            Những chiếc đồng hồ thể hiện đẳng cấp, thể thao dành cho phái mạnh
          </span>
        </div>
        {/* danh sach san pham */}
        <div className="lists-product-main">
          <SliderProduct componentChild={<ProductThumnail />} />
        </div>
      </div>
      {/* san pham ban chay */}
      <div className="container-home">
        <div className="client">
          <span className="heading-client">Sản phẩm bán chạy</span>
          <span className="title-client">
            Bộ sưu tập những sản phẩm sang chảnh, thông minh dành cho nữ giới
          </span>
        </div>
        {/* danh sach san pham */}
        <div className="lists-product-main">
          <SliderProduct componentChild={<ProductThumnail />} />
        </div>
      </div>
    </div>
  );
}
export default HomePage;
