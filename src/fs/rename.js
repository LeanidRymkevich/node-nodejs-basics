import * as fs from 'fs/promises';
import { __dirName } from './utils.js';

const SOURCE_FILE = 'files/wrongFilename.txt';
const RENAMED_FILE = 'files/properFilename.md';
const ERROR_MSG = 'FS operation failed';

const source_path = __dirName + '/' + SOURCE_FILE;
const renamed_path = __dirName + '/' + RENAMED_FILE;

const rename = async () => {
    try {
        await fs.access(source_path);
    } catch {
        throw new Error(ERROR_MSG);
    }

    let hasToBeThrown = true;
    try {
        await fs.access(renamed_path);
    } catch {
        hasToBeThrown = false;
    }
    if (hasToBeThrown) throw new Error(ERROR_MSG);

    await fs.rename(source_path, renamed_path);
};

await rename();