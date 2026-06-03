import fs from 'fs';
import path from 'path';

const assetsDir = './src/assets';
const files = fs.readdirSync(assetsDir);

const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];
const imageFiles = files.filter(file => {
  const ext = path.extname(file).toLowerCase();
  return imageExtensions.includes(ext) && (file.startsWith('Screenshot_') || file.startsWith('2026-04-12_') || file.startsWith('2026-04-12__'));
});

console.log(`Found ${imageFiles.length} image files to inspect.`);

// Generate App.tsx replacement code to display all images
let importsCode = "import { useState } from 'react';\n";
let imagesArrayCode = "const images = [\n";

imageFiles.forEach((file, idx) => {
  const varName = `img_${idx}`;
  importsCode += `import ${varName} from './assets/${file}';\n`;
  imagesArrayCode += `  { name: '${file}', src: ${varName} },\n`;
});

imagesArrayCode += "];\n";

const componentCode = `
${importsCode}
${imagesArrayCode}

export default function ImageInspector() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div style={{ padding: '20px', background: '#111', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1>Image Inspector</h1>
      <p>Click on any filename to copy it to clipboard</p>
      {copied && <div style={{ position: 'fixed', top: '20px', right: '20px', background: '#25D366', padding: '10px 20px', borderRadius: '5px' }}>Copied: {copied}</div>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {images.map((img, idx) => (
          <div key={idx} style={{ border: '1px solid #333', borderRadius: '8px', padding: '10px', background: '#222' }}>
            <img src={img.src} alt={img.name} style={{ width: '100%', height: '220px', objectFit: 'contain', background: '#000', borderRadius: '4px' }} />
            <div 
              onClick={() => handleCopy(img.name)}
              style={{ marginTop: '10px', fontSize: '12px', wordBreak: 'break-all', cursor: 'pointer', color: '#aaa', hover: { color: '#fff' } }}
            >
              {img.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`;

fs.writeFileSync('./src/ImageInspector.tsx', componentCode);
console.log('Generated src/ImageInspector.tsx successfully.');
