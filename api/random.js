// api/random.js
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    // 图片文件夹路径
    const imagesDir = path.join(process.cwd(), 'images');

    // 读取 images 文件夹里的所有图片文件
    const files = fs.readdirSync(imagesDir).filter(file =>
      /\.(png|jpg|jpeg|gif)$/.test(file)
    );

    if (files.length === 0) {
      return res.status(404).json({ error: 'No images found' });
    }

    // 随机选一张图片
    const randomImage = files[Math.floor(Math.random() * files.length)];

    // 返回 JSON
    res.status(200).json({ image: `/images/${randomImage}` });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};
