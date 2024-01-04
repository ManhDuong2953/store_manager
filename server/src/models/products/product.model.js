import pool from "../../../configs/database/database.config";
export default class Product {
    constructor({ idProduct, idBatch, nameProduct, priceProduct, sale, descProduct }) {
        this.idProduct = idProduct || null;
        this.idBatch = idBatch || null;
        this.nameProduct = nameProduct || null;
        this.priceProduct = priceProduct || null;
        this.sale = sale || null;
        this.descProduct = descProduct || null;
    }

    static async findAllProduct() {
        try {
            const query = "SELECT * FROM products";
            const [result] = await pool.query(query);
            return result.length > 0 ? result : null;
        } catch (error) {
            console.log("Error in findAllProduct:", error);
            return null;
        }
    }

    async findProductById(idProduct) {
        try {
            const query = "SELECT * FROM products WHERE idProduct = ?";
            const [result] = await pool.query(query, [idProduct]);
            return result.length > 0 ? result[0] : null;
        } catch (error) {
            console.log("Error in findProductById: ", error);
            return null;
        }
    }

    async addProduct() {
        try {
            const query = `INSERT INTO products (id_batch, name_product, price_product, sale, desc_product) VALUES (?,?,?,?,?)`;
            await pool.execute(query, [
                this.idBatch,
                this.nameProduct,
                this.priceProduct,
                this.sale,
                this.descProduct
            ]);
            return true;
        } catch (error) {
            console.log("Error in addProduct: ", error);
            return false;
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
            const [result] = await pool.execute(query, [
                this.idBatch,
                this.nameProduct,
                this.priceProduct,
                this.sale,
                this.descProduct,
                this.idProduct
            ]);
            return result.affectedRows > 0;
        } catch (error) {
            console.log("Error updating products: ", error);
            return false;
        }
    }

    async deleteProductById(productId) {
        try {
            const query = "DELETE FROM products WHERE idProduct = ?";
            const [result] = await pool.execute(query, [productId]);
            return result.affectedRows > 0;
        } catch (error) {
            console.log("Error deleting products: ", error);
            return false;
        }
    }
}