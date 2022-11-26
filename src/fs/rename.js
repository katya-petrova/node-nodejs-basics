import fs from 'fs';
const rename = async () => {
  const src = 'src/fs/files/wrongFilename.txt';
  const dest = 'src/fs/files/properFilename.md';
  if (fs.existsSync(dest) || !fs.existsSync(src)) {
    throw new Error(
      'TFS operation failed (File already exists or source folder doesnt exist)'
    );
  } else {
    fs.rename(src, dest, () => {
      console.info('\x1b[42m', '\nFile Renamed!\n');
    });
  }
};

await rename();
