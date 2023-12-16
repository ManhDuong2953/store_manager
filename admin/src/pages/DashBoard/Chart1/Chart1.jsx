import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
function Chart1() {
    const chartBillStore = useRef(null);

    useEffect(() => {
        const labels = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];
        // Tạo mảng dữ liệu mẫu cho "Đơn nhập" và "Đã bán"
        const dataNhap = [65, 45, 53, 75, 35, 60, 50, 70, 80, 95, 85, 70];
        const dataDaBan = [53, 34, 48, 70, 30, 50, 40, 60, 70, 80, 65, 55];

        // Tính mảng "Tồn kho" từ việc trừ mảng "Đơn nhập" và "Đã bán"
        const dataTonKho = dataNhap.map((value, index) => value - dataDaBan[index]);

        const data = {
            labels: labels,
            datasets: [

                {
                    label: 'Tồn kho',
                    backgroundColor: 'rgba(255, 99, 132, 0.8)', // Màu nền của dòng "Tồn kho"
                    borderColor: 'rgba(255, 99, 132, 1)', // Màu viền của dòng "Tồn kho"
                    data: dataTonKho,
                    categoryPercentage: 1,
                    maxBarThickness: 14,
                    borderRadius: 3
                }, {
                    label: 'Đã bán',
                    backgroundColor: 'rgba(54, 162, 235, 0.8)', // Màu nền của dòng "Đã bán"
                    borderColor: 'rgba(54, 162, 235, 1)', // Màu viền của dòng "Đã bán"
                    data: dataDaBan,
                    categoryPercentage: 1,
                    maxBarThickness: 14,
                    borderRadius: 3,
                },
            ],
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        grid: {
                            borderDash: [5, 5], // Đặt lưới thành dạng dotted (chấm chấm)
                            color: '#515156', // Màu của lưới trên trục x (dọc)
                            display: true,
                        },
                        ticks: {
                            weight: 500,
                            color: 'white' // Màu chữ của các nhãn trục x (VD: 'Tháng 1', 'Tháng 2',...)
                        }
                    },
                    x: {
                        beginAtZero: true,
                        stacked: true,
                        grid: {
                            borderDash: [5, 5], // Đặt lưới thành dạng dotted (chấm chấm)
                            color: '#515156', // Màu của lưới trên trục x (dọc)
                            display: true // Ẩn các đường grid trên trục x nếu không muốn hiển thị
                        },
                        ticks: {
                            weight: 500,
                            color: 'white' // Màu chữ của các nhãn trục x (VD: 'Tháng 1', 'Tháng 2',...)
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white', // Màu sắc của các nhãn (labels) trong legend
                        },
                    },
                },

            }
        };

        const chartInstance = new Chart(chartBillStore.current, config);
        return () => {
            // Hủy biểu đồ khi component bị hủy (destroyed)
            chartInstance.destroy();
        };
    }, []);
    return (<>
        <canvas id="bill-in" ref={chartBillStore} className="chart-canvas"></canvas>
    </>);
}

export default Chart1;