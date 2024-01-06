import pool from "../../../configs/database/database.config";
import moment from "moment";
import { User } from "./user.model";

export class Employee extends User {
  constructor(userData) {
    super(userData);
    this.literacy = userData.literacy || null;
    this.date_in =
      userData.date_in && userData.date_in.slice(-1) === "Z"
        ? userData.date_in.slice(0, -1)
        : moment().format("YYYY-MM-DD HH:mm:ss").slice(0, -1);
    this.salary = userData.salary || null;
    this.link_social = userData.link_social || null;
    this.introduce = userData.introduce || null;
  }

  static async findAllEmployees() {
    try {
      const query =
        "SELECT users.*, employees.* FROM users INNER JOIN employees ON users.id_user = employees.id_employee WHERE  role  = 'Employee'";
      const [result] = await pool.query(query);
      return result;
    } catch (error) {
      console.error("Error in findAllEmployees:", error);
      return null;
    }
  }

  
  static async findEmployeeById(idUser) {
    try {
      const query =
        "SELECT users.*, employees.* FROM users INNER JOIN employees ON users.id_user = employees.id_employee WHERE users.id_user = ?";
      const [result] = await pool.query(query, [idUser]);
      return result;
    } catch (error) {
      console.error("Error in findEmployeeById:", error);
      return null;
    }
  }

  static async filterEmployees(keyword) {
    try {
      const query = `SELECT users.*, employees.*
        FROM users
        INNER JOIN employees ON users.id_user = employees.id_employee
        WHERE 
        CONCAT_WS(' ', id_user, name_user, phone_number, dob, gender, address, email, role, name_account, passwords , id_employee, literacy, date_in, salary) LIKE '%${keyword}%' AND role = "Employee"`;
      const [result] = await pool.query(query);
      return result;
    } catch (error) {
      console.error("Error in filterEmployees:", error);
      return null;
    }
  }


  async save() {
    try {
      const query = `
        INSERT INTO users 
         (name_user, phone_number, dob, gender, address, email, role, name_account, passwords, avatar_link)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      await pool.execute(query, [
        this.name_user,
        this.phone_number,
        this.dob,
        this.gender,
        this.address,
        this.email,
        this.role,
        this.name_account,
        this.passwords,
        this.avatar_link
      ]);

      return true; // Trả về true nếu thêm thành công
    } catch (error) {
      console.error("Error in save:", error);
      return false; // Trả về false nếu có lỗi khi thêm
    }
  }

  async update(id) {
    try {
      const query = `
        UPDATE users
        INNER JOIN employees ON users.id_user = employees.id_employee
        SET
            users.name_user = ?,
            users.phone_number = ?,
            users.dob = ?,
            users.gender = ?,
            users.address = ?,
            users.email = ?,
            users.role = ?,
            users.name_account = ?,
            users.passwords = ?,
            users.avatar_link = ?,
            employees.literacy = ?,
            employees.date_in = ?,
            employees.salary = ?,
            employees.link_social = ?,
            employees.introduce = ?
        WHERE users.id_user = ?;
    `;

      await pool.execute(query, [
        this.name_user,
        this.phone_number,
        this.dob,
        this.gender,
        this.address,
        this.email,
        this.role,
        this.name_account,
        this.passwords,
        this.avatar_link,
        this.literacy,
        this.date_in,
        this.salary,
        this.link_social,
        this.introduce,
        id
      ]);

    } catch (error) {
      console.error("Error in update:", error.message);
    }
  }


  static async deleteUserById(idUser) {
    try {
      const query = "DELETE FROM users WHERE id_user = ?";
      await pool.execute(query, [idUser]);

      return true; // Trả về true nếu xóa thành công
    } catch (error) {
      console.error("Error in deleteUserById:", error);
      return false; // Trả về false nếu có lỗi khi xóa
    }
  }
}
