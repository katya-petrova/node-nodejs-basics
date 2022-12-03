import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const child = spawn('node', ['./src/cp/files/script.js', ...args]);

  process.stdin.pipe(child.stdin);

  child.stdout.on('data', (data) => {
    console.log(data.toString());
  });
};

spawnChildProcess(['--uno', '--dos', '--tres']);
