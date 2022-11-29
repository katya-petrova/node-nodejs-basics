import fs from 'fs';

const read = async () => {
  const readable = fs.createReadStream('src/streams/files/fileToRead.txt');

  readable.on('readable', () => {
    let chunk;

    while (null !== (chunk = readable.read())) {
      process.stdout.write(chunk + '\n');
    }
  });
};

await read();
