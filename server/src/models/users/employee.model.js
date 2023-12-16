import pool from "../../../configs/database/database.config";
import moment from "moment";
import { User } from "./user.model";
export class Employee extends User {
  constructor(
    userData
  ) {
    super(userData);
    this.literacy = userData.literacy || null;
    this.date_in = userData.date_in || moment().format('YYYY-MM-DD HH:mm:ss');
    this.salary = userData.salary || null;
    this.link_social = userData.link_social || null;
    this.introduce = userData.introduce || null;
  }


  static async findAllUser() {
    try {
      const query = "SELECT users.*, employees.* FROM users INNER JOIN employees ON users.id_user = employees.id_employee WHERE  access_right  = 'Employee'";
      const [result] = await pool.query(query);
      return result;
    } catch (error) {
      console.log("Error in findUserById:", error);
      return null;
    }
  }

  static async filterEmployees(keyword) {
    try {
      const query = `SELECT users.*, employees.*
        FROM users
        INNER JOIN employees ON users.id_user = employees.id_employee
        WHERE 
        CONCAT_WS(' ', id_user, name_user, phone_number, dob, gender, address, email, access_right, name_account, passwords , id_employee, literacy, date_in, salary) LIKE '%${keyword}%' AND access_right = "Employee"`;
      const [result] = await pool.query(query);
      return result;
    } catch (error) {
      console.log("Error in findUserBySomeThing:", error);
      return null;
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
            users.access_right = ?,
            users.name_account = ?,
            users.passwords = ?,
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
        this.access_right,
        this.name_account,
        this.passwords,
        this.literacy,
        this.date_in,
        this.salary,
        this.link_social,
        this.introduce,
        id
      ]);

      console.log("User updated successfully!");
    } catch (error) {
      console.log("Error in update:", error.message);
    }
  }


  static async findEmployeeById(idUser) {
    try {
      const query = "SELECT users.*, employees.*, MAX(images.image_data) AS avatar_img FROM users INNER JOIN employees ON users.id_user = employees.id_employee LEFT JOIN images ON users.id_user = images.id_link WHERE users.id_user = ? GROUP BY users.id_user; ";
      const [result] = await pool.query(query, [idUser]);
      return result;
    } catch (error) {
      console.log("Error in findUserById:", error);
      return null;
    }
  }
}
