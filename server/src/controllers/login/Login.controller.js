import { checkLogin, checkToken } from "../../models/login/Login.model";

export async function UserLogin(req, res, next) {
    // var cookie = req.cookies.accessToken;
    var cookie = null;

    // if(cookie){
    //     const isAccessToken = await User.checkToken(cookie);
    //     //
    // }



    if (!cookie) {
        const userData = req.body;
        try {
            const loggedInUser = await checkLogin({ "name_account": userData.name_account, "passwords": userData.password });
            if (loggedInUser) { // kiểm tra có người dùng
                req.body = { "data": loggedInUser };
                next()
            } else {
                res.status(401).json({ error: "Tên tài khoản hoặc mật khẩu không chính xác" });
            }
        } catch (error) {
            res.status(500).json({ error: "Đã xảy ra lỗi trong quá trình xử lý" });
        }
    }
}


