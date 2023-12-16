import pool from "../../../configs/database/database.config";
export class Product {
    constructor(idProduct, idBatch, nameProduct, priceProduct, sale, descProduct) {
        this.idProduct = idProduct;
        this.idBatch = idBatch;
        this.nameProduct = nameProduct;
        this.priceProduct = priceProduct;
        this.sale = sale;
        this.descProduct = descProduct;
    }

    // Lấy tất cả sản phẩm
    static async findAllProduct() {
        try {
            const query = "SELECT * FROM product";
            const [result] = await pool.query(query);
            return result
        } catch (error) {
            console.log("Error in findAllProduct:", error);
            return null;
        }
    }
     async findProductById(idProduct) {
        try {
            const query = "SELECT * FROM products WHERE idProduct = ?";
            const [result] = await pool.query(query, [idProduct]);
            return result;
        } catch (error) {
            console.log("Error in findProductById: ", error);
            return null;
        }
    }
     async addProduct() {
        try {
            const query = `INSERT INTO products (idBatch, nameProduct, priceProduct, sale, descProduct) VALUES (?,?,?,?,?)`
            await pool.execute(query, [
                this.idBatch,
                this.nameProduct,
                this.priceProduct,
                this.sale,
                this.descProduct
            ]);
        } catch (error) {
            console.log("Error in addProduct: ", error);
        }
    }
    async updateProduct() {
        try {
        const query = `UPDATE products SET
        idBatch = ?,
        nameProduct = ?,
        priceProduct = ?,
        sale = ?,
        descProduct = ?
        WHERE idProduct = ?
        `;
            await pool.execute(query, [
                this.idBatch,
                this.nameProduct,
                this.priceProduct,
                this.sale,
                this.descProduct
            ]);
            console.log("Product updated successfully!");

        } catch (error) {
           console.log("Error updating products: ", error); 
        }
    }

     async deleteProductById(productId) {
        try {
            const query = "DELETE FROM products WHERE idProduct = ?";
            await pool.execute(query, [productId]);
            console.log("Prouct deleted successfully!");
        } catch (error) {
            console.log("Error deleting products: ", error);
        }
    }
}
export class Batch extends Product {
    constructor(idBatch, idSupplier, nameBatch, dateManufact,typeProduct, dateExp, remain, sold) {
        super(idBatch)
        this.idSupplier = idSupplier;
        this.nameBatch = nameBatch;
        this.dateManufact = dateManufact;
        this.typeProduct = typeProduct;
        this.dateExp = dateExp;
        this.remain = remain;
        this.sold = sold;
    }

}   

export class Supplier {
    contructer(idSupplier, nameSupplier, address, phoneNumber) {
        this.idSupplier = idSupplier;
        this.nameSupplier = nameSupplier;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
}