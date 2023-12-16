import { getAllEmployee, getEmployeeById, getEmployeeByKeyword, updateEmployeeById, deleteEmployeeById } from "../../../src/controllers/users/employee.controller"
import { createUser } from "../../../src/controllers/users/user.controller";
import { addMedia } from "../../../src/controllers/media/media.controller";
import { checkMissingInputs } from "../../../middlewares";
import multer from "multer";
const storage = multer.memoryStorage(); // Sử dụng MemoryStorage
const upload = multer({ storage: storage });

const EmployeeRouter = (router) => {
    router.get('/', getAllEmployee)
    router.get('/:id', getEmployeeById)
    router.post('/register',checkMissingInputs, createUser)
    router.get('/search/:keyword', getEmployeeByKeyword)
    router.patch('/update/:id', upload.single('mediaAdmin'),checkMissingInputs, addMedia, updateEmployeeById)
    router.delete('/delete/:id',checkMissingInputs, deleteEmployeeById)
    return router;
}
export default EmployeeRouter