import { getUserById } from "../../../src/controllers/users/user.controller"
const AdminRouter = (router) => {
    router.get('/admin' , (req, res) => {
        res.send("Quyền truy cập admin")
    })
    router.get('/admin/:id' , getUserById)
    return router
}
export default AdminRouter