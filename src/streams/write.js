import fs from 'fs';
const write = async () => {
  const writable = fs.createWriteStream('src/streams/files/fileToWrite.txt');
  process.stdin.on('data', (data) => {
    writable.write(data);
    process.exit();
  });
};

await write();
