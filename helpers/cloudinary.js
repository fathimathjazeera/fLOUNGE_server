const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: 'dkggntbm6',
  api_key:'973178581122692',
  api_secret:'oZfhjcUyUcbSBnqDG23v0tGAOD0'
})

const storage = new multer.memoryStorage();
async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
