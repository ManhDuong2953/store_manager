const db = require('../db');

class Batch {
  constructor({idBatch, idSupplier, nameBatch, typeProduct, dateManufact, dateExp, remain, sold}) {
    this.idBatch = idBatch;
    this.idSupplier = idSupplier;
    this.nameBatch = nameBatch;
    this.typeProduct = typeProduct;
    this.dateManufact = dateManufact;
    this.dateExp = dateExp;
    this.remain = remain;
    this.sold = sold;
  }

  static getAllBatches() {
    return db.query('SELECT * FROM batches');
  }

  static getBatchById(id) {
    return db.query('SELECT * FROM batches WHERE id_batch = ?', [id]);
  }

  static addBatch(newBatch) {
    return db.query('INSERT INTO batches SET ?', newBatch);
  }

  static updateBatch(id, updatedBatch) {
    return db.query('UPDATE batches SET ? WHERE id_batch = ?', [updatedBatch, id]);
  }

  static deleteBatch(id) {
    return db.query('DELETE FROM batches WHERE id_batch = ?', [id]);
  }
}

module.exports = Batch;
