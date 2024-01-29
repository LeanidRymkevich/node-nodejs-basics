import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

const SOURCE_FOLDER = 'files';
const SCRIPT_FILE = 'script.js';

const fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(fileName);

const script_path = `${__dirName}/${SOURCE_FOLDER}/${SCRIPT_FILE}`;

const spawnChildProcess = async (args) => {
    const child = fork(script_path, args, {stdio: [0, 1, 2, 'ipc']});
};


spawnChildProcess(['arg1', 'arg2', 'arg3']);
