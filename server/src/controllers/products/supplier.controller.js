import Supplier from '../../models/products/supplier.model';

// Lấy tất cả nhà cung cấp
export async function getAllSupplier(req, res) {
    try {
        const data = await Supplier.findAllSupliers();
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'Không tìm thấy nhà cung cấp' });
        }
        return res.send(data);
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
}
// Thêm nhà cung cấps
export async function postSupplier(req, res) {
    try {
        const SupplierData = req.body;
        const supplierItem = new Supplier(SupplierData);
        console.log("dataPr: ", supplierItem);
        if (await supplierItem.addSupplier()) {
            res.status(200).json({ message: 'Thêm nhà cung cấp thành công' });
        } else {
            res.status(404).json({ message: 'Error creating' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server rồi nhé' });
    }
}
// Lấy nhà cung cấp bằng từ khóa
export async function getSupplierByKeyword(req, res) {
    const keyword = req.params.keyword;
    try {
        const data = await Supplier.filterSupplierByKeyword(keyword);
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'Không tìm thấy nhà cung cấp' });
        }
        return res.send(data);
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

// Lấy nhà cung cấp bằng id
export async function getSupplierById(req, res) {
    const SupplierId = req.params.id;
    try {
        const data = await Supplier.findSupplierById(SupplierId);
        if (!data) {
            return res.status(404).json({ message: 'Không tìm thấy nhà cung cấp' });
        }
        return res.send(data);
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

// Cập nhật nhà cung cấp bằng id
export async function updateSupplierById(req, res) {
    const SupplierId = req.params.id;
    const SupplierData = req.body;

    try {
        const supplierItem = new Supplier(SupplierData);
        const updatedSupplier = await supplierItem.updateSupplier(SupplierId);
        return res.status(200).json(updatedSupplier);
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
}

// Xóa nhà cung cấp bằng id
export async function deleteSupplierById(req, res) {
    const SupplierId = req.params.id;

    try {
        await Supplier.deleteSupplier(SupplierId);
        return res.status(200).json('Xóa nhà cung cấp thành công');
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server' });
    }
}
