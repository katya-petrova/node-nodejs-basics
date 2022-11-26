import fs from 'fs';
const list = async () => {
  const dir = `src/fs/files`;
  if (!fs.existsSync(dir)) {
    throw new Error(`TFS operation failed (Folder doesn't exist)`);
  } else {
    fs.readdir(dir, (err, files) => {
      if (err) {
        throw err;
      }

      files.forEach((file) => {
        console.log(file);
      });
    });
  }
};

await list();
