import "./DashBoardPage.scss";

import { FaUser, FaMoneyBillWave } from "react-icons/fa";
import { IoReceiptSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import Chart1 from "./Chart1/Chart1";
import Chart2 from "./Chart2/Chart2";
import Chart3 from "./Chart3/Chart3";
function DashBoardPage() {
    
  
    return (
        <>
            <div className="dashboard-main">
                <header className="dashboard-header">
                    dashboard
                </header>
                <span className="analyst-dashboard">
                    <ul>
                        <li className="dashboard-analyst-item">
                            <div className="statis-dashboard">
                                <p>Doanh thu hàng ngày</p>
                                <h1>$3,765</h1>
                            </div>
                            <div className="des-statis-dashboard">
                                <p className="success">+55%</p>
                                <p>so với ngày hôm qua</p>
                            </div>
                            <div className="sticky-dashboard">
                                <FaMoneyBillWave className="icon-sticky-dashboard" />
                            </div>
                        </li>
                        <li className="dashboard-analyst-item">
                            <div className="statis-dashboard">
                                <p>Người dùng</p>
                                <h1>45345</h1>
                            </div>
                            <div className="des-statis-dashboard">
                                <p className="success">+48 </p>
                                <p>tài khoản hơn ngày hôm qua</p>
                            </div>
                            <div className="sticky-dashboard color-pink">
                                <FaUser className="icon-sticky-dashboard" />
                            </div>
                        </li>
                        <li className="dashboard-analyst-item">
                            <div className="statis-dashboard">
                                <p>Đơn bán</p>
                                <h1>27932</h1>
                            </div>
                            <div className="des-statis-dashboard">
                                <p className="success">+934</p>
                                <p>hơn ngày hôm qua</p>
                            </div>
                            <div className="sticky-dashboard color-green">
                                <IoReceiptSharp className="icon-sticky-dashboard" />

                            </div>
                        </li>
                        <li className="dashboard-analyst-item">
                            <div className="statis-dashboard">
                                <p>Tổng doanh thu</p>
                                <h1>$53,423</h1>
                            </div>
                            <div className="des-statis-dashboard">
                                <p className="danger">-2%</p>
                                <p>hơn tháng trước</p>
                            </div>
                            <div className="sticky-dashboard  color-blue">
                                <FaMoneyBillTrendUp className="icon-sticky-dashboard" />
                            </div>
                        </li>
                    </ul>

                </span>

                <div className="container-chart-dashboard">
                    <ul>
                        <li className="item-chart-dashboard">
                            <div className="main-chart-dashboard color-gradient-dark">
                                <Chart1 />
                            </div>
                            <div className="content-chart-dashboard">
                                <h6>Đơn hàng</h6>
                                <p>Tình trạng đơn hàng theo tháng năm 2023 (đơn/tháng)</p>
                            </div>
                            <span className="des-time-chart-dashboard">
                                <i className="fa-regular fa-clock"></i>
                                <p> cập nhật đến 27/07/2023 </p>
                            </span>
                        </li>
                        <li className="item-chart-dashboard">
                            <div className="main-chart-dashboard">
                                <Chart2 />

                            </div>
                            <div className="content-chart-dashboard">
                                <h6>Doanh thu</h6>
                                <p>Tổng doanh thu theo tháng năm 2023 (k$/tháng)</p>
                            </div>
                            <span className="des-time-chart-dashboard">
                                <i className="fa-regular fa-clock"></i>
                                <p> cập nhật đến 27/07/2023 </p>
                            </span>
                        </li>
                        <li className="item-chart-dashboard">
                            <div className="main-chart-dashboard color-success">
                                <Chart3 />
                            </div>
                            <div className="content-chart-dashboard">
                                <h6>Lợi nhuận</h6>
                                <p>Lợi nhuận theo tháng năm 2023 (%/tháng)</p>
                            </div>
                            <span className="des-time-chart-dashboard">
                                <i className="fa-regular fa-clock"></i>
                                <p> cập nhật đến 27/07/2023 </p>
                            </span>
                        </li>

                    </ul>

                </div>
            </div>
        </>
    );
}

export default DashBoardPage;



