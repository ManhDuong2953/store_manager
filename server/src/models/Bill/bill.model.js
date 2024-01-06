import pool from "../../../configs/database/database.config";

export class Bill {
  constructor({idBill, idEmployee, quantity, dateCreate}) {
    this.idBill = idBill;
    this.idEmployee = idEmployee;
    this.quantity = quantity || 1;
    this.dateCreate = dateCreate || null;
  }
}

export class BillIn extends Bill {
  constructor({idBill, idEmployee, idSupplier, idBatch, quantity, dateCreate, status_van}) {
    super({idBill, idEmployee, quantity, dateCreate});
    this.idSupplier = idSupplier;
    this.idBatch = idBatch;
    this.status_van = status_van;
  }

  static async getAllBillIn() {
    try {
      const query = 'SELECT * FROM bill_in';
      const [rows] = await pool.execute(query);
      return rows;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getBillInById(id) {
    try {
      const query = 'SELECT * FROM bill_in WHERE id_bill = ?';
      const [rows] = await pool.execute(query, [id]);
      return rows[0] || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async addBillIn() {
    try {
      const query = `INSERT INTO bill_in (id_employee, id_supplier, id_batch, quantity) VALUES (?,?,?,?)`;
      await pool.execute(query, [
        this.idEmployee,
        this.idSupplier,
        this.idBatch,
        this.quantity,
      ]);
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateBillIn(id) {
    try {
      console.log(this);
      const query = `UPDATE bill_in SET id_bill = ?, id_employee = ?, id_supplier = ?, id_batch = ?, date_create = ?, quantity = ?, status_van = ? WHERE id_bill = ?`;
      const result = await pool.execute(query, [
        this.idBill,
        this.idEmployee,
        this.idSupplier,
        this.idBatch,
        this.dateCreate,
        this.quantity,
        this.status_van,
        id,
      ]);
      console.log(result ); 
      return true;
    } catch (error) {
      return null;
    }
  }
  static async deleteBillIn(id) {
    try {
      const query = `DELETE FROM bill_in WHERE id_bill = ?`;
      await pool.execute(query, [id]);
      return true;
    } catch (error) {
      return null;
    }
  }
}

export class BillOut extends Bill {
  constructor({idBill, idEmployee, idCustomer, idProduct, quantity, dateCreate, status_van}) {
    super({idBill, idEmployee, quantity, dateCreate});
    this.idCustomer = idCustomer;
    this.idProduct = idProduct;
    this.status_van = status_van || null;
  }

  static async getAllBillOut() {
    try {
      const query = 'SELECT * FROM bill_out';
      const [rows] = await pool.execute(query);
      return rows;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getBillOutById(id) {
    try {
      const query = 'SELECT * FROM bill_out WHERE id_bill = ?';
      const [rows] = await pool.execute(query, [id]);
      return rows[0] || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async addBillOut() {
    try {
      const query = `INSERT INTO bill_out (id_employee, id_customer, id_product, quantity) VALUES (?,?,?,?)`;
      await pool.execute(query, [
        this.idEmployee,
        this.idCustomer,
        this.idProduct,
        this.quantity,
      ]);
      return true;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async updateBillOut(id) {
    try {
      const query = `UPDATE bill_out SET id_bill = ?, id_employee = ?, id_customer = ?, id_product = ?, quantity = ?, date_create = ?, status_van = ? WHERE id_bill = ?`;
      await pool.execute(query, [
        this.idBill,
        this.idEmployee,
        this.idCustomer,
        this.idProduct,
        this.quantity,
        this.dateCreate,
        this.status_van,
        id,
      ]);
      return true;
    } catch (error) {
      return null;
    }
  }

  static async deleteBillOut(id) {
    try {
      const query = `DELETE FROM bill_out WHERE id_bill = ?`;
      await pool.execute(query, [id]);
      return true;
    } catch (error) {
      return null;
    }
  }
}
