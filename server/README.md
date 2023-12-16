create database store_manager;

use store_manager;

-- Bảng người dùng
create table users (
	id_user int primary key auto_increment, 
	name_user varchar(255) not null,
    name_account varchar(50) not null UNIQUE,
    passwords varchar(20) not null,
    phone_number varchar(20),
    dob date,
    gender varchar(25),
    address varchar(255),
    email varchar(255),
    access_right varchar(100) default "Customer"
);


-- Bảng nhân sự 
create table employees (
	id_employee int primary key,
    literacy varchar(100),
    date_in date,
    link_social varchar(255),
    salary decimal(15,2)  default 0,
    introduce longtext,
    foreign key (id_employee) references users(id_user) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);



-- Tạo trigger để tự động thêm dữ liệu vào bảng employeess khi thêm dữ liệu vào bảng userss
DELIMITER //
CREATE TRIGGER insert_userss_trigger AFTER INSERT ON users
FOR EACH ROW
BEGIN
    INSERT INTO employees (id_employee)
    VALUES (NEW.id_user);
END;
//
DELIMITER ;




-- Bảng nhà cung cấp
create table suppliers (
    id_supplier varchar(20) primary key,
    name_supplier varchar(255) not null,
    address varchar(255) not null,
    phone_number varchar(20) not null
);

    
-- Bảng lô hàng
create table batches(
	id_batch varchar(20) primary key,
    id_supplier varchar(20) not null,
    name_batch varchar(5) not null,
    type_product varchar(50) not null,
    date_manufact datetime not null,
    date_exp datetime not null,
    remain int not null,
    sold int not null default 0,
    foreign key (id_supplier) references suppliers (id_supplier)
	ON DELETE CASCADE
    ON UPDATE CASCADE
);


-- Bảng hàng hóa
 create table products (
	 id_product varchar(20) primary key,
     id_batch varchar(20) not null,
     name_product varchar(50) not null,
     price_product decimal(10,2) not null,
     desc_product text,
     sale decimal(1,1) not null default 0,
     foreign key (id_batch) references batches(id_batch)
	 ON DELETE CASCADE
	 ON UPDATE CASCADE
);
 

     
     
     
-- Bảng khách hàng
create table customers (
	id_customer int primary key,
    rank_customer varchar(20),
    money decimal(15,2) not null default 0,
    foreign key (id_customer) references users(id_user) 
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
     
     
-- Bảng hóa đơn nhập 
create table bill_in(
	id_bill int primary key auto_increment,
    id_employee int not null,
    id_supplier varchar(20) not null,
	id_batch varchar(20) not null,
    date_input datetime,
	quantity int default 1,
    status_van varchar(50),
    foreign key (id_employee) references employees(id_employee)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    foreign key (id_supplier) references suppliers(id_supplier)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    foreign key (id_batch)    references batches  (id_batch)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);




-- Băng hóa đơn xuất
create table bill_out(
	id_bill int primary key auto_increment,
    id_employee int not null,
    id_customer int not null,
    id_product varchar(20),
    quantity int not null default 1,
    date_output datetime,
    status_van varchar(50), 
	foreign key (id_employee) references employees(id_employee)
    ON DELETE CASCADE
    ON UPDATE CASCADE, 
    foreign key (id_customer) references customers(id_customer)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    foreign key (id_product) references products  (id_product)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


-- Bảng giỏ hàng
create table order_list (
	id_order int primary key auto_increment,
    id_customer int not null,
    quantity int not null default 1,
    foreign key (id_customer) references customers (id_customer)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


-- Bảng media
create table `images` (
  `id_media` INT PRIMARY KEY AUTO_INCREMENT,
  `image_data` TEXT,
  `fieldname` VARCHAR(255),
  `originalname` VARCHAR(255),
  `encoding` VARCHAR(255),
  `mimetype` VARCHAR(255),
  `destination` VARCHAR(255),
  `filename` VARCHAR(255),
  `path` VARCHAR(255),
  `size` INT,
  `time` TIMESTAMP,
  `classify` varchar(20),
  `id_link` INT -- liên kết với id người dùng hoặc sản phẩm (sản phẩm có thể chứa nhiều media)
);

-- Bảng thông báo
create table notice (
	id_notice int primary key auto_increment,
	id_user int,
	ctx_notice varchar(255),
	foreign key (id_user) references users(id_user)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


-- bảng token
create table token_login(
	id int primary key auto_increment,
	id_user int not null,
	refresh_token varchar(255) not null,
	expiration_date text,
	foreign key (id_user) references users(id_user)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);






