import Product from '../../models/Product/product.model';

// Lấy tất cả sản phẩm
export async function getAllProducts(req, res) {
    try {
        const data = await Product.findAllProduct();
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
        }
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllProducts:", error);
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

// Thêm sản phẩm
export async function postProduct(req, res) {
    try {
        const productData = req.body;
        const product = new Product(productData);

        if (await product.addProduct()) {
            return res.status(200).json({ message: 'Thêm sản phẩm thành công' });
        } else {
            return res.status(400).json({ message: 'Error creating' });
        }
    } catch (error) {
        console.error("Error in postProduct:", error);
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

// Lấy sản phẩm bằng từ khóa
export async function getProductByKeyword(req, res) {
    const keyword = req.params.keyword;
    try {
        const data = await Product.findProductsByKeyword(keyword);
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
        }
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getProductByKeyword:", error);
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

// Lấy sản phẩm bằng id
export async function getProductById(req, res) {
    const productId = req.params.id;
    try {
        const data = await Product.findProductById(productId);
        if (!data) {
            return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
        }
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getProductById:", error);
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

// Cập nhật sản phẩm bằng id
export async function updateProductById(req, res) {
    const productId = req.params.id;
    const productData = req.body;

    try {
        const product = new Product(productData);
        const updatedProduct = await product.updateProduct(productId);
        return res.status(200).json("Cập nhật sản phẩm thành công");
    } catch (error) {
        console.error("Error in updateProductById:", error);
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

// Xóa sản phẩm bằng id
export async function deleteProductById(req, res) {
    const productId = req.params.id;

    try {
        await Product.deleteProductById(productId);
        return res.status(200).json({ message: 'Xóa sản phẩm thành công' });
    } catch (error) {
        console.error("Error in deleteProductById:", error);
        return res.status(500).json({ message: 'Lỗi server' });
    }
}
