import pool from "../../../configs/database/database.config";
// Lớp cha Hóa đơn
export class Bill {
  constructor(idBill, idEmployee, quantity, dateCreate) {
    this.idBill = idBill;
    this.idEmployee = idEmployee;
    this.quantity = quantity;
    this.dateCreate = dateCreate;
  }

}

// Lớp con Hóa đơn Nhập
export class BillIn extends Bill {
  constructor(idBill, idEmployee, idSupplier, idBatch, quantity, dateCreate) {
    super(idBill, idEmployee, quantity, dateCreate);
    this.idSupplier = idSupplier;
    this.idBatch = idBatch;
  }
}

// Lớp con Hóa đơn Xuất
export class BillOut extends Bill {
  constructor(idBill, idEmployee, idCustomer, idProduct, quantity, dateCreate) {
    super(idBill, idEmployee, quantity, dateCreate);
    this.idCustomer = idCustomer;
    this.idProduct = idProduct;
  }
}


