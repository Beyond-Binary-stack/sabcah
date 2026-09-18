import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

// Function to convert images to webp
async function convertToWebp() {
  console.log('Starting image conversion to WebP...');
  
  // Find all image files
  const imageExtensions = ['.jpg', '.jpeg', '.png'];
  const files = [];
  
  function findFiles(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        findFiles(fullPath);
      } else if (imageExtensions.includes(path.extname(item).toLowerCase())) {
        files.push(fullPath);
      }
    }
  }
  
  findFiles(publicDir);
  
  console.log(`Found ${files.length} images to convert`);
  
  let converted = 0;
  let skipped = 0;
  
  for (const file of files) {
    const ext = path.extname(file);
    const webpPath = file.replace(ext, '.webp');
    
    // Skip if webp already exists and is newer
    if (fs.existsSync(webpPath)) {
      const originalTime = fs.statSync(file).mtime;
      const webpTime = fs.statSync(webpPath).mtime;
      if (webpTime >= originalTime) {
        skipped++;
        continue;
      }
    }
    
    try {
      await sharp(file)
        .webp({ quality: 85 })
        .toFile(webpPath);
      
      const originalSize = fs.statSync(file).size;
      const webpSize = fs.statSync(webpPath).size;
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
      
      console.log(`✓ Converted: ${path.relative(publicDir, file)} -> ${savings}% smaller`);
      converted++;
    } catch (error) {
      console.error(`✗ Error converting ${file}:`, error.message);
    }
  }
  
  console.log(`\nConversion complete!`);
  console.log(`- Converted: ${converted} files`);
  console.log(`- Skipped: ${skipped} files (already up to date)`);
}

convertToWebp().catch(console.error);