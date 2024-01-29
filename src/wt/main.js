import { Worker } from 'worker_threads';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';

const WORKER_FILE = 'worker.js';
const INITIAL_NUMBER = 10;

const fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(fileName);

const runWorker = (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(`${__dirName}/${WORKER_FILE}`, { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
  });
};

const performCalculations = async () => {
    const cores = cpus().length;
    const res = [];

    for(let i = 0; i < cores; i++) {
        try {
            const data = await runWorker(INITIAL_NUMBER + i);
            res.push({status: 'resolved', data});
        } catch {
            res.push({status: 'error', data: null});
        }
    }
    
    res.forEach(obj => console.log(obj));
};

await performCalculations();