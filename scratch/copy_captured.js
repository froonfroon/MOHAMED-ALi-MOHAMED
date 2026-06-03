import fs from 'fs';
import path from 'path';

const srcFolder = 'C:/Users/pc/.gemini/antigravity-ide/brain/5cb2f7c7-a5a0-42e5-82eb-2f9d5a191ad5';
const destFolder = './src/assets';

const mapping = {
  'profsser_site_1780445464111.png': 'profsser_site.png',
  'halloreisen_site_1780445481956.png': 'halloreisen_site.png',
  'kayhold_site_1780445505529.png': 'kayhold_site.png'
};

Object.entries(mapping).forEach(([srcFile, destFile]) => {
  const srcPath = path.join(srcFolder, srcFile);
  const destPath = path.join(destFolder, destFile);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${srcFile} to ${destPath}`);
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
});
