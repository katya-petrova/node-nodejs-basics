import fs from 'fs';
import { writeFile } from 'fs/promises';

const create = async () => {
  try {
    const path = 'src/fs/files/fresh.txt';
    if (fs.existsSync(path)) {
      throw new Error('TFS operation failed');
    } else {
      await writeFile(path, 'I am fresh and young');
    }
  } catch (err) {
    console.log(err);
  }
};

await create();
