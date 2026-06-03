
import { useState } from 'react';
import img_0 from './assets/2026-04-12__13__b9686bb8350c723f.png';
import img_1 from './assets/2026-04-12__15__-_Copy_c217791bcab9f65b.png';
import img_2 from './assets/2026-04-12__15__43a3d2e6a2002b03.png';
import img_3 from './assets/2026-04-12__16__-_Copy_7f86898de88c8290.png';
import img_4 from './assets/2026-04-12__17__13a39acf54d23b0e.png';
import img_5 from './assets/Screenshot_2026-03-27_023655_658fb26bcfe5d562.png';
import img_6 from './assets/Screenshot_2026-03-27_145032_257fcea50efa33dc.png';
import img_7 from './assets/Screenshot_2026-03-27_145032_cd22c6ae46a3ee16.png';
import img_8 from './assets/Screenshot_2026-03-27_145054_206e4f5db2cbb354.png';
import img_9 from './assets/Screenshot_2026-03-27_145121_aa7e3349e2998900.png';
import img_10 from './assets/Screenshot_2026-03-27_145656_de7d58a0e07870c1 (1).png';
import img_11 from './assets/Screenshot_2026-03-27_145656_de7d58a0e07870c1.png';
import img_12 from './assets/Screenshot_2026-03-27_145912_3a4c2be44bd7053b.png';
import img_13 from './assets/Screenshot_2026-03-27_145942_ecaa778d7daa6839.png';
import img_14 from './assets/Screenshot_2026-04-11_152541_1b8f61ece5a2bf47.png';
import img_15 from './assets/Screenshot_2026-04-11_152618_5368d394065a94da.png';
import img_16 from './assets/Screenshot_2026-04-11_152645_bd8afe99d514da3e.png';
import img_17 from './assets/Screenshot_2026-04-11_153945_889af786de19f71f.png';
import img_18 from './assets/Screenshot_2026-04-11_153953_5a9912575bb7bb52.png';
import img_19 from './assets/Screenshot_2026-04-11_154004_fd5b222322d2198f.png';
import img_20 from './assets/Screenshot_2026-04-11_154012_c205ce93bb27f1c0.png';
import img_21 from './assets/Screenshot_2026-04-11_154024_b3fe8144aa7879e6.png';
import img_22 from './assets/Screenshot_2026-04-12_032753_574e58ba7565820b.png';
import img_23 from './assets/Screenshot_2026-04-12_032816_24c283c724d4fd05.png';
import img_24 from './assets/Screenshot_2026-04-12_032833_28cf22174a54813c.png';
import img_25 from './assets/Screenshot_2026-04-12_032854_6c13690bebb7c457.png';
import img_26 from './assets/Screenshot_2026-04-12_032933_3746fbd7b150d9cb.png';

const images = [
  { name: '2026-04-12__13__b9686bb8350c723f.png', src: img_0 },
  { name: '2026-04-12__15__-_Copy_c217791bcab9f65b.png', src: img_1 },
  { name: '2026-04-12__15__43a3d2e6a2002b03.png', src: img_2 },
  { name: '2026-04-12__16__-_Copy_7f86898de88c8290.png', src: img_3 },
  { name: '2026-04-12__17__13a39acf54d23b0e.png', src: img_4 },
  { name: 'Screenshot_2026-03-27_023655_658fb26bcfe5d562.png', src: img_5 },
  { name: 'Screenshot_2026-03-27_145032_257fcea50efa33dc.png', src: img_6 },
  { name: 'Screenshot_2026-03-27_145032_cd22c6ae46a3ee16.png', src: img_7 },
  { name: 'Screenshot_2026-03-27_145054_206e4f5db2cbb354.png', src: img_8 },
  { name: 'Screenshot_2026-03-27_145121_aa7e3349e2998900.png', src: img_9 },
  { name: 'Screenshot_2026-03-27_145656_de7d58a0e07870c1 (1).png', src: img_10 },
  { name: 'Screenshot_2026-03-27_145656_de7d58a0e07870c1.png', src: img_11 },
  { name: 'Screenshot_2026-03-27_145912_3a4c2be44bd7053b.png', src: img_12 },
  { name: 'Screenshot_2026-03-27_145942_ecaa778d7daa6839.png', src: img_13 },
  { name: 'Screenshot_2026-04-11_152541_1b8f61ece5a2bf47.png', src: img_14 },
  { name: 'Screenshot_2026-04-11_152618_5368d394065a94da.png', src: img_15 },
  { name: 'Screenshot_2026-04-11_152645_bd8afe99d514da3e.png', src: img_16 },
  { name: 'Screenshot_2026-04-11_153945_889af786de19f71f.png', src: img_17 },
  { name: 'Screenshot_2026-04-11_153953_5a9912575bb7bb52.png', src: img_18 },
  { name: 'Screenshot_2026-04-11_154004_fd5b222322d2198f.png', src: img_19 },
  { name: 'Screenshot_2026-04-11_154012_c205ce93bb27f1c0.png', src: img_20 },
  { name: 'Screenshot_2026-04-11_154024_b3fe8144aa7879e6.png', src: img_21 },
  { name: 'Screenshot_2026-04-12_032753_574e58ba7565820b.png', src: img_22 },
  { name: 'Screenshot_2026-04-12_032816_24c283c724d4fd05.png', src: img_23 },
  { name: 'Screenshot_2026-04-12_032833_28cf22174a54813c.png', src: img_24 },
  { name: 'Screenshot_2026-04-12_032854_6c13690bebb7c457.png', src: img_25 },
  { name: 'Screenshot_2026-04-12_032933_3746fbd7b150d9cb.png', src: img_26 },
];


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
