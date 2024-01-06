const jwt = require('jsonwebtoken');
require("dotenv").config()
import pool from '../configs/database/database.config';



//check hạn của 
export async function isExpiredToken(token, sceretKey) {
    try {
        const decode = jwt.verify(token, sceretKey)
        if (parseInt(decode.exp) > Date.now() / 1000) {
            return false;
        }
        return true;
    }
    catch (error) {
        console.log(error.message);
        return null;
    }
}


export async function checkRefreshToken(id_user) {
    try {
        const query = "SELECT * FROM token_login WHERE id_user = ?";
        const [result] = await pool.execute(query, [id_user]);
        if (result.length > 0) {
            return true
        }
        return false;
    }
    catch (error) {
        console.log(error.message);
        return false;
    }
}




export async function postRefreshToken(idUser, refreshToken) {
    try {
        if (await checkRefreshToken(idUser)) {
            // If the user exists, update the refresh token
            const updateQuery = "UPDATE token_login SET refresh_token = ? WHERE id_user = ?";
            const [updateResult] = await pool.execute(updateQuery, [refreshToken, idUser]);
            return updateResult;
        } else {
            // If the user doesn't exist, insert a new record
            const insertQuery = "INSERT INTO token_login(id_user, refresh_token) VALUES (?, ?)";
            const [insertResult] = await pool.execute(insertQuery, [idUser, refreshToken]);
            return insertResult;
        }
    } catch (error) {
        console.log(error.message);
        return null;
    }
}


export async function createAccessToken(data) {
    if (data && data.id_user && data.name_account && data.role) {
        const payload = {
            id_user: data.id_user,
            name_account: data.name_account,
            role: data.role
        }
        const accessToken = jwt.sign(payload, process.env.SECRETKEYACCESSTOKEN, {
            expiresIn: '4d',
        });

        const refreshToken = jwt.sign(payload, process.env.SECRETKEYACCESSTOKEN, {
            expiresIn: '20d',
        });
        await postRefreshToken(payload.id_user, refreshToken);
        return accessToken;
    }
}





