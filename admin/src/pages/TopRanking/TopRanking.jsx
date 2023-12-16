import "./TopRanking.scss"
import ImgGold from "../../assets/top/gold.png"
import ImgSilver from "../../assets/top/silver.png"
import ImgBroze from "../../assets/top/broze.png"
import { useEffect } from "react"
function TopRanking() {
    useEffect(() => {

        const searchInput = document.getElementById("search-input");
        const dataTable = document.getElementById("data-table");

        searchInput.addEventListener("keyup", function () {
            const searchValue = this.value.toLowerCase();
            const rows = dataTable.getElementsByTagName("tr");

            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                const rowData = row.getElementsByTagName("td");
                let found = false;

                for (let j = 0; j < rowData.length; j++) {
                    const cell = rowData[j];

                    if (cell.innerHTML.toLowerCase().indexOf(searchValue) > -1) {
                        found = true;
                        break;
                    }
                }

                if (found) {
                    row.style.display = "table-row";
                } else {
                    row.style.display = "none";
                }
            }
        });
    }, [])
    return (<>
        <div className="container-ranking">
            <span>
                <h3>Bảng xếp hạng nhân sự tháng 7/2023</h3>
                <input
                    type="text"
                    id="search-input"
                    placeholder="Nhập id, họ tên, SĐT,..."
                />
            </span>
            <table className="styled-table" id="data-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã nhân viên</th>
                        <th>Họ và tên</th>
                        <th>Số điện thoại</th>
                        <th>Chức vụ</th>
                        <th>Số đơn</th>
                        <th>Doanh thu</th>
                        <th>Hoa hồng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={ImgGold} alt="" /></td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><img src={ImgSilver} alt="" /></td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><img src={ImgBroze} alt="" /></td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr> <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr> <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr> <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr> <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div className="container-ranking suplier">
            <span>
                <h3>Bảng xếp hạng đối tác có doanh thu lớn nhất tháng 7/2023</h3>
                <input
                    type="text"
                    id="search-input"
                    placeholder="Nhập id, họ tên, SĐT,..."
                />
            </span>
            <table className="styled-table" id="data-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã nhân viên</th>
                        <th>Họ và tên</th>
                        <th>Số điện thoại</th>
                        <th>Chức vụ</th>
                        <th>Số đơn</th>
                        <th>Doanh thu</th>
                        <th>Hoa hồng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={ImgGold} alt="" /></td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><img src={ImgSilver} alt="" /></td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><img src={ImgBroze} alt="" /></td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr> <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr> <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr> <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr> <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="container-ranking customer">
            <span>
                <h3>Bảng xếp hạng 10 khách hàng có lượng mua lớn nhất tháng 7/2023</h3>
                <input
                    type="text"
                    id="search-input"
                    placeholder="Nhập id, họ tên, SĐT,..."
                />
            </span>
            <table className="styled-table" id="data-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã nhân viên</th>
                        <th>Họ và tên</th>
                        <th>Số điện thoại</th>
                        <th>Chức vụ</th>
                        <th>Số đơn</th>
                        <th>Doanh thu</th>
                        <th>Hoa hồng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={ImgGold} alt="" /></td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><img src={ImgSilver} alt="" /></td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><img src={ImgBroze} alt="" /></td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr> <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr> <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr> <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr> <tr>
                        <td>001</td>
                        <td>IT1</td>
                        <td>Tiêu Công Cường</td>
                        <td>0369302191</td>
                        <td>Nhân viên saler</td>
                        <td>1000000</td>
                        <td>10000000</td>
                        <td>1000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>);
}

export default TopRanking;