import fs from 'fs';
import { cp } from 'fs/promises';
const copy = async () => {
  const src = `src/fs/files`;
  const dest = `src/fs/files_copy`;
  if (fs.existsSync(dest) || !fs.existsSync(src)) {
    throw new Error(
      'TFS operation failed (File already exists or source folder doent exist)'
    );
  } else {
    await cp(src, dest, { recursive: true }, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};

copy();
