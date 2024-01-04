import pool from "../../../configs/database/database.config";

export class User {
  constructor(dataUser) {
    this.name_user = dataUser.name_user;
    this.phone_number = dataUser.phone_number || null;
    this.dob = dataUser.dob || null;
    this.gender = dataUser.gender || null;
    this.address = dataUser.address || null;
    this.email = dataUser.email || null;
    this.access_right = dataUser.access_right || null;
    this.name_account = dataUser.name_account;
    this.passwords = dataUser.passwords;
  }

  static async findAllUser() {
    try {
      const query = "SELECT * FROM users";
      const [result] = await pool.query(query);
      return result;
    } catch (error) {
      console.error("Error in findAllUser:", error);
      return null;
    }
  }

  static async findUserById(idUser) {
    try {
      const query = "SELECT * FROM users WHERE id_user = ?";
      const [result] = await pool.query(query, [idUser]);
      return result;
    } catch (error) {
      console.error("Error in findUserById:", error);
      return null;
    }
  }

  async save() {
    try {
      const query = `
        INSERT INTO users 
         (name_user, phone_number, dob, gender, address, email, access_right, name_account, passwords)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
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
        this.passwords
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
        UPDATE users SET 
          name_user = ?,
          phone_number = ?,
          dob = ?,
          gender = ?,
          address = ?,
          email = ?,
          access_right = ?,
          name_account = ?
        WHERE id_user = ?
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
        id
      ]);

      return true; // Trả về true nếu cập nhật thành công
    } catch (error) {
      console.error("Error in update:", error);
      return false; // Trả về false nếu có lỗi khi cập nhật
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
