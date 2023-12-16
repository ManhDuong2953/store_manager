import moment from "moment";
const jwt = require('jsonwebtoken');
require("dotenv").config();

export async function checkMissingInputs(req, res, next) {
    const body = await req.body;
    const datePattern = /(\d{4})-(\d{2})-(\d{2})/; // Định dạng YYYY-MM-DD
    // Chuyển các giá trị "null", "undefined", "" thành null
    for (const key in body) {
        const value = body[key];
        if (value === "null" || value === "undefined" || value === "" || value === undefined) {
            body[key] = null;
        }
        if (value.match(datePattern)) {
            const formattedDate = moment(value).format('YYYY-MM-DD HH:mm:ss');
            body[key] = formattedDate;
        }
    }
    req.body = body;
    next();
}



function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}


export function createAccessToken(req, res, next) {
    if (req.body.data.id_user && req.body.data.name_account && req.body.data.access_right) {
        const payload = {
            id: req.body.data.id_user,
            name_account: req.body.data.name_account,
            access_right: req.body.data.access_right
        }

        const accessToken = jwt.sign(payload, process.env.SECRETKEYACCESSTOKEN, {
            expiresIn: '5m', //
        });

        const refreshToken = jwt.sign(payload,  process.env.SECRETKEYREFRESHTOKEN, {
            expiresIn: '5h', //
        });
        req.body.accessToken = accessToken;
        req.body.refreshToken = refreshToken;
    }
    // req.body.data = {} // xóa dữ liệu người dùng
    next();
}


// export function Authorization(req, res, next) {

// }