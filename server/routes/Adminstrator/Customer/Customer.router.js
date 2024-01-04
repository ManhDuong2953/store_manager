import { getUserById } from "../../../src/controllers/users/user.controller";
require('dotenv').config();

const ROLEADMIN = process.env.ROLEADMIN.split(',');
const ROLEEMPLOYEE = process.env.ROLEEMPLOYEE.split(',');

const CustomerRouter = (router) => {
    router.get('/admin' , (req, res) => {
        res.send("Quyền truy cập admin")
    })
    router.get('/admin/:id' , getUserById)
    return router
}
export default CustomerRouter