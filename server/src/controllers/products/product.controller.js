import Product from './path-to-product-model'; // Đường dẫn đến model của Product

// Lấy tất cả sản phẩm
export async function getAllProducts(req, res) {
    try {
        const data = await Product.findAllProducts();
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
        }
        return res.send(data);
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

// Lấy sản phẩm bằng từ khóa
export async function getProductsByKeyword(req, res) {
    const keyword = req.params.keyword;
    try {
        const data = await Product.findProductsByKeyword(keyword);
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
        }
        return res.send(data);
    } catch (error) {
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
        return res.send(data);
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

// Cập nhật sản phẩm bằng id
export async function updateProductById(req, res) {
    const productId = req.params.id;
    const productData = req.body;

    try {
        const product = new Product(productData);
        const updatedProduct = await product.update(productId);
        return res.json(updatedProduct);
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

// Xóa sản phẩm bằng id
export async function deleteProductById(req, res) {
    const productId = req.params.id;
    
    try {
        await Product.deleteProductById(productId);
        return res.json('Xóa sản phẩm thành công');
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
}
