import Media from "../../models/media/media.model";
import UploadCloudinary from "../../../configs/database/cloudinary.config";


export async function addMedia(req, res, next) {
  const dataFile = req.file;
  const id = req.body.id_user || req.body.id_product;
  try {
    if (dataFile && id) {
      const classify = req.body.id_user ? "user" : req.body.id_product ? "product" : undefined;
      const dataUploadCloud = await UploadCloudinary(dataFile, classify);
      const dataUploadURL = dataUploadCloud.url;
      const media = new Media({ id_link: id, classify: classify, url: dataUploadURL });

      const insertedId = await media.saveMedia();
      res.status(200).json({
        note: "Gửi thành công!",
        id: insertedId,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error saving media" });
  }
  next();
}

