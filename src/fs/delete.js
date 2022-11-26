import fs from 'fs';
const remove = async () => {
  const path = 'src/fs/files/fileToRemove.txt';

  if (!fs.existsSync(path)) {
    throw new Error(`TFS operation failed (File doesn't exist)`);
  } else {
    fs.unlink(path, (err) => {
      console.log('\x1b[42m', 'File deleted!');
      if (err) {
        console.error(err);
        return;
      }
    });
  }
};

await remove();
