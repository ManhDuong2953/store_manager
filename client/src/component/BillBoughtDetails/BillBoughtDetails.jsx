import "./BillBoughtDetails.scss";
import Craw from "../FrientlyCustomer/CrawnLabel"
function BillBoughtDetails() {
    return (
        <div className="bill-detail container-app context-app">
            <h2 className="bill-title">
                Hóa đơn mua hàng
            </h2>
            <div className="order">
                <p className="bill-id"><strong>Mã hóa đơn:</strong> HD001 (* Chỉ đọc)</p>
                <div className="info-container">
                    <img src="https://artia.vn/wp-content/uploads/2020/11/Giay-BURBERRY-cho-Nam-33-1200x800.jpg" alt="Ảnh sản phẩm" />
                    <div className="info">
                        <div className="product">
                            <h2>Thông tin sản phẩm</h2>
                            <p><strong>Tên người bán:</strong> Chanel Shop</p>
                            <p><strong>SĐT:</strong> 024244222</p>
                            <p><strong>Tên sản phẩm:</strong> Sản phẩm A</p>
                            <p><strong>Đơn giá:</strong> $1000</p>
                            <p><strong>Số lượng mua:</strong> 2</p>
                            <p><strong>Ngày bán:</strong> 2023-07-23</p>
                            <p><strong>Trạng thái giao:</strong> Đang giao</p>
                        </div>
                        <div className="customer">
                            <h2>Thông tin khách hàng</h2>
                            <p><strong>Tên Khách Hàng:</strong> Nguyễn Văn A</p>
                            <p><strong>Địa chỉ:</strong> Số 1, Đường ABC, Quận XYZ</p>
                            <p><strong>Số điện thoại:</strong> 0123456789</p>
                            <p><strong>Ưu đãi:</strong> -30% <Craw.CrawnGold/></p>

                            <button><strong>Thành tiền:</strong> $980</button>
                        </div>
                    </div>
                </div>
                <p className="warning">* Lưu ý: Sản phẩm không được phép đồng kiểm, HÃY QUAY VIDEO quá trình mở hộp sẽ có lợi cho bạn nếu có khiếu nại về sản phầm</p>
            </div>
        </div>
    );
}

export default BillBoughtDetails;