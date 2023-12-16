import { Employee } from "../../models/users/employee.model";
//EMPLOYEES
// get all Employees
export async function getAllEmployee(req, res) {
    const data = await Employee.findAllUser();
    if (!data) {
        return res.status(404).json({ message: 'Không tìm thấy người dùng' });
    }
    return res.send(data);
}
// get employee by keyword
export async function getEmployeeByKeyword(req, res) {
    const keyword = req.params.keyword;
    const data = await Employee.filterEmployees(keyword);
    if (!data) {
        return res.status(404).json({ message: 'Không tìm thấy người dùng' });
    }
    return res.send(data);
}

// get employee by id
export async function getEmployeeById(req, res) {
    const userId = req.params.id;
    const data = await Employee.findEmployeeById(userId);
    if (!data) {
        return res.status(404).json({ message: 'Không tìm thấy người dùng' });
    }
    return res.send(data);
}

// update employee by id
export async function updateEmployeeById(req, res) {
    const userId = req.params.id;
    const userData = req.body;
    const employee = new Employee(userData)
    const updatedUser = await employee.update(userId);
    res.json(updatedUser);
}


// delete employee by id
export async function deleteEmployeeById(req, res) {
    const userId = req.params.id;
    const employee = await Employee.deleteUserById(userId)
    res.json("Xóa nhân viên thành công");
}
