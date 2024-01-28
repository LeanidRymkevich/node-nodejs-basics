import { access, unlink } from 'fs/promises';
import { __dirName } from './utils.js';

const FILE_TO_DELETE = 'files/fileToRemove.txt';
const ERROR_MSG = 'FS operation failed';

const file_path = __dirName + '/' + FILE_TO_DELETE;

const remove = async () => {
    try {
        await access(file_path);
    } catch {
        throw new Error(ERROR_MSG);
    }

    await unlink(file_path);
};

await remove();