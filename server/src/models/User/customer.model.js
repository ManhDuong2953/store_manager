import pool from "../../../configs/database/database.config";
import { User } from "./user.model";

export class Customer extends User {
    constructor(
      idUser,
      name_user,
      phone_number,
      dob,
      gender,
      address,
      email,
      role,
      name_account,
      idCustomer,
      rankCustomer,
      money,
    ) {
      super(idUser, name_user, phone_number, dob, gender, address, email, role, name_account);
      this.idCustomer = idCustomer;
      this.rankCustomer = rankCustomer;
      this.money = money;
    }
  }
  
  
  