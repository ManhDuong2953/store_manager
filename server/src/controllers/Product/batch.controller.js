import Batch from '../../models/Product/batch.model';

// Get all batches
export async function getAllBatches(req, res) {
  try {
    const data = await Batch.findAllBatches();
    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'Không tìm thấy lô hàng' });
    }
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).json({ message: 'Lỗi server' });
  }
}

// Add a new batch
export async function postBatch(req, res) {
  try {
    const batchData = req.body;
    const batchItem = new Batch(batchData);

    if (await batchItem.addBatch()) {
      res.status(200).json({ message: 'Thêm lô hàng thành công' });
    } else {
      res.status(404).json({ message: 'Error creating batch' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Lỗi server' });
  }
}

// Get batches by keyword
export async function getBatchesByKeyword(req, res) {
  const keyword = req.params.keyword;
  try {
    const data = await Batch.filterBatchByKeyWord(keyword);
    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'Không tìm thấy lô hàng' });
    }
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).json({ message: 'Lỗi server' });
  }
}

// Get batch by ID
export async function getBatchById(req, res) {
  const batchId = req.params.id;
  try {
    const data = await Batch.findBatchById(batchId);
    if (!data) {
      return res.status(404).json({ message: 'Không tìm thấy lô hàng' });
    }
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).json({ message: 'Lỗi server' });
  }
}

// Update batch by ID
export async function updateBatchById(req, res) {
  const batchId = req.params.id;
  const batchData = req.body;

  try {
    const batchItem = new Batch(batchData);
    const updatedBatch = await batchItem.updateBatch(batchId);
    return res.status(200).json("Update đơn hàng thành công");
  } catch (error) {
    return res.status(500).json({ message: 'Lỗi server' });
  }
}

// Delete batch by ID
export async function deleteBatchById(req, res) {
  const batchId = req.params.id;

  try {
    await Batch.deleteBatch(batchId);
    return res.status(200).json('Xóa lô hàng thành công');
  } catch (error) {
    return res.status(500).json({ message: 'Lỗi server' });
  }
}
