import { readdir } from 'fs/promises';
import { __dirName, SOURCE_FOLDER } from './constants.js';

const ERROR_MSG = 'FS operation failed';

const source_path = `${__dirName}/${SOURCE_FOLDER}`;

const list = async () => {
    let fileNames;

    try {
        fileNames = await readdir(source_path);
    } catch {
        throw new Error(ERROR_MSG);
    }

    fileNames.forEach(fileName => console.log(fileName));
};

await list();