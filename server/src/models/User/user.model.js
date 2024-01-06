export class User {
  constructor(dataUser) {
    this.name_user = dataUser.name_user;
    this.phone_number = dataUser.phone_number || null;
    this.dob = dataUser.dob || null;
    this.gender = dataUser.gender || null;
    this.address = dataUser.address || null;
    this.email = dataUser.email || null;
    this.role = dataUser.role || null;
    this.name_account = dataUser.name_account;
    this.passwords = dataUser.passwords;
    this.avatar_link = dataUser.link_media || null;
  }
}
