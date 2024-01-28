import { access, writeFile } from 'fs/promises';
import { __dirName, SOURCE_FOLDER, ERROR_MSG } from './constants.js';

const DESTINATION_FILE = 'fresh.txt';
const TEXT_TO_WRITE = 'I am fresh and young';

const path = `${__dirName}/${SOURCE_FOLDER}/${DESTINATION_FILE}`

const create = async () => {
    let exists = true;
    try {
        await access(path);
    } catch {
        exists = false;
    }

    if (exists) throw new Error(ERROR_MSG);

    await writeFile(path, TEXT_TO_WRITE);
};

await create();