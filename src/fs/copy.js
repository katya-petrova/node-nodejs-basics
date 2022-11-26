import fs from 'fs';
const copy = async () => {
  const src = `src/fs/files`;
  const dest = `src/fs/files_copy`;
  if (fs.existsSync(dest) || !fs.existsSync(src)) {
    throw new Error(
      'TFS operation failed (File already exists or source folder doent exist)'
    );
  } else {
    fs.cp(src, dest, { recursive: true }, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};

copy();
