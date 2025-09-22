// api/random.js
const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  // 图片文件夹路径
  const imagesDir = path.join(process.cwd(), 'images');

  // 读取 images 文件夹里的所有文件
  const files = fs.readdirSync(imagesDir).filter(file => /\.(png|jpg|jpeg|gif)$/.test(file));

  // 随机选一张
  const randomImage = files[Math.floor(Math.random() * files.length)];

  // 返回 JSON 格式
  res.status(200).json({ image: `/images/${randomImage}` });
}
