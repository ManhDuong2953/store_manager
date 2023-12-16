import { useEffect } from "react";
import "./myProfile.scss"
function ProfilePages() {
    useEffect(() => {
        const inputImg = document.querySelector('#input-img')
        inputImg.addEventListener('input', (e) => {
            let file = e.target.files[0]
            if (!file) return
            let img = document.createElement('img')
            img.className = "img_preview"
            img.src = URL.createObjectURL(file)
            document.querySelector("#avt_link_img").value = inputImg.value.substring(inputImg.value.lastIndexOf('\\') + 1);
            document.querySelector('.preview').appendChild(img)
        })

    }, []);
    return (
        <div className="profile-container container-app context-app">
            <div className="proleft">
                <div className="my-profile">

                    <img src="https://antimatter.vn/wp-content/uploads/2022/11/anh-avatar-trang-fb-mac-dinh.jpg" alt="" className="img-avt" />
                </div>
                <div className="my-account">
                    <img src="https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4" alt="" />
                    <span>Tài khoản của tôi</span>
                </div>
                <a href="" className="hoso">
                    <h4>Hồ sơ</h4>
                </a>
                <form action="./Logout.php" className="hoso donban">
                    <input className="logout" type="submit" value="Đăng xuất" />
                </form>
            </div>
            <div className="proright">
                <div className="b7wtmP">
                    <div className="_66hYBa">
                        <div className="fgdwer">
                            <h1 className="SbCTde">Hồ sơ của tôi</h1>
                            <div className="zptdmA">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
                        </div>
                        <b className="sodu">Số dư tài khoản:  đ</b>

                    </div>
                    <div className="R-Gpdg">

                        <form className="form-profile" action="./ProfileAction.php" method="post" enctype="multipart/form-data">
                            <span className="input-profile">
                                <div className="volt8A">
                                    <table className="Zj7UK+">
                                        <tr>
                                            <td className="espR83"><label>Tên đăng nhập</label></td>
                                            <td className="Tmj5Z6">
                                                <div className="_0ZgK9X">
                                                    <div className="W50dp5"><input type="text" name="username" placeholder="" value="" className="CMyrTJ" /></div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="espR83"><label>Email</label></td>
                                            <td className="Tmj5Z6">
                                                <div className="_0ZgK9X">
                                                    <div className="W50dp5"><input type="text" name="email" placeholder="" value="" className="CMyrTJ" /></div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="espR83"><label>Địa chỉ</label></td>
                                            <td className="Tmj5Z6">
                                                <div className="_0ZgK9X">
                                                    <div className="W50dp5"><input type="text" name="address" placeholder="" value="" className="CMyrTJ" /></div>

                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="espR83"><label>Số điện thoại</label></td>
                                            <td className="Tmj5Z6">
                                                <div className="_0ZgK9X">
                                                    <div className="W50dp5"><input type="text" placeholder="" name="phone" value="" className="CMyrTJ" /></div>

                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="espR83"><label>Giới tính</label></td>
                                            <td className="Tmj5Z6">
                                                Nam
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="espR83"><label>Ngày sinh</label></td>
                                            <td className="Tmj5Z6">
                                                29/05/2003
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="espR83"><label>Ảnh đại diện</label></td>
                                            <td className="Tmj5Z6">
                                                <div className="W50dp5"><input id="avt_link_img" disabled type="text" placeholder="" name="img_link" className="CMyrTJ" /></div>

                                            </td>
                                        </tr>

                                    </table>

                                </div>


                            </span>
                            <tr>
                                <td className="espR83"><label></label></td>
                                <td className="Tmj5Z6"><input type="submit" value="Lưu" className="btn btn-solid-primary btn--m btn--inline" />
                                </td>
                            </tr>
                        </form>
                        <div className="IQPHvE">
                            <div className="scvgOW">

                                <div className="container-upload_img">
                                    <label for="input-img" className="preview">
                                        <i className="fas fa-cloud-upload-alt"></i>

                                    </label>
                                    <input type="file" hidden id="input-img" name="img_post" className="upload-file" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePages;