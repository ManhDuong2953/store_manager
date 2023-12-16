import pool from "../../../configs/database/database.config";
const jwt = require('jsonwebtoken');
require("dotenv").config()
export async function checkLogin({ name_account, passwords }) {
    try {
        const query = "SELECT * FROM users WHERE name_account = ? AND passwords = ?";
        const [result] = await pool.execute(query, [name_account, passwords]);
        if (result) {
            return result[0];
        }
        return "Tên tài khoản hoặc mật khẩu không đúng.";
    } catch (error) {
        console.log(error.message);
        return null;
    }
};




export async function checkExpiredToken(token, sceretKey) {

    try {
        const query = "SELECT * FROM token_login WHERE refresh_token = ?";
        const [result] = await pool.execute(query, token);
        if (result) {
            const decode = jwt.verify(token, sceretKey)
            if (parseInt(decode.exp) > Date.now() / 1000) {
                return true
            }
        }
        return false;
    }
    catch (error) {
        console.log(error.message);
        return null;
    }
}


export async function postToken(idUser, refreshToken, EXP) {
    try {
        const query = "INSERT INTO token_login(id_user, refresh_token, expiration_date) value(?,?,?)";
        const [result] = await pool.execute(query, [idUser, refreshToken, EXP]);
        return result;
    }
    catch (error) {
        console.log(error.message);
        return null;
    }
}


