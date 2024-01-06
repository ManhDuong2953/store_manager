import UploadCloudinary from "../configs/cloud/cloudinary.config";

require("dotenv").config();

export async function checkMissingInputs(req, res, next) {
  const body = await req.body;
  for (const key in body) {
    const value = body[key];
    if (value === "null" || value === "undefined" || value === "" || value === undefined) {
      body[key] = null;
    }
  }
  req.body = body;
  next();
}



export async function addMedia(req, res, next) {
  const dataFile = req.file;
  console.log(dataFile);
  try {
    if (dataFile) {
      const dataUploadCloud = await UploadCloudinary(dataFile);
      const dataUploadURL = dataUploadCloud.secure_url;
      req.body.link_media = dataUploadURL || null;
    }
  } catch (error) {
    res.status(500).json({ error: "Error saving media" });
  }
  next();
}



