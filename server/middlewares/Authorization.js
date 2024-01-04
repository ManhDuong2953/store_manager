const jwt = require('jsonwebtoken');
require("dotenv").config()

export async function Authorization(req, res, next) {
    try {
        const access_token = req.body.accessToken;
        if (!access_token) {
            return res.status(401).json({ status: 'unauthorized' });
        }
        req.body = { ...req.body, status: 'success', data: jwt.decode(access_token) };
        next();

    } catch (error) {
        res.status(403).json({ status: 'error', message: "Error" });
    }
}


export function Role(req, res, next, ...requiredRoles) {
    try {
        const { status, data } = req.body;
        if (status !== 'success') {
            throw new Error("Invalid data structure");
        }
        const userRole = data.access_right.toLowerCase();
        if (requiredRoles.includes(userRole)) {
            next();
        } else {
            throw new Error("Not authorized");
        }

    } catch (error) {
        res.status(403).json({ status: 'error', message: error.message });
    }
}
