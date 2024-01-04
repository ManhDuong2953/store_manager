import pool from "../../../configs/database/database.config";
class Supplier {
  constructor({ idSupplier, nameSupplier, address, phoneNumber }) {
    console.log("Params: ", { idSupplier, nameSupplier, address, phoneNumber });
    this.idSupplier = idSupplier || null;
    this.nameSupplier = nameSupplier || null;
    this.address = address || null;
    this.phoneNumber = phoneNumber || null;
    console.log("This",this);
  }

  static async findAllSupliers() {
    try {
      const query = 'SELECT * FROM suppliers'
      const [result] = await pool.query(query);
      return result.length > 0 ? result[0] : null;

    } catch (error) {
      return null;
    }
  }
// hàm lấy xản phẩm theo id
  static async findSupplierById(id) {
    try {
      const query = 'SELECT * FROM suppliers WHERE id_supplier = ?'
      const [result] = await pool.query(query, [id]);
      return result.length > 0 ? result[0] : null;
    } catch (error) {
      return null;
    }
  }
  // hàm tìm kiém sản phẩm theo keyword
  static async filterSupplierByKeyword(keyword) {
    try {
      const query = `SELECT * FROM suppliers WHERE name_supplier LIKE '%${keyword}%'`
      const [result] = await pool.query(query)
      return result;

    } catch (error) {
      return null;
    }
  }

// hàm thêm sản phẩm
  async addSupplier() {
    try {
      const query = `INSERT INTO suppliers (id_supplier, name_supplier, address, phone_number) VALUES (?,?, ?,?)`;
      await pool.execute(query, [
        this.idSupplier,
        this.nameSupplier,
        this.address,
        this.phoneNumber
      ]);
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
// hàm xửa sản phẩm
  async updateSupplier(id) {
    try {
      const query = 'UPDATE suppliers SET id_supplier = ?, name_supplier = ?, address = ?, phone_number = ? WHERE id_supplier = ?'
      await pool.query(query, [
        this.idSupplier,
        this.nameSupplier,
        this.address,
        this.phoneNumber
        , id]);
      return true;
    } catch (error) {
      return null;
    }

  }
// hàm soá xản phẩm
  static async deleteSupplier(id) {
    try {
      await pool.query('DELETE FROM suppliers WHERE id_supplier = ?', [id]);
      return true;
    } catch (error) {
      return null;
    }
  }
}

export default Supplier;
