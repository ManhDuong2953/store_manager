require("dotenv").config();

export async function checkMissingInputs(req, res, next) {
    const body = await req.body;
    for (const key in body) {
        const value = body[key];
        if (value === "null" || value === "undefined" || value === "" || value === undefined) {
            body[key] = null;
        }   
    }
    req.body = body;
    next();
}

