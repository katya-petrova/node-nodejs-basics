import fs from 'fs';
const read = async () => {
  const src = 'src/fs/files/fileToRead.txt';
  if (!fs.existsSync(src)) {
    throw new Error(`TFS operation failed (File doesn't exist)`);
  } else {
    fs.readFile(src, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
  }
};

await read();
