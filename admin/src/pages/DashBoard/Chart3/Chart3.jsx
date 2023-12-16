import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
function Chart3() {
    const chartBillStore = useRef(null);

    useEffect(() => {
        const labels = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];
        // Tạo mảng dữ liệu mẫu cho "Đơn nhập" và "Đã bán"
        const profit = [10, 23, 23, 4, 76, 55, 67, 78, 80, 6, 85, 88];


        const data = {
            labels: labels,
            color:"white",
            datasets: [
              {
                label: 'Lợi nhuận',
                backgroundColor: 'white', // Màu nền của dòng "Đã bán"
                borderColor: 'white', // Màu viền của dòng "Đã bán"
                data: profit,
                maxBarThickness: 10,
              }
            ],
          };
        
        
          const config = {
            type: 'line',
            data: data,
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  grid: {
                    drawBorder: false,
                      display: true,
                      drawOnChartArea: true,
                      drawTicks: false,
                      borderDash: [5, 5],
                      color: 'rgba(255, 255, 255, .2)'
                  },
                  ticks: {
                    weight: 500,
                    color: 'white' // Màu chữ của các nhãn trục x (VD: 'Tháng 1', 'Tháng 2',...)
                  }
                },
                x: {
                  beginAtZero: true,
                  grid: {
                    display: false // Ẩn các đường grid trên trục x nếu không muốn hiển thị
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
        <canvas ref={chartBillStore} className="chart-canvas"></canvas>
    </>);
}

export default Chart3;