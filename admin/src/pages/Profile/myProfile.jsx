// import React from "react";
import "./myProfile.scss";
import { Link, useParams } from "react-router-dom";
import ThumbnailInfor from "./ThumbnailInfor/ThumbnailInfor";
import { API_GET_EMPLOYEE_BY_ID, API_DELETE_EMPLOYEE } from '../../configs/API';
import { useCallback, useEffect, useState } from "react";
import { formatDate, getAge } from "../../components/formatDate/formatDate";


function MyProfile() {
    const { id } = useParams()
    const [dataEmployee, setDataEmployee] = useState([]); // set list of employees
    useEffect(() => {
        fetch(API_GET_EMPLOYEE_BY_ID + id)
            .then(response => response.json())
            .then(data => {
                setDataEmployee(data[0]); // Set the employee data
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, []);


    const handleDeleteEmployee = useCallback(() => {
        fetch(API_DELETE_EMPLOYEE + id, {
            method: 'DELETE'
        })
    }, [id])

    return (

        <div className="my-profile-container">
            <header className="header-container"></header>
            <Link to="/admin/managedEmployee"><i className="fa-solid fa-circle-left"></i></Link>
            <div className="content-profile">
                <div className="content-profile__main">

                    <div className="quick-info">
                        <ThumbnailInfor data={dataEmployee} />
                        <ul className="list-group list-group-flush">
                            <h4>Liên Hệ</h4>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                <span className="text-secondary"><a style={{ "fontWeight": "700" }} href={dataEmployee && dataEmployee.link_social}>{dataEmployee && dataEmployee.name_user}</a></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><i className="fa-solid fa-phone"></i>SĐT</h6>
                                <span className="text-secondary">{dataEmployee && dataEmployee.phone_number}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><i className="fa-solid fa-envelope"></i>Email</h6>
                                <span className="text-secondary">{dataEmployee && dataEmployee.email}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="detail-info">
                        <h2>Thông tin nhân sự
                            <span className="action-admin">
                                <Link to={`/admin/profile/edit/${id}`}>
                                    <button>Sửa thông tin<i className="fa-solid fa-pen-to-square"></i></button>
                                </Link>
                                <Link to="/admin/managedEmployee"><button onClick={handleDeleteEmployee}>Sa thải<i className="fa-solid fa-scissors"></i></button></Link>
                            </span>
                        </h2>


                        <div className="employee-info">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Mã nhân viên:</th>
                                        <td>{dataEmployee && dataEmployee.id_user}</td>
                                    </tr>
                                    <tr>
                                        <th>Họ và tên:</th>
                                        <td>{dataEmployee && dataEmployee.name_user}</td>
                                    </tr>
                                    <tr>
                                        <th>Ngày sinh:</th>
                                        <td>{dataEmployee && formatDate(dataEmployee.dob, "dd/mm/yy")}</td>
                                    </tr>
                                    <tr>
                                        <th>Tuổi:</th>
                                        <td>{dataEmployee && getAge(dataEmployee.dob)} tuổi</td>
                                    </tr>
                                    <tr>
                                        <th>Giới tính:</th>
                                        <td>{dataEmployee && dataEmployee.gender}</td>
                                    </tr>
                                    <tr>
                                        <th>Địa chỉ:</th>
                                        <td>{dataEmployee && dataEmployee.address}</td>
                                    </tr>
                                    <tr>
                                        <th>Trình độ học vấn:</th>
                                        <td>{dataEmployee && dataEmployee.literacy}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>



                    </div>
                </div>
                <div className="employee-details">
                    {
                        dataEmployee && dataEmployee.introduce && (

                            <div className="introduce-container">
                                <h2>
                                    Giới thiệu
                                </h2>
                                <p className="introduce">{dataEmployee && <p className="content-intro" dangerouslySetInnerHTML={{ __html: dataEmployee.introduce }} />}</p>
                            </div>
                        )
                    }
                </div>

            </div>

        </div>

    );
}


export default MyProfile;
