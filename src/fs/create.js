import { access, writeFile } from 'fs/promises';
import { __dirName, SOURCE_FOLDER } from './constants.js';

const DESTINATION_FILE = 'fresh.txt';
const TEXT_TO_WRITE = 'I am fresh and young';
const FILE_EXISTS_ERROR_MSG = 'FS operation failed';

const path = `${__dirName}/${SOURCE_FOLDER}/${DESTINATION_FILE}`

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