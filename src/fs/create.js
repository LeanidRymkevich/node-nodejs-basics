import { access, writeFile } from 'fs/promises';
import { __dirName } from './utils.js';

const DESTINATION_PATH = 'files/fresh.txt';
const TEXT_TO_WRITE = 'I am fresh and young';
const FILE_EXISTS_ERROR_MSG = 'FS operation failed';

const path = __dirName + '/' + DESTINATION_PATH;

const create = async () => {
    let exists = true;
    try {
        await access(path);
    } catch {
        exists = false;
    }

    if (exists) throw new Error(FILE_EXISTS_ERROR_MSG);

    await writeFile(path, TEXT_TO_WRITE);
};

await create();