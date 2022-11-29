import fs from 'fs';
import { createHash } from 'crypto';
const calculateHash = async () => {
  const src = 'src/hash/files/fileToCalculateHashFor.txt';
  if (!fs.existsSync(src)) {
    throw new Error(`TFS operation failed (File doesn't exist)`);
  } else {
    fs.readFile(src, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(createHash('sha256').update(data).digest('hex'));
    });
  }
};

await calculateHash();
