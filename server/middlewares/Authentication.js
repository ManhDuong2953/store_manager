import { checkRefreshToken, createAccessToken, isExpiredToken } from "./handleToken";
import { checkLogin } from "../src/models/Login/login.model";
const jwt = require("jsonwebtoken");
require("dotenv").config()

export async function Authentication(req, res, next) {
    const access_token = req.headers?.authorization?.split(' ')[1];
    if (access_token) { // xác thực access token
        jwt.verify(access_token, process.env.SECRETKEYACCESSTOKEN, async (err, data) => {
            if (err) {
                if (isExpiredToken(access_token, process.env.SECRETKEYACCESSTOKEN)) {
                    const tokenData = jwt.decode(access_token);

                    res.clearCookie('accessToken');
                    if (checkRefreshToken(tokenData.id_user)) {
                        const accessToken = await createAccessToken(tokenData);
                        res.cookie('accessToken', accessToken, { maxAge: 4*24*3600*1000, httpOnly: false, secure: true });
                        req.body.accessToken = accessToken;
                    }
                }
                res.status(401).json({ error: "Tài khoản đã hết hạn hoặc không hợp lệ" });
            } else {
                console.log("đăng nhập bằng token");
                req.body.accessToken = access_token;
                next();
            }
        })
    } else { // đăng nhập thông thường nếu không có token
        const userData = req.body;
        try {
            const dataUser = await checkLogin({ "name_account": userData.name_account, "passwords": userData.password });
            if (dataUser) {
                console.log("đăng nhập bằng user và password");
                const accessToken = await createAccessToken(dataUser);
                res.cookie('accessToken', accessToken, { maxAge: 4*24*3600*1000, httpOnly: false, secure: true });
                req.body.accessToken = accessToken;

                next();
            } else {
                res.status(401).json({ error: "Tên tài khoản hoặc mật khẩu không chính xác" });
            }
        } catch (error) {
            res.status(500).json({ error: "Đã xảy ra lỗi trong quá trình xử lý" });
        }
    }
}

