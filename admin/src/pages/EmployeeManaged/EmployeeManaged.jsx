import { useCallback, useState, useEffect } from 'react';
import getDataForm from '../../utils/handleForm/handleForm';
import { API_GET_ALL_EMPLOYEE, API_POST_EMPLOYEE, API_FILTER_EMPLOYEE } from '../../configs/API';
import './EmployeeManaged.scss';
import { Link } from 'react-router-dom';
import { getAge } from '../../utils/formatDate/formatDate';
import { calculateDaysWorked } from '../../utils/formatDate/formatDate';
import getToken from '../../utils/getToken/getToken';
function EmployeeManaged() {

    const [listEmployee, setListEmployee] = useState([]); // set list of employees
    const [employeeData, setEmployeeData] = useState({}) // get new employee data
    const [keywordValue, setKeywordValue] = useState('') // set new keyword

    //handle open registration form
    const handleBtnAdd = useCallback((e) => {
        document.querySelector(".add_empl").classList.toggle("active");
        e.target.className = "fa-solid fa-user-plus"
        if (document.querySelector(".add_empl.active")) {
            e.target.className = "fa-regular fa-rectangle-xmark"
        }
    }, [])

    // send data to server
    const sendData = useCallback(async (data) => {
        console.log(data);
        const response = await fetch(API_POST_EMPLOYEE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
            body: JSON.stringify(data)
        })
        
        if(response.status === 403) {
            alert("Bạn không đủ thẩm quyền. Hãy liên hệ với nhà quản lý để thực hiện tác vụ!")
        }    
    }, [])

    //handle submit event
    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendData(getDataForm(".add_empl")); // Send the data to the server
        setEmployeeData({}); // Reset the employee data after sending
    }




    useEffect(() => {
        const res= fetch(API_GET_ALL_EMPLOYEE, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setListEmployee(data.data); // Set the employee data
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
           
    }, [employeeData]);

    // nút xử lí tìm nhân viên
    const handleBtnSearchSubmit = useCallback(() => {
        const keyword = getDataForm(".form-left").keyword_filter;
        fetch(API_FILTER_EMPLOYEE + keyword, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setListEmployee(data.data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [keywordValue, listEmployee]);


    const handleSetKeywordFilter = (e) => {
        setKeywordValue(e)
    }




    return (<>
        <div className="container-employee">
            <div className="form-create-product-out">
                <h1>Quản lý nhân sự</h1>
                <div className="form-container">
                    <div >
                        <div className="btn-event-product">
                            <i className="fa-solid fa-user-plus" onClick={handleBtnAdd}></i>
                            <form className="add_empl" method='post'>
                                <input type="text" id="user_name" name='name_user' placeholder='Tên nhân viên' />
                                <input type="text" id="name_acc" name='name_account' placeholder='Tên tài khoản' />
                                <input type="text" id="password" name='passwords' placeholder='Mật khẩu' />
                                <select name="access_right" id="">
                                    <option value="Employee">Nhân viên</option>
                                    <option value="Admin">Quản lý</option>
                                </select>
                                <input type="submit" onClick={handleSubmit} value="Thêm nhân viên" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-left">
                <div className="input-form-product-out">
                    <input onChange={(e) => handleSetKeywordFilter(e.target.value)} type="text" id="ma-hoa-don" name='keyword_filter' placeholder='Nhập mã, tên nhân viên, giới tính, trình độ học vấn,...' />
                </div>
                <input onClick={handleBtnSearchSubmit} type="submit" value="Tìm kiếm" />

            </div>
            <div className="table">

                <div className="row header blue">
                    <div className="cell">
                        N.o
                    </div>
                    <div className="cell">
                        ID
                    </div>
                    <div className="cell">
                        Tên nhân viên
                    </div>
                    <div className="cell">
                        Giới tính
                    </div>
                    <div className="cell">
                        Tuổi
                    </div>
                    <div className="cell">
                        Trình độ học vấn
                    </div>
                    <div className="cell">
                        Tên tài khoản
                    </div>
                    <div className="cell">
                        Mật Khẩu
                    </div>
                    <div className="cell">
                        Ngày công
                    </div>
                </div>

                {
                    listEmployee.length > 0 && listEmployee.map((employee, index) => (
                        <div className="row" key={index}>

                            <div className="cell" data-title="top">
                                {index + 1}
                            </div>
                            <div className="cell" data-title="id">
                                {employee.id_user}
                            </div>
                            <div className="cell" data-title="Username">
                                <Link to={`/profile/${employee.id_user}`}>{employee.name_user}</Link>
                            </div>
                            <div className="cell" data-title="Gender">
                                {employee.gender}
                            </div>
                            <div className="cell" data-title="age">
                                {getAge(employee.dob)} tuổi
                            </div>
                            <div className="cell" data-title="Accname">
                                {employee.literacy}
                            </div>
                            <div className="cell" data-title="Accname">
                                {employee.name_account}
                            </div>
                            <div className="cell" data-title="password">
                                {employee.passwords}
                            </div>
                            <div className="cell" data-title="monthofwork">
                                {calculateDaysWorked(employee.date_in)} ngày
                            </div>
                        </div>

                    ))
                }


            </div>
        </div>
    </>);
}

export default EmployeeManaged;