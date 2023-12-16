const UserRouter = (router) => {
    router.get('/user', (req, res) => {
        res.send("Quyền truy cập người dùng")
    })
    return router;
}
export default UserRouter;  