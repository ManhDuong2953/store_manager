import { Employee } from "../../models/users/employee.model";

// get all Employees
export async function getAllEmployee(req, res) {
    try {
        const data = await Employee.findAllEmployees();
        if (!data || data.length === 0) {
            return res.status(404).json({ status: 'error', message: 'Không tìm thấy người dùng' });
        }
        return res.status(200).json({ status: 'success', "data": data });
    } catch (error) {
        console.error("Error in getAllEmployee:", error);
        return res.status(500).json({ status: 'error', message: 'Lỗi server' });
    }
}

// get employee by keyword
export async function getEmployeeByKeyword(req, res) {
    try {
        const keyword = req.params.keyword;
        const data = await Employee.filterEmployees(keyword);
        if (!data || data.length === 0) {
            return res.status(404).json({ status: 'error', message: 'Không tìm thấy người dùng' });
        }
        return res.status(200).json({ status: 'success', "data": data });
    } catch (error) {
        console.error("Error in getEmployeeByKeyword:", error);
        return res.status(500).json({ status: 'error', message: 'Lỗi server' });
    }
}

// get employee by id
export async function getEmployeeById(req, res) {
    try {
        const userId = req.params.id;
        const data = await Employee.findEmployeeById(userId);
        if (!data) {
            return res.status(404).json({ status: 'error', message: 'Không tìm thấy người dùng' });
        }
        return res.status(200).json({ status: 'success', "data": data });
    } catch (error) {
        console.error("Error in getEmployeeById:", error);
        return res.status(500).json({ status: 'error', message: 'Lỗi server' });
    }
}

// update employee by id
export async function updateEmployeeById(req, res) {
    try {
        const userId = req.params.id;
        const userData = req.body;

        const employee = new Employee(userData);
         await employee.update(userId);
        return res.status(200).json({ status: 'success', message: "Updated employee successfully"});
    } catch (error) {
        console.error("Error in updateEmployeeById:", error);
        return res.status(500).json({ status: 'error', message: 'Lỗi server' });
    }
}

// delete employee by id
export async function deleteEmployeeById(req, res) {
    try {
        const userId = req.params.id;
        await Employee.deleteUserById(userId);
        return res.status(200).json({ status: 'success', message: 'Xóa nhân viên thành công' });
    } catch (error) {
        console.error("Error in deleteEmployeeById:", error);
        return res.status(500).json({ status: 'error', message: 'Lỗi server' });
    }
}
