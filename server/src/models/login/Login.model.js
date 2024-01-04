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
        return false;
    } catch (error) {
        console.log(error.message);
        return null;
    }
};


