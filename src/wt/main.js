import { Worker, isMainThread } from 'node:worker_threads';

import { cpus } from 'os';

const performCalculations = async () => {
  let primes = [];
  const systemCpuCores = cpus();
  if (isMainThread) {
    const threadCount = systemCpuCores.length;
    const threads = new Set();
    // console.log(`Running with ${threadCount} threads...`);
    let n = 10;
    for (let i = 0; i < threadCount - 1; i++) {
      threads.add(
        new Worker('./src/wt/worker.js', {
          workerData: { n: n++, order: n },
        })
      );
    }
    for (let worker of threads) {
      worker.on('error', (err) => {
        primes.push({ status: 'error', data: null });
      });
      worker.on('exit', () => {
        threads.delete(worker);
        // console.log(`Thread exiting, ${threads.size} running...`);
        if (threads.size === 0) {
          console.log(sortArr(primes));
        }
      });
      worker.on('message', (msg) => {
        primes.push(msg);
      });
    }
  }
};
await performCalculations();

const sortArr = (arr) => {
  let sortedArr = arr.sort((a, b) => a.order - b.order);

  sortedArr.map((el) => delete el.order);

  return sortedArr;
};
