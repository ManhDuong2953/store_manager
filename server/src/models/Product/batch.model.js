import pool from "../../../configs/database/database.config";
class Batch {
  constructor({ idBatch, idSupplier, nameBatch, typeProduct, dateManufact, dateExp, remain, sold }) {
    this.idBatch = idBatch || null;
    this.idSupplier = idSupplier || null;
    this.nameBatch = nameBatch || null;
    this.typeProduct = typeProduct || null;
    this.dateManufact = dateManufact || null;
    this.dateExp = dateExp || null;
    this.remain = remain || null;
    this.sold = sold || null;
  }

  static async findAllBatches() {
    try {
      const query = 'SELECT * FROM batches';
      const [result] = await pool.query(query);
      return result.length > 0 ? result : null;
    } catch (error) {
      return null;
    }
  }

  static async findBatchById(id) {
    try {
      const query = 'SELECT * FROM batches WHERE id_batch = ?';
      const [result] = await pool.query(query, [id]);
      return result.length > 0 ? result : null;
    } catch (error) {
      return null;
    }
  }

  static async filterBatchByKeyWord(keyword) {
    try {
      const query = `SELECT * FROM batches WHERE name_batch LIKE '%${keyword}%'`;
      const [result] = await pool.query(query);
      return result;
    } catch (error) {
      return null;
    }
  }

  async addBatch() {
    try {
      const query = 'INSERT INTO batches VALUES(?,?,?,?,?,?,?,?)';
      await pool.execute(query,  [
        this.idBatch,
        this.idSupplier,
        this.nameBatch,
        this.typeProduct,
        this.dateManufact,
        this.dateExp,
        this.remain,
        this.sold,
      ]);
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateBatch(id) {
    try {
      const query = 'UPDATE batches SET id_batch = ?, id_supplier = ?, name_batch = ?, type_product = ?, date_manufact = ?, date_exp = ?, remain = ?, sold = ? WHERE id_batch = ?';
      await pool.execute(query, [
        this.idBatch,
        this.idSupplier,
        this.nameBatch,
        this.typeProduct,
        this.dateManufact,
        this.dateExp,
        this.remain,
        this.sold,
        id
      ]);
      return true;
    } catch (error) {
      return null;
    }
  }

  static async deleteBatch(id) {
    try {
      const query = 'DELETE FROM batches WHERE id_batch = ?';
      await pool.execute(query, [id]);
      return true;
    } catch (error) {
      return null;
    }
  }
}

export default Batch;













