import zlib from 'zlib';
import fs from 'fs';
const decompress = async () => {
  var unzip = zlib.createUnzip();

  var read = fs.createReadStream('src/zip/files/archive.gz');
  var write = fs.createWriteStream('src/zip/files/fileToCompress.txt');

  read.pipe(unzip).pipe(write);
  console.log('unZipped Successfully');
};

await decompress();
