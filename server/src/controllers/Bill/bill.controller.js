import { BillIn, BillOut } from '../../models/Bill/bill.model';

// Get all bill_in
export async function getAllBillIns(req, res) {
  try {
    const data = await BillIn.getAllBillIn();
    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'Không tìm thấy hóa đơn nhập' });
    }
    return res.status(200).send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi server' });
  }
}

// Add a new bill_in
export async function postBillIn(req, res) {
  try {
    const billInData = req.body;
    const billInItem = new BillIn(billInData);

    if (await billInItem.addBillIn()) {
      res.status(200).json({ message: 'Thêm hóa đơn nhập thành công' });
    } else {
      res.status(404).json({ message: 'Error creating bill_in' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi server' });
  }
}

// Get bill_in by ID
export async function getBillInById(req, res) {
  const billInId = req.params.id;
  try {
    const data = await BillIn.getBillInById(billInId);
    if (!data) {
      return res.status(404).json({ message: 'Không tìm thấy hóa đơn nhập' });
    }
    return res.status(200).send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi server' });
  }
}

// Update bill_in by ID
export async function updateBillInById(req, res) {
  const billInId = req.params.id;
  const billInData = req.body;

  try {
    const billInItem = new BillIn(billInData);
    await billInItem.updateBillIn(billInId);
    return res.status(200).json("Update hóa đơn nhập thành công");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi server' });
  }
}

// Delete bill_in by ID
export async function deleteBillInById(req, res) {
  const billInId = req.params.id;

  try {
    await BillIn.deleteBillIn(billInId);
    return res.status(200).json('Xóa hóa đơn nhập thành công');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi server' });
  }
}







////////////////////////////////////////////////////////////////////////////////////////////







// Get all bill_out
export async function getAllBillOuts(req, res) {
  try {
    const data = await BillOut.getAllBillOut();
    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'Không tìm thấy hóa đơn xuất' });
    }
    return res.status(200).send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi server' });
  }
}

// Add a new bill_out
export async function postBillOut(req, res) {
  try {
    const billOutData = req.body;
    const billOutItem = new BillOut(billOutData);

    if (await billOutItem.addBillOut()) {
      res.status(200).json({ message: 'Thêm hóa đơn xuất thành công' });
    } else {
      res.status(404).json({ message: 'Error creating bill_out' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi server' });
  }
}

// Get bill_out by ID
export async function getBillOutById(req, res) {
  const billOutId = req.params.id;
  try {
    const data = await BillOut.getBillOutById(billOutId);
    if (!data) {
      return res.status(404).json({ message: 'Không tìm thấy hóa đơn xuất' });
    }
    return res.status(200).send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi server' });
  }
}

// Update bill_out by ID
export async function updateBillOutById(req, res) {
  const billOutId = req.params.id;
  const billOutData = req.body;

  try {
    const billOutItem = new BillOut(billOutData);
    const updatedBillOut = await billOutItem.updateBillOut(billOutId);
    return res.status(200).json("Update hóa đơn xuất thành công");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi server' });
  }
}

// Delete bill_out by ID
export async function deleteBillOutById(req, res) {
  const billOutId = req.params.id;

  try {
    await BillOut.deleteBillOut(billOutId);
    return res.status(200).json('Xóa hóa đơn xuất thành công');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Lỗi server' });
  }
}
