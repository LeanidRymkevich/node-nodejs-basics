import { access, readdir, mkdir, copyFile } from 'fs/promises';
import { __dirName } from './utils.js';

const SOURCE_FOLDER = 'files';
const DESTINATION_FOLDER = 'files_copy';
const ERROR_MSG = 'FS operation failed';

const source_path = __dirName + '/' + SOURCE_FOLDER;
const destination_path = __dirName + '/' + DESTINATION_FOLDER;

const copy = async () => {
    let fileNames;
    try {
        fileNames = await readdir(source_path);
    } catch {
        throw new Error(ERROR_MSG);
    }

    let hasToBeThrown = true;
    try {
        await access(destination_path);
    } catch {
        hasToBeThrown = false;
        await mkdir(destination_path);
    }
    if (hasToBeThrown) throw new Error(ERROR_MSG);

    fileNames.forEach(async (fileName) => await copyFile(`${source_path}/${fileName}`, `${destination_path}/${fileName}`));
};

await copy();
