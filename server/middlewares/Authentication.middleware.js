import { checkExpiredToken, postToken } from "../src/models/login/Login.model";
import moment from "moment";
const jwt = require('jsonwebtoken');
require("dotenv").config()
export function Authentication(req, res, next) {
    const access_token = req.body.accessToken;
    const refresh_token = req.body.refreshToken;
    const decode = jwt.verify(refresh_token, process.env.SECRETKEYREFRESHTOKEN)
    postToken(decode.id, refresh_token, decode.exp)
    // console.log(checkExpiredToken(refresh_token, process.env.SECRETKEYREFRESHTOKEN)); 
    res.cookie('accessToken', access_token, { maxAge: 900000, httpOnly: true });
    // req.body = {}
    next()
}